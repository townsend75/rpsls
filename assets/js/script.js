 let questions = {
    "What is the capital city of Ecuador?" : [ "Bogota", "Qutio", "Lima", "Caracas", 1],
    "In which US city would you find the Empire State Building?" : [ "New Orleans", "New York", "Chicago", "Los Angeles", 1],
    "On which continent would you find the Victoria Falls?" : ["Europe", "South America", "Asia","Africa", 3],
    "Tahiti lies in which ocean?" : ["Atlantic", "Indian", "Pacific", "Antarctic", 2 ]
}

function getRandomQuestion() {
    var randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
  }
  
  // Function to display the quiz
  function displayQuiz(maxQuestions) {
    var quiz = document.getElementById("quiz");
    var numQuestionsDisplayed = 0;
  
    // Loop until max number of questions are displayed
    while (numQuestionsDisplayed < maxQuestions) {
      var question = getRandomQuestion();
  
      // Add the question to the quiz
      var questionDiv = document.createElement("div");
      questionDiv.innerHTML = question;
      quiz.appendChild(questionDiv);
  
      // Increment the number of questions displayed
      numQuestionsDisplayed++;
    }
  }
  
  // Call the function to display the quiz (10 questions in this example)
  displayQuiz(10);