const perguntas = [
    {
      pergunta: "Qual é a sintaxe correta para se referir a um arquivo JavaScript externo chamado 'script.js'?",
      respostas: [
        "<script src='script.js'></script>",
        "<javascript src='script.js'></javascript>",
        "<link href='script.js'></link>"
      ],
      correta: 0
    },
    {
      pergunta: "Qual desses métodos de array adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array?",
      respostas: [
        "push()",
        "pop()",
        "shift()"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
      respostas: [
        "variable name;",
        "var name;",
        "v name;"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
      respostas: [
        "==",
        "===",
        "="
      ],
      correta: 1
    },
    {
      pergunta: "Qual método JavaScript é usado para selecionar um elemento HTML pelo seu id?",
      respostas: [
        "getElementById()",
        "selectById()",
        "queryById()"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o resultado da expressão '5 + '5' em JavaScript?",
      respostas: [
        "10",
        "55",
        "Error"
      ],
      correta: 1
    },
    {
      pergunta: "Qual função JavaScript é usada para imprimir algo no console do navegador?",
      respostas: [
        "console.print()",
        "console.write()",
        "console.log()"
      ],
      correta: 2
    },
    {
      pergunta: "Como você escreve um comentário de linha única em JavaScript?",
      respostas: [
        "// This is a comment",
        "<!-- This is a comment -->",
        "/* This is a comment */"
      ],
      correta: 0
    },
    {
      pergunta: "Qual método JavaScript é usado para remover o último elemento de um array e retornar esse elemento?",
      respostas: [
        "remove()",
        "delete()",
        "pop()"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a maneira correta de escrever um condicional 'if' em JavaScript?",
      respostas: [
        "if condition {}",
        "if {condition}",
        "if (condition) {}"
      ],
      correta: 2
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = 'Acertos ' + corretas.size + ' de ' + totalDePerguntas
  
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
        
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
      
      quizItem.querySelector('dl').appendChild(dt)
    }
    
    
    quizItem.querySelector('dl dt').remove()
    
    
    
    quiz.appendChild(quizItem)
  }
  
  