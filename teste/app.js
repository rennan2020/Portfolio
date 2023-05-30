function gerarResposta() {
    const API_URL = 'https://api.openai.com/v1/chat/completions'; // URL da API do ChatGPT
    const userInput = document.getElementById('pergunta').value; // Pergunta do usuário
  
    axios.post(API_URL, {
      model: 'gpt-3.5-turbo', // Nome do modelo do ChatGPT
      messages: [{ role: 'system', content: 'Você é um assistente virtual.' }, { role: 'user', content: userInput }]
    }, {
      headers: {
        'Authorization': 'Bearer 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', 
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      const answer = response.data.choices[0].message.content; // Extrai a resposta do ChatGPT
      document.getElementById('resposta').value = answer; // Exibe a resposta no campo de texto
    })
    .catch(error => {
      console.error('Erro:', error);
    });
  }
  