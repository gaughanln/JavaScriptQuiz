// add query selectors
var start = document.querySelector(".startQuiz");
var submit = document.querySelector(".submit");

// Question variables
var questions = [
  { question: "Inside which element do we put the Javascript?",
    answers: ["<header>", "<script>", "<Javascript>", "<footer>"],
    correctAnswer: "<script>" },

  { question: "How do you create a function in JavaScript?",
    answers: ["function = myFunction()", "function:myFunction()", "function myFunction()"],
    correctAnswer: "function myFunction()" }

  { question: "How do you write an IF statement for executing code if "i" is NOT equal to 8?",
    answers: [ "if (i != 8)", "if (i <= 8)", "if (i == 8)", "if (i === 8)"],
    correctAnswer: "if (!=8)" }



    ]

// for the for loop
// questions[i].question


      // which list type is best for the answers? I got this from the 08 class activity however they also used this to create the var li.  
      // li1.textContent = "<header>";
      // li2.textContent = "<script>";
      // li3.textContent = "<javascript>";
      // li4.textContent = "<footer>";      


// OTHER QUESTIONS
// how do you create a function in JavaScript?
// what is the correct way to write a JavaScript Array?
// JavaScript is the same thing as Java? T/F
// How do you declare a JavaScript variable? 

// functions needed:
function countdown(){
  // start when the quiz begins
}


// quiz questions + results (incorrect/try again or correct!)

start.addEventListener("Start Quiz", XXX );
submit.addEventListener("Submit", XXX)