// variable decleration starts here //
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
var time = 90;
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
     questionList(quizQuestions[quizQuestionIndex]);
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