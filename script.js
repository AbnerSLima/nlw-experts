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
    pergunta: "Quando um personagem rola um dado de ataque a distâcia, ele adiciona qual modificador ao resultado?",
    respostas: [
      "Destreza",
      "Constituição",
      "Força"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o nome dado à capacidade de um personagem de realizar uma ação adicional durante sua vez em uma rodada de combate?",
    respostas: [
      "Movimento Extra",
      "Ação Bônus",
      "Ataque Adicional"
    ],
    correta: 1
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
    pergunta: "Qual é o termo usado para descrever a capacidade de um personagem de ignorar parte do dano de um ataque?",
    respostas: [
      "Evasão",
      "Absorção",
      "Resistência"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o nome dado à rolagem de dados para determinar a ordem do combate?",
    respostas: [
      "Iniciação",
      "Determinação",
      "Iniciativa"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o nome dado à rolagem de dados para determinar se um ataque atinge ou não um alvo?",
    respostas: [
      "Verificação de Ataque",
      "Determinação de Acerto",
      "Rolagem de Ataque"
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
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas + ' peguntas!'

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

const tentativaBtn = document.querySelector('#tentativa');

tentativaBtn.addEventListener('click', () => {
    location.reload();
    window.scrollTo(0, 0);
});
}
  
  