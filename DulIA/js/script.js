const axios = require('axios');

var chat = document.getElementById("chat");

chat.addEventListener("click", function(event){
    event.preventDefault();
    var userInput = document.getElementById("prompt-box").value;
    console.log("Usuário digitou: " + userInput);
    
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