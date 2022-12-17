// add query selectors
var start = document.querySelector(".startQuiz");
var question = document.querySelector(".questionHeader");
var answers = document.querySelector(".answers");
var currentQuestionIndex = 0;
var score = 0;

// Question variables
var questions = [
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

// for the for loop
// questions[i].question

// function to start quiz
function startQuiz() {
  // what do these do?
  questions.innerHTML = "";
  answers.innerHTML = "";

  var currentQuestion = questions[currentQuestionIndex].question;
  var currentAnswers = questions[currentQuestionIndex].answers;
  console.log(currentQuestion);

  // calling the variable we made above to show the text on the page
  // question.textContent= currentQuestion

  // do we need this for loop for questions too?
  // for (let index = 0; index < currentQuestion.length; index++)

  // answers.textContent=currentAnswers

  // for loop for answers - made to create them as answer buttons
  for (let index = 0; index < currentAnswers.length; index++);
    console.log(currentAnswers);
  
    // document.getElementById("text").innerHTML;
    // console.log(text);
    if (correctAnswer === currentAnswers){ 
      text = "Correct!, Great job";
    } else {
      text = "Try again.";
    }
  }
  // need my logic here - wtf is it?want to loop over all my choices. easiest way is to create buttons using setattributes then run an if statement. If answer = true then say correct, current question ++. elsse if not, then incorrect and still navigate to the next question. Can do an event, or button. find the logic for if/else. include in the else - the timer take seconds away THEN navigate to the next question.

  // look at past assignments for the timer situation. start by just having a timer in the first place. if it doesn't take time off - worry about that last.

  //  if(response === questions[i].answer){
  //       score++;
  //       alert("Correct!");
  //  } else {
  //       alert("WRONG!");
  //  }

  // must use concats to modify to make it look like i want

  //if the correct answer is chosen, show good job.
  // so we need/want a next question button to appear functional after the correct answer is given?

  // else, show try again


// functions needed:
//

function countdown() {
  // start when the quiz begins
  // need a penalty for getting answer wrong
}

startQuiz();
// quiz questions + results (incorrect/try again or correct!)

start.addEventListener("click", start);
