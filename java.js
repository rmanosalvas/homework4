 // Starts with a home screen, centered with a button to start quiz,
 // this activates a timer and changes the screen to questions. timer runs.
 // multiple choice quiz that changes screen  to another question after you answer
 // after final question, goes to a form to input initials to store the score
 // clicking submit takes to a new page with list of High Scores with a choice to go
 // back to game beginning or clear high scores

 // add event listener to start quiz button, then empty dive with the content
 // questions are an object 




 // Grabbing my variables
 var score = 0;
 var startButton = document.getElementById("start-btn");
 var questionContainerDiv = document.getElementById("question-container");
 var questionDiv = document.getElementById("question");
 var answerButtonEl = document.getElementById("answer-buttons");
 var currentQuestions = "";


 startButton.addEventListener("click", startGame)

 function startGame() {
     startButton.classList.add("hide");
     currentQuestions = questions[0];
     questionContainerDiv.classList.remove("hide");
     nextQuestion();
 };


 // Function that is invoked by starGame function to prompt question  
 function nextQuestion() {
     showQuestions(currentQuestions);
 };


 function showQuestions(questions) {
     questionDiv.innerText = questions.question;
     questions.answer.forEach(answer => {
         var button = document.createElement("button");
         button.innerText = answer.text;
         button.classList.add("btn");
         if (answer.correct) {
             button.dataset.correct = answer.correct;
         };
         button.addEventListener("click", selectAnswer);
         answerButtonEl.appendChild(button);

     });
 };



 function selectAnswer(event) {
     var userChoice = event.target;
     console.log(userChoice);
     nextQuestion()
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