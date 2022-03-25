// variable decleration starts here //
var quizQuestions= [
    {
      prompt: "what is the correct way to write a function",
      answers: [
        "pizza(){     }",
        "function pizza() {     }",
        "function pizza{     }",
        "pizza{     }"
      ],
      correctAnswerIndex: 1
    },
    {
      prompt: "how do you save a users input?",
      answers: [
        "Create a folder that stores every input logged in the console by users",
        "Use the .saveuserinput command to store user information",
        "You cannot save users inputs",
        "Create a function that uses a variable to log userinputs"
      ],
      correctAnswerIndex: 3
    },
    {
      prompt: "what is the correct way to write a for loop",
      answers: [
        "for = loop",
        "function for(){      }",
        "for( let i=0; i < var.length; i++",
        "for( let i=1; i < var.answer; i++"
      ],
      correctAnswerIndex: 2
    },
    
  ]
var start = document.getElementById('start-button'); 
var questionsPrompt = document.getElementById("quizQuestions");
var timerEl = document.getElementById('timer');
var scoreEl = document.getElementById('score');
var questionAnswer0 = document.getElementById('question-0');
var questionAnswer1 = document.getElementById('question-1');
var questionAnswer2 = document.getElementById('question-2');
var questionAnswer3 = document.getElementById('question-3');
var questionContainer = document.getElementById('question-container');
var timerContainer = document.getElementById('timer-container');
var userInitialsInput = document.getElementById('user-initials');
var submitButton = document.getElementById('submit-initials');
var submitContainer = document.getElementById('submit-container');
var questionAnswerElements = [
    questionAnswer0,
    questionAnswer1,
    questionAnswer2,
    questionAnswer3
  ]
var time = 45;
var quizQuestionIndex = 0;
var score = 0;
  
function questionsList(question){
   questionsPrompt.textContent = question.prompt;
for (var i=0; i <question.answers.length; i++) {
    questionAnswerElements[i].textContent = question.answers[i]
}
}
function questionAnswerClickHandler(event) {
    var answerClicked = event.target;
    var answerIndex = answerClicked.getAttribute('data-index');
    if (answerIndex == quizQuestions[quizQuestionIndex].correctAnswerIndex) {
      answeredQuestionCorrectly()
    } else {
      answeredQuestionIncorrectly()
    }
    quizQuestionIndex++;
    if (quizQuestionIndex >= quizQuestions.length) {
      time = 0;
    } else {
    questionsList(quizQuestions[quizQuestionIndex]);
    }
  }
  
  function answeredQuestionCorrectly() {
    score += 10;
    scoreEl.textContent = score;
  }
  
  function answeredQuestionIncorrectly() {
    time -= 10;
  }
  
  function startQuiz() {
    var timerInterval = setInterval(function() {
      time--;
      if (time <= 0) {
        timerEl.textContent = 0;
        endGame();
        clearInterval(timerInterval);
      } else {
        timerEl.textContent = time;
      }
    }, 1000)
    function endGame() {
        console.log("congrats you have completed the quiz please submit your initials and your score will be logged.")
      }
  
    questionsList(quizQuestions[quizQuestionIndex]);
  }
   
  function submitScore() {
    var userInitials = userInitialsInput.value;
    localStorage.setItem(userInitials, score);
  }
  
  function setUpClickListeners() {
    for (var i = 0; i < questionAnswerElements.length; i++) {
     questionAnswerElements[i].addEventListener('click', questionAnswerClickHandler);
    }
  }

  setUpClickListeners();
start.addEventListener('click', startQuiz);
submitButton.addEventListener('click', submitScore);