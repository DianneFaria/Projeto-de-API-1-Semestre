var myQuestions = [
	{
		question: "1. Qual é o objetivo principal do Scrum?",
		answers: {
			a: 'Gerenciar projetos complexos de forma eficiente',
			b: 'Desenvolver software com alta qualidade.',
			c: 'Aumentar a produtividade da equipe de desenvolvimento.',
            d: 'Reduzir os custos do projeto.'
		},
		correctAnswer: 'a'
	},
	{
		question: "2. O que é um sprint no Scrum?",
		answers: {
			a: 'Um evento que ocorre no final do projeto.',
			b: 'Uma atividade que acontece apenas quando necessário.',
			c: 'Um período fixo de tempo para desenvolver um conjunto de funcionalidades.',
            d: 'Um tipo de reunião para discutir problemas de desenvolvimento.'
		},
		correctAnswer: 'c'
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
