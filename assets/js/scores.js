// Variables for scores 
var correctAnswerScore = 0;
var incorrectAnswerScore = 0;
var timeLeft = 0;
var highScores = []; // This array stores high score data

// This is the function to update scores for correct answers
function updateCorrectAnswerScore() {
    correctAnswerScore += 100; // Adjust this number to increase score value. The inverse of this is -=
}
// This is the function to allow recognition of inccorect answers
function updateIncorrectAnswerScore() {
    incorrectAnswerScore -= 0; 
}

// This is the functionality needed to deduct time from the clock when incorrect answers are selected
function deductTime() {
    if (timeLeft > 10) {
        timeLeft -= 10;
    } else {
        timeLeft = 0;
        endQuiz();
    }
    timerEl.textContent = timeLeft;
    //incorrectAnswerScore -= 5; can be added if I deciding that wrong answers should also deduct points from score 
}


// This is the function needed to make the clear high score function work, if user does not want score recorded
function clearHighScores() {
    highScores = []; 
}