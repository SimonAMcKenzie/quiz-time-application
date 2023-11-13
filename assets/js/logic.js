//define variables for all required DOM nodes
var startScreenEl = document.getElementById('start-screen');
console.log('Script loaded')
var btnStartEl = document.getElementById('start');
var timerEl = document.getElementById('timer') 
var questionsEl = document.getElementById('questions');
var choicesEl = document.getElementById('choices');
var endScreenEl = document.getElementById('end-screen');
var btnSubmitEl = document.getElementById ('submit');
var feedbackEl = document.getElementById('feedback');

console.table(startScreenEl);


//Instructions
// On the home screen there is a Start Quiz button
// On the top left there is a view high scores button which takes the user to a high scores section, which keeps a record of users and their scores
// On the top right there is a Time counter showing 0
// User must click Start Quiz button to begin quiz
    // an event listener for the Start Quiz button with click functionality must be added 
    // on click the user should then be taken to the quiz


var currentQuestionIndex = 0;
var timeLeft = 90; // Initial timer value in seconds

btnStartEl.addEventListener('click', startQuiz);

function startQuiz() {
    startScreenEl.classList.add('hide');
    questionsEl.classList.remove('hide');
    startTimer();
    showQuestion(currentQuestionIndex);
}
// Timer starts when quiz begins
let timerInterval;
// let timeLeft = 90; // set your desired time limit

function startTimer() {
    timerInterval = setInterval(function () {
        timeLeft--;
        document.getElementById('time').textContent = timeLeft;

        if (timeLeft <= 0) {
            endQuiz();
        }
    }, 1000);
}
// When user selects an answer 
    // if correct, points are added to the score which displays on the left, and the text "Correct" appears below the quiz questions
    // else if incorrect, time is deducted from timer on the top right, and the text "Incorrect" appears below the quiz questions
    // user is then shown the next question
        // an event listener for the click function must be added (linked to HTML)
function showQuestion(index) {
    const currentQuestion = questions[index];
    document.getElementById('question-title').textContent = currentQuestion.question;

    // Display choices
    const choicesContainer = document.getElementById('choices');
    choicesContainer.innerHTML = '';

    currentQuestion.choices.forEach((choice, i) => {
        const button = document.createElement('button');
        button.textContent = choice;
        button.addEventListener('click', () => checkAnswer(i + 1)); // i + 1 because choices are 1-indexed
        choicesContainer.appendChild(button);
    });
}

function checkAnswer(userChoice) {
    if (userChoice === questions[currentQuestionIndex].correctAnswer) {
        // Correct answer
        updateCorrectAnswerScore(); // Update the correct answer score
        showFeedback('Correct!'); // Show feedback for correct answer
    } else {
        updateIncorrectAnswerCount(); // Update the incorrect answer count
        deductTime(); // Deduct time for incorrect answer
        showFeedback('Incorrect!'); // Show feedback for incorrect answer
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        // More questions available
        showQuestion(currentQuestionIndex);
    } else {
        // No more questions, end the quiz
        endQuiz();
    }
}
// Once all the questions are answered or the timer reaches zero the game is finished
function endQuiz() {
    clearInterval(timerInterval);
    endScreenEl.classList.remove('hide');
    document.getElementById('final-score').textContent = finalScore;/* calculate and set the final score */
}
// A screen appears for the user to input their initials and score, which they then submit
    // an input form must be created to allow users to input details
    // an event listener for the Submit button with click functionality must be added to the bottom of the form (linked to HTML)
    btnSubmitEl.addEventListener('click', submitScore);

    function submitScore() {
        const initials = document.getElementById('initials').value;
        // Handle the submission, store the score and initials, etc.
        // Redirect to the start screen or high scores page.
    }
// when the user clicks the submit button the game goes back to the start screen
// the user can then see where there score ranks by going clicking the view scores text on the top left

// Tools Needed:
// Functions for handling user input
// Functions for checking answers
// Functions for updating the UI based on user responses
//Functions for advancing to the next question.



