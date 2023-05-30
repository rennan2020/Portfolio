const axios = require('axios');

const chat = document.getElementById(".btn");

chat.addEventListener("click", function(event){
    event.preventDefault();
    const userInput = document.getElementById("prompt-box").value;
    
});

const API_URL = 'https://api.openai.com/v1/chat/completions'; // URL da API do ChatGPT

const prompt = 'userInput'; // Pergunta ou mensagem do usuário

axios.post(API_URL, {
  model: 'gpt-3.5-turbo', // Nome do modelo do ChatGPT
  messages: [{ role: 'system', content: 'Você é um assistente virtual da empresa Dulino, ela trabalha com educação tecnologica com crianças de 6 à 18 anos de idade.' }, { role: 'user', content: prompt }]
}, {
  headers: {
    'Authorization': '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', 
    'Content-Type': 'application/json'
  }
})
.then(response => {
  const answer = response.data.choices[0].message.content; // Extrai a resposta do ChatGPT
  const respostaDiv = document.getElementById('resposta');
  respostaDiv.textContent = 'Resposta: ' + answer;
})
.catch(error => {
  console.error('Erro:', error);
});

/* Parte em que quando clicar na barra lateral as informações vão surgir, a primeira parte é da responsivdade
já a segunda é responsável pela página de valores */
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}