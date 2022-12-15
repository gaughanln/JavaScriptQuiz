// add query selectors
var start = document.querySelector(".startQuiz");
var question = document.querySelector(".questionHeader");
var answers = document.querySelector(".answers");
var currentQuestionIndex = 0;


// Question variables
var questions = [
  { question: "Inside which element do we put the Javascript?",
    answers: ["<header>", "<script>", "<Javascript>", "<footer>"],
    correctAnswer: "<script>" },

  { question: "How do you create a function in JavaScript?",
    answers: ["function = myFunction()", "function:myFunction()", "function myFunction()"],
    correctAnswer: "function myFunction()" },

  { question: "JavaScript is the same as Java",
    answers: ["True", "False"],
    correctAnswer: "False" },

  { question: "How do you write an IF statement for executing code if 'i' is NOT equal to 8?",
    answers: [ "if (i != 8)", "if (i <= 8)", "if (i == 8)", "if (i === 8)"],
    correctAnswer: "if (!=8)" },

  { question: "How do you declare a JavaScript variable?", 
    answers: ["var cat", "variable cat", "v cat"],
    correctAnswer: "var cat" },
    ]

// for the for loop
// questions[i].question

// function to start quiz
function startQuiz() {
  var currentQuestion = questions[currentQuestionIndex].question;
  
  var currentAnswers = questions[currentQuestionIndex].answers;
  console.log(currentQuestion)

  // this line is calling the variable we made above to show the text on the page
question.textContent= currentQuestion
  for (let index = 0; index < currentAnswers.length; index++) {
    answers.textContent=currentAnswers
    // must use concats to modify to make it look like i want
    //if the correct answer is chosen, show good job. 
  // so we need/want a next question button to appear functional after the correct answer is given?
    // else, show try again 
  }
}

// functions needed:
// 


function countdown(){
  // start when the quiz begins
}

startQuiz()
// quiz questions + results (incorrect/try again or correct!)

// start.addEventListener("click", XXX );