//create variable and function for get and set for start button
//create variable called questions 
//within question object create an array to list all all questions and answers 
//then create an if statement that defines the right answer and the wrong answers, and for each the response that appears at the bottom of all the answers as "Right" or "Wrong" 
//

//Certainly! Here are the revised questions with varied answer positions:

var questions = [{
    question: "1. What is the purpose of the `addEventListener` method in JavaScript?",
    choices: ["To create a new HTML element", "To change the styling of an HTML     element", "To remove an HTML element from the DOM", "To attach an event handler function to an HTML element"],
    correctAnswer: 4
}, {
    question: "2. How do you access the first element of an array in JavaScript?",
    choices: ["array.first", "array.getElement(0)", "array[0]", "array.firstElement"],
    correctAnswer: 3
}, {
    question: "3. What is the correct way to declare a variable in JavaScript?",
    choices: [ "const myVar;", "let myVar;", "All of the above", "var myVar;"],
    correctAnswer: 2
}, {
    question: "4. What does the `typeof` operator return for an array?",
    choices: ["number", "string", "object", "array"],
    correctAnswer: 3
}, {
    question: "5. What is the purpose of the `setTimeout` function in JavaScript?",
    choices: ["To set the value of a variable", "To create a timer for counting the number of function calls", "To add a delay to CSS transitions", "To pause the execution of a function for a specified time"],
    correctAnswer: 4
}, {
    question: "6. What does the `NaN` value represent in JavaScript?",
    choices: ["Null and None", "Not a Number", "Numbered Array", "Negative Number"],
    correctAnswer: 2
}


// Answers:
//     1. d. To attach an event handler function to an HTML element
//     2. c. array[0]
//     3. b. let myVar;
//     4. c. "object"
//     5. d. To pause the execution of a function for a specified time
//     6. b. Not a Number