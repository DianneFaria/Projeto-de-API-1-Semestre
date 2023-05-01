var myQuestions = [
    {
        question: "1. Sabe-se que uma equipe de desenvolvedores contém várias possíveis funções, levando isso em conta e o conhecimento adquirido, o que um User Experience Designer faz:",
        answers: {
            a: 'Ele é responsável por ser o orientador e especialista do time, tendo um conhecimento profundo sobre a plataforma.',
            b: 'Ele é responsável por garantir a qualidade do software por meio de testes no projeto.',
            c: 'Ele é responsável por criar os códigos do projeto.',
            d: 'Ele é responsável por alinhar o projeto com as necessidades do usuário.'

        },
        correctAnswer: 'c'

    },

    {
        question: "2. Todos os projetos e equipes tem suas peculiaridades, sendo organizados de acordo com suas necessidades. Tendo isso em mente, quando é mais comum encontrar desenvolvedores WebAnalitics em projetos?",
        answers: {
            a: 'Esses desenvolvedores são comumente encontrados em projetos que procuram engajamento na web, procurando sempre bons posicionamentos nos buscadores.',
            b: 'Esses desenvolvedores costumam ser encontrados em projeto que implementam inteligência artificial, buscando melhorar o algoritmo do sistema.',
            c: 'Esses desenvolvedores geralmente são encontrados em projetos que utilizam a linguagem em Python, a fim de atualizar o sistema sempre que necessário de acordo com as novas atualizações de linguagem.',
            d: 'Esses desenvolvedores são comumente encontrados em projetos que lidam com vendas, procurando manter atualizado os gráficos de lucro do sistema.'

        },
        correctAnswer: 'a'

    }
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
console.log("start")
generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		// we'll need a place to store the output and the answer choices
		var output = [];
		var answers;

		// for each question...
		for(var i=0; i<questions.length; i++){
			
			// first reset the list of answers
			answers = [];

			// for each available answer...
			for(letter in questions[i].answers){

				// ...add an html radio button
				answers.push(
					'<div>'
						+ '<input type="radio"  name="question'+i+'" value="'+letter+'">'
						+ ' ' + letter + ' - '
						+ questions[i].answers[letter]
					+ '</div>'
				);
			}

			// add this question and its answers to the output
			output.push(
				'<div class="container_texto">' + questions[i].question + '</div>'
				+ '<div class="container_texto answers">' + answers.join('') + '</div>'
			);
		}

		// finally combine our output list into one string of html and put it on the page
		quizContainer.innerHTML = output.join('');
	}


	function showResults(questions, quizContainer, resultsContainer){
		
		// gather answer containers from our quiz
		var answerContainers = quizContainer.querySelectorAll('.answers');
		
		// keep track of user's answers
		var userAnswer = '';
		var numCorrect = 0;
		
		// for each question...
		for(var i=0; i<questions.length; i++){

			// find selected answer
			userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
			
			// if answer is correct
			if(userAnswer===questions[i].correctAnswer){
				// add to the number of correct answers
				numCorrect++;
				
				// color the answers green
				answerContainers[i].style.color = '#31B404';
			}
			// if answer is wrong or blank
			else{
				// color the answers red
				answerContainers[i].style.color = 'red';
			}
		}

		// show number of correct answers out of total
		resultsContainer.innerHTML = numCorrect + ' de ' + questions.length;
	}

	// show questions right away
	showQuestions(questions, quizContainer);
	
	// on submit, show results
    
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}

}

var clearButton = document.getElementById('clear');
clearButton.onclick = function() {
  var answerContainers = quizContainer.querySelectorAll('.answers');
  for (var i = 0; i < answerContainers.length; i++) {
    var inputs = answerContainers[i].getElementsByTagName('input');
    for (var j = 0; j < inputs.length; j++) {
      if (inputs[j].type === 'radio') {
        inputs[j].checked = false;
      }
    }
    answerContainers[i].style.color = '';
  }
  resultsContainer.innerHTML = '';
};
