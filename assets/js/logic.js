//define variables for all required DOM nodes
var startScreenEl = document.getElementById ('#start-screen')
var btnStartEl = document.getElementId('#start')
var questionsEl = document.getElementById('#questions')
var endScreenEl = document.getElementById('end-screen')
var feedbackEl = document.getElementById('feedback')



// On the home screen there is a Start Quiz button
// On the top left there is a view high scores button which takes the user to a high scores section, which keeps a record of users and their scores
// On the top right there is a Time counter showing 0
// User must click Start Quiz button to begin quiz
    // an event listener for the Start Quiz button with click functionality must be added 
    // on click the user should then be taken to the quiz
// Timer starts when quiz begins
// When user selects an answer 
    // if correct, points are added to the score which displays on the left, and the text "Correct" appears below the quiz questions
    // else if incorrect, time is deducted from timer on the top right, and the text "Incorrect" appears below the quiz questions
    // user is then shown the next question
        // an event listener for the click function must be added (linked to HTML)
// Once all the questions are answered or the timer reaches zero the game is finished
// A screen appears for the user to input their initials and score, which they then submit
    // an input form must be created to allow users to input details
    // an event listener for the Submit button with click functionality must be added to the bottom of the form (linked to HTML)
// when the user clicks the submit button the game goes back to the start screen
// the user can then see where there score ranks by going clicking the view scores text on the top left


WHEN I click the start button a timer starts and I am presented with a question

WHEN I answer a question I am presented with another question

WHEN I answer a question incorrectly time is subtracted from the clock

WHEN all questions are answered or the timer reaches 0 the game is over

WHEN the game is over I can save my initials and score
