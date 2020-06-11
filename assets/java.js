 // Grabbing my variables
 var startButton = document.getElementById("start-btn");
 var nextButton = document.getElementById("next-btn");
 var submitButton = document.getElementById("submit-btn");
 var questionContainerDiv = document.getElementById("question-container");
 var questionDiv = document.getElementById("question");
 var answerButtonEl = document.getElementById("answer-buttons");
 var introduction = document.getElementById("introduction");

 var score = 0;




 // Adding event listeners to create the flow of the game
 startButton.addEventListener("click", startGame);
 //  submitButton.addEventListener("click");
 nextButton.addEventListener("click", () => {
     currentQuestionIndex++
     if (currentQuestionIndex === 5) {
         submitButton.classList.remove("hide")
     } else {
         nextQuestion()
     }
 });

 // Function that will start the game when called
 function startGame() {
     startButton.classList.add("hide")
     introduction.classList.add("hide")
     currentQuestionIndex = 0
     questionContainerDiv.classList.remove("hide");
     nextQuestion();
 };


 // Function that is invoked by starGame function to prompt question  
 function nextQuestion() {
     resetAnswers();
     showQuestions(questions[currentQuestionIndex]);
     //  console.log(currentQuestionIndex);
 };


 function showQuestions(questions) {
     questionDiv.innerText = questions.question;
     questions.answer.forEach(answer => {
         var button = document.createElement("button");
         button.innerText = answer.text;
         button.classList.add("btn");
         //  if (answer.correct) {
         //      button.dataset.correct = answer.correct;
         //  };
         button.addEventListener("click", selectAnswer);
         answerButtonEl.appendChild(button);
     });
 };


 function resetAnswers() {
     nextButton.classList.add("hide");
     while (answerButtonEl.firstChild) {
         answerButtonEl.removeChild(answerButtonEl.firstChild);
     };
 }


 function selectAnswer(event) {
     var userChoice = event.target;
     var correct = userChoice.dataset.correct;
     nextButton.classList.remove("hide");

 };









 // List of questions 
 var questions = [{
         question: "What country has won the most World Cup titles?",
         answer: [{
                 text: "USA",
                 correct: false
             },
             {
                 text: "Brazil",
                 correct: true
             },
             {
                 text: "Italy",
                 correct: false
             },
             {
                 text: "Englad",
                 correct: false
             },
         ]
     },
     {
         question: "What NFL team won the Super Bowl in 1995?",
         answer: [{
                 text: "Green Bay Packers",
                 correct: false
             },
             {
                 text: "Kansas City Chiefs",
                 correct: false
             },
             {
                 text: "New England Patriots",
                 correct: false
             },
             {
                 text: "Dallas Cowboys",
                 correct: true
             },
         ]
     },
     {
         question: "Who won the 2019 World Series title?",
         answer: [{
                 text: "Washington Nationals",
                 correct: true
             },
             {
                 text: "New York Yankees",
                 correct: false
             },
             {
                 text: "Houston Astros",
                 correct: false
             },
             {
                 text: "LA Dodgers",
                 correct: false
             },
         ]
     },
     {
         question: "How many titles did Michael Jordan win in the NBA?",
         answer: [{
                 text: "7",
                 correct: false
             },
             {
                 text: "4",
                 correct: false
             },
             {
                 text: "6",
                 correct: true
             },
             {
                 text: "5",
                 correct: false
             },
         ]
     },
     {
         question: "Who has won the most men French Open titles?",
         answer: [{
                 text: "Roger Federer",
                 correct: false
             },
             {
                 text: "Rafael Nadal",
                 correct: true
             },
             {
                 text: "Novak Djokovic",
                 correct: false
             },
             {
                 text: "Andy Murray",
                 correct: false
             },
         ]
     },
 ]