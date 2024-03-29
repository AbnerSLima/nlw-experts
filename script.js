const perguntas = [
  {
    pergunta: "Qual dado é usado para determinar o sucesso ou fracasso de uma ação em D&D 5e?",
    respostas: [
      "D4",
      "D6",
      "D20"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o nome da habilidade usada para medir a capacidade de um personagem para se mover rapidamente e se esquivar de ataques?",
    respostas: [
      "Força",
      "Destreza",
      "Constituição"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a principal estatística usada por um guerreiro em combate corpo a corpo?",
    respostas: [
      "Inteligência",
      "Sabedoria",
      "Força"
    ],
    correta: 2
  },
  {
    pergunta: "Quando um personagem rola um dado de ataque em D&D 5e, ele adiciona qual estatística ao resultado?",
    respostas: [
      "Destreza",
      "Constituição",
      "Força"
    ],
    correta: 0
  },
  {
    pergunta: "Qual termo é usado para descrever o conjunto de regras que define como as ações são resolvidas em D&D 5e?",
    respostas: [
      "Mecânicas de Combate",
      "Regras de Movimento",
      "Sistema de Atributos"
    ],
    correta: 0
  },
  {
    pergunta: "O que um jogador faz se quiser que seu personagem tente persuadir um NPC a fazer algo?",
    respostas: [
      "Rola um dado de ataque",
      "Rola um dado de habilidade",
      "Rola um dado de dano"
    ],
    correta: 1
  },
  {
    pergunta: "Qual termo é usado para descrever a quantidade máxima de pontos de vida que um personagem pode ter?",
    respostas: [
      "Energia Vital",
      "Pontos de Golpe",
      "Resistência"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o nome dado a um teste de habilidade desafiadora em D&D 5e?",
    respostas: [
      "Teste de Resistência",
      "Teste de Aptidão",
      "Teste de Habilidade"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o nome dado a um encontro com um oponente hostil em D&D 5e?",
    respostas: [
      "Conversa",
      "Desafio",
      "Combate"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o termo usado para descrever a quantidade de movimento que um personagem pode fazer em uma rodada?",
    respostas: [
      "Velocidade",
      "Deslocamento",
      "Mobilidade"
    ],
    correta: 1
  }
];
  
const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

//vcnfn
for(const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta
  
  for(const resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
      
      corretas.delete(item)
      if(estaCorreta){
        corretas.add(item)
      }
      
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas + ' peguntas!'
    }
    
    quizItem.querySelector('dl').appendChild(dt)
  }
  
  quizItem.querySelector('dl dt').remove()
  quiz.appendChild(quizItem)

  const resultadoBtn = document.querySelector('#resultado');

resultadoBtn.addEventListener('click', () => {
    resultadoBtn.style.display = 'none';
});

const gabaritoBtn = document.querySelector('#gabarito');

gabaritoBtn.addEventListener('click', () => {

    // Seleciona todos os elementos 'dl' dentro de '.quiz-item'
    const respostasQuiz = document.querySelectorAll('.quiz-item dl');

    // Itera sobre cada pergunta
    perguntas.forEach((pergunta, index) => {
        // Obtém o índice da resposta correta para esta pergunta
        const respostaCorreta = pergunta.correta;

        // Seleciona o input de resposta correspondente à pergunta
        const inputResposta = respostasQuiz[index].querySelector(`input[value="${respostaCorreta}"]`);

        // Seleciona o input de resposta marcado pelo usuário
        const inputMarcado = respostasQuiz[index].querySelector('input:checked');

        // Verifica se o usuário selecionou uma resposta
        if (inputMarcado) {
            // Verifica se a resposta selecionada está correta
            if (inputMarcado.value == respostaCorreta) {
                // Define o estilo de fundo verde para a resposta correta
                inputMarcado.parentElement.style.color = '#00FF00';
            } else {
                // Define o estilo de fundo vermelho para a resposta incorreta
                inputMarcado.parentElement.style.color = '#FF0000';
            }
        }
    });
});

const tentativaBtn = document.querySelector('#tentativa');

tentativaBtn.addEventListener('click', () => {
    location.reload();
    window.scrollTo(0, 0);
});
}