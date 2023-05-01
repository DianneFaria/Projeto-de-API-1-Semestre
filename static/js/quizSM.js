var myQuestions = [
	{
		question: "1. Qual é o papel do Scrum Master em um time Scrum?",
		answers: {
			a: 'Gerenciar o backlog de produto.',
			b: 'Definir as metas do sprint.',
			c: 'Remover obstáculos que impedem o time de alcançar seus objetivos.',
            d: 'Designar tarefas para os membros do time.'
		},
		correctAnswer: 'c'
	},
	{
		question: "2. Qual das seguintes afirmações melhor descreve a responsabilidade do Scrum Master em um projeto Scrum?",
		answers: {
			a: 'O Scrum Master é o líder do projeto e toma todas as decisões importantes.',
			b: 'O Scrum Master é responsável por garantir que o time Scrum siga as práticas e valores do Scrum.',
			c: 'O Scrum Master é responsável por desenvolver o produto e assegurar sua qualidade.',
            d: 'O Scrum Master é responsável por gerenciar o backlog de produto e determinar as prioridades das tarefas.'
		},
		correctAnswer: 'b'
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
