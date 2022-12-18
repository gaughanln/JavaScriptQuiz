// GIVEN I am taking a code quiz
var quizQuestion = document.querySelector(".questionHeader");
var answerChoices = document.querySelector(".answer-choices");
var timerEl = document.getElementById("countdown");
var startQuizBtn = document.querySelector(".start-quiz");
var alertMsg = document.querySelector(".alert");

var currentQuestionIndex = 0;
var score = 0;

// STEP 1:
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
startQuizBtn.addEventListener("click", displayQuizQuestions);

// countdown timer (80 seconds)
function startCountdown() {
  var timeLeft = 80;
}

// STEP 2:
// WHEN I answer a question
// THEN I am presented with another question
var choices = [
  {
    question: "Inside which element do we put the Javascript?",
    answers: ["<header>", "<script>", "<Javascript>", "<footer>"],
    correctAnswer: "<script>",
  },

  {
    question: "How do you create a function in JavaScript?",
    answers: [
      "function = myFunction()",
      "function:myFunction()",
      "function myFunction()",
    ],
    correctAnswer: "function myFunction()",
  },

  {
    question: "JavaScript is the same as Java",
    answers: ["True", "False"],
    correctAnswer: "False",
  },

  {
    question:
      "How do you write an IF statement for executing code if 'i' is NOT equal to 8?",
    answers: ["if (i != 8)", "if (i <= 8)", "if (i == 8)", "if (i === 8)"],
    correctAnswer: "if (i != 8)",
  },

  {
    question: "How do you declare a JavaScript variable?",
    answers: ["var cat", "variable cat", "v cat"],
    correctAnswer: "var cat",
  },
];

function displayQuizQuestions() {
  // causes button to hide once the quiz begins
  startQuizBtn.classList.add("hidden");

  if (currentQuestionIndex === choices.length) {
    console.log("Quiz complete! Your score is: " + score);
    return;
  }

  var currentQuestion = choices[currentQuestionIndex];
  console.log(currentQuestion.question);
  console.log(currentQuestion.answers);
  console.log(currentQuestion.correctAnswer);
  quizQuestion.textContent = currentQuestion.question;

  answerChoices.innerHTML = "";
  alertMsg.innerHTML = "";

  // for loop for questions
  var userAnswer = "";
  for (let index = 0; index < currentQuestion.answers.length; index++) {
   
    var answerItem = document.createElement("li");
    answerItem.textContent = currentQuestion.answers[index];
    answerItem.addEventListener("click", function () {
      
      if (this.textContent === currentQuestion.correctAnswer) {
        currentQuestionIndex++;
        displayQuizQuestions();
        console.log("Correct answer chosen");
      } else {
        alertMsg.textContent = "❌ Wrong answer, try again. ❌"
        console.log("❌ Wrong answer chosen ❌");
      }
    });
    answerChoices.appendChild(answerItem);
  }
}

// STEP 3:
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock

// STEP 4:
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over

// STEP 5:
// WHEN the game is over
// THEN I can save my initials and my score



// look at past assignments for the timer situation. start by just having a timer in the first place. if it doesn't take time off - worry about that last.


// displayQuizQuestions();
// countdown();
// quiz choices + results (incorrect/try again or correct!)

// what do we need?
// // start timer when the quiz begins
// need a penalty for getting answer wrong
// make answers clickable
