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

console.log(startScreenEl);
console.log(btnSubmitEl);


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
        button.addEventListener('click', () => checkAnswer(i)); // i + 1 because choices are 1-indexed
        choicesContainer.appendChild(button);
    });
}

function checkAnswer(userChoice) {
    console.log('User Choice:', userChoice);
    console.log('Correct Answer:', questions[currentQuestionIndex].correctAnswer);
    if (userChoice === questions[currentQuestionIndex].correctAnswer) {
        // Correct answer
        updateCorrectAnswerScore(); // Update the correct answer score
        feedbackEl.textContent =  'Correct!'; // Show feedback for correct answer
    } else {
        updateIncorrectAnswerScore(); // Update the incorrect answer count
        deductTime(); // Deduct time for incorrect answer
        feedbackEl.textContent = 'Incorrect!'; // Show feedback for incorrect answer
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
    document.getElementById('final-score').textContent = correctAnswerScore;/* calculate and set the final score */
}
// A screen appears for the user to input their initials and score, which they then submit by clicking the submit button
    btnSubmitEl.addEventListener('click', submitScore);

    function submitScore() {
        const initials = document.getElementById('initials').value;
        // code above needs more work to include localStorage
}