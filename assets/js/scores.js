// Variables for scores 
var correctAnswerScore = 0;
var incorrectAnswerScore = 0;
var highScores = []; // This array stores high score data

// This is the function to update scroes for correct answers
function updateCorrectAnswerScore() {
    correctAnswerScore += 100; // Adjust this number to increase score value. The inverse of this is -=
}

// This is the functionality needed to deduct time from the clock when incoorect answers are selected
function updateIncorrectAnswerScore() {
    if (timeLeft > 10) {
        timeLeft -= 10;
    } else {
        timeLeft = 0;
    }
    //incorrectAnswerScore -= 5; can be added if I deciding that wrong answers should also deduct points from score 
}

// This is the function needed to make the clear high score function work, if user does not want score recorded
function clearHighScores() {
    highScores = []; 
}