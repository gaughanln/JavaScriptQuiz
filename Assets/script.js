// GIVEN I am taking a code quiz
var quizQuestion = document.querySelector(".questionHeader");
var answerChoices = document.querySelector(".answer-choices");
var timerEl = document.getElementById("timer");
var startQuizBtn = document.querySelector(".start-quiz");
var alertMsg = document.querySelector(".alert");
var score = document.getElementById("final-score");
var initials = document.querySelector(".initials");
var submit = document.querySelector(".submit-initials");
var gameRules = document.getElementById("#intro");

var currentQuestionIndex = 0;
var score = 0;
var timeLeft = 60;

// Start button to begin quiz
intro.addEventListener("click", function startQuiz () {
  countdown(timeLeft);
  displayQuizQuestions();
} );

// Timer function (60 seconds)
function countdown() {
  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft + " seconds remaining";
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = timeLeft + " second remaining";
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set time is up
      timerEl.textContent = "TIME IS UP!";
      clearInterval(timeInterval);
    }
  }, 1000);
}

// QUESTION / ANSWERS / CORRECT ANSWER
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

// Quiz function
function displayQuizQuestions() {
  // causes "start quiz" button and text to hide once the quiz begins
  intro.style.display = "none";

  // producing the score element
  if (timeLeft <= 0 || currentQuestionIndex === choices.length) {
    endQuiz();
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
      // want code to move on and not stay on one questin if it isn't answered correctly, how?
      if (this.textContent !== currentQuestion.correctAnswer) {
        currentQuestionIndex++;
        displayQuizQuestions();
        alertMsg.textContent = "Wrong answer 🫠";
        console.log("❌ Wrong answer chosen ❌");
        //  deducts 5 seconds if question is answered incorrectly
        timeLeft -= 5;
      } else {
        currentQuestionIndex++;
        displayQuizQuestions();
        alertMsg.textContent = "Correct, great job! 🥳";
        score++;

      }
    });
   

    answerChoices.appendChild(answerItem);
  } 
}

// hides the submit and initial text box
submit.style.display = "none";
initials.style.display = "none";

// end of quiz function
function endQuiz() {
  // clear interval time left
  clearInterval(timeLeft);

  // brings back the submit button and initial box
  submit.style.display = "block";
  initials.style.display = "block";
  

  // Produces the final score
  document.getElementById("final-score").innerHTML =
    "Quiz complete! Your score is: " + score;

  // Remove the questions from the page
  quizQuestion.textContent = "";
  answerChoices.innerHTML = "";
  alertMsg.textContent = "";

  // initiates the submit button to save initials
  submit.addEventListener("click", function saveInitials(event) {
    event.preventDefault();
    initials = initials.value;
    console.log(initials);

    //  saves the score in local storage
    localStorage.setItem("score", score);
    localStorage.setItem("initials", initials);

    saveInitials();
    // form.reset();
  })

  return;
}

