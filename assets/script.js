var quizQuestions= [
    {
      Question: "what is the correct way to write a function",
      answers: [
        "1",
        "2",
        "3",
        "4"
      ],
      correctAnswerIndex: 3
    },
    {
      Question: "how do you save a users input?",
      answers: [
        "6",
        "2",
        "3",
        "4"
      ],
      correctAnswerIndex: 3
    },
    {
      Question: "what is the correct way to write a for loop",
      answers: [
        "1",
        "8",
        "3",
        "4"
      ],
      correctAnswerIndex: 1
    },
    {
    Question: "how many times can you call a function?",
    answers: [
        "once",
        "twice",
        "as many times as you like",
        "never"
    ],
    correctAnswerIndex: 2
    }
  ]
var questionAnswerElements = [
    questionAnswer0,
    questionAnswer1,
    questionAnswer2,
    questionAnswer3
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

var time = 90;
var questionIndex = 0;
var score = 0;
  
function questionslist(Question){
    Question.textContent = quizQuestions.prompt;
for (var i=0; i <quizQuestions.answers.length; i++){
    questionAnswerElements[i].textContent = quizQuestions.answers[i]
}
}
function questionAnswerClickHandler(event) {
    var answerClicked = event.target;
    var answerIndex = answerClicked.getAttribute('data-index');
    if (answerIndex == quizQuestions[questionIndex].correctAnswerIndex) {
      answeredQuestionCorrectly()
    } else {
      answeredQuestionIncorrectly()
    }
    questionIndex++;
    if (questionIndex >= questions.length) {
      time = 0;
    } else {
      loadQuestion(questions[questionIndex]);
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
  
    loadQuestion(questions[questionIndex]);
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