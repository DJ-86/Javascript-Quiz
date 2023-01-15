/* ## Acceptance Criteria

Create a code quiz that contains the following requirements:

* A start button that when clicked a timer starts and the first question appears.
 
  * Questions contain buttons for each answer.
  * 
  * When answer is clicked, the next question appears
  * 
  * If the answer clicked was incorrect then subtract time from the clock

* The quiz should end when all questions are answered or the timer reaches 0.

  * When the game ends, it should display their score and give the user the ability to save their initials and their score

-------------------------------------------------
*/
// Create start button
const body = document.querySelector('body');
let startButton = document.querySelector('#startButton');

window.addEventListener('load', function() {
    generateNameInput();
    startBtn();
})

function generateNameInput() {
    let input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('id', 'name');
    input.setAttribute('placeholder', 'Please enter your initials');
    body.appendChild(input)
}


function startBtn() {
    let button = document.createElement('button');
    button.setAttribute('class', 'buttons');
    button.setAttribute('id', 'startButton');
    button.textContent = 'Start'
    body.appendChild(button)    
}
console.log(startButton);



// Create Timer
// Create Score
// Create questions and answers arrays/objects
// Create questions and answers
// Check user input if correct Score++ else timer--
// Logic for looping through Q&A
// Game Over/ restart 




