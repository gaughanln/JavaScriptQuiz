// GIVEN I am taking a code quiz
var quizQuestion = document.querySelector(".questionHeader");
var answers = document.querySelector(".answers");
var timerEl = document.getElementById('countdown');
var startQuizBtn = document.querySelector(".startQuiz");

var currentQuestionIndex = 0;
var score = 0;



// STEP 1:
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
startQuizBtn.addEventListener("click", displayQuizQuestions);

function countdown() {
  var timeLeft = 80 
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
    correctAnswer: "if (!=8)",
  },

  {
    question: "How do you declare a JavaScript variable?",
    answers: ["var cat", "variable cat", "v cat"],
    correctAnswer: "var cat",
  },
];

function displayQuizQuestions() {
  startQuizBtn.classList.add("hidden");
  var currentQuestion = choices[currentQuestionIndex];
  console.log(currentQuestion.question)
  console.log(currentQuestion.answers)
  console.log(currentQuestion.correctAnswer)
  quizQuestion.textContent= currentQuestion.question

  var currentAnswers = choices[currentQuestionIndex];
  answers.textContent=currentAnswers.answers
  
// for loop for questions
  for (let index = 0; index < currentQuestion.answers.length; index++) {


if (userAnswer === correctAnswer) { 
    console.log("Correct answer chosen");
    // text = "Correct!, Great job";
  } else (userAnswer != correctAnswer); {
    console.log("wrong answer chosen");
    // text = "Try again.";
    // needs to loop back but how
  }
  return;
  }

  // var userAnswer = "";
 


  // console.log(currentQuestion);

  // countdown();
}

// currentAnswers.addEventListener("click", checkAnswers())

// function checkAnswers() {
//   if (userAnswer === correctAnswer) { 
//     alert("Correct!, Great job");
//     console.log();
   
//   } else (userAnswer != correctAnswer); {
//     alert("wrong answer chosen");
//     console.log();
//     // text = "Try again.";
//     // needs to loop back but how
// }

// STEP 3:
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock

// Function checkAnswers(){
// for loop for answers - made to create them as answer buttons
// for (let index = 0; index < currentAnswers.length; index++);
// answers=[];
//   // document.getElementById("text").innerHTML;
//   // console.log(text);
//   if (userAnswer === correctAnswer) { 
//     console.log("Correct answer chosen");
//     // text = "Correct!, Great job";
//   } else (userAnswer != correctAnswer); {
//     console.log("wrong answer chosen");
//     // text = "Try again.";
//     // needs to loop back but how
//   }
//   return;
// }


// STEP 4:
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over

// STEP 5:
// WHEN the game is over
// THEN I can save my initials and my score



// function for answers/questions



  // question.textContent= currentQuestion
  // answers.textContent=currentAnswers


  // look at past assignments for the timer situation. start by just having a timer in the first place. if it doesn't take time off - worry about that last.

  
  // must use concats to modify to make it look like i want?? list view

 
  // so we need/want a next question button to appear functional after the correct answer is given?





// displayQuizQuestions();
// countdown();
// quiz choices + results (incorrect/try again or correct!)



// what do we need?
// // start timer when the quiz begins
  // need a penalty for getting answer wrong
  // make answers clickable
