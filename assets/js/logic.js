let startGameButton = document.querySelector("#start");
let homeScreen = document.querySelector("#start-screen");
let timerDiv = document.querySelector("#time");
let questionDiv = document.querySelector("#questions")
let choices = document.querySelector("#choices");
let answerButtons = document.getElementsByClassName('answerButtons')
let endScreen = document.querySelector("#end-screen");
let submitButton = document.querySelector("#submit");
let questionTitle = document.querySelector('#question-title');
let initials = document.querySelector('input[type="text"]');
let finalScore = document.querySelector('#final-score');
let startTime = 75;
let questionPosition = -1;

// Creates a loop that counts down from startTime
function gameLoop() {
    gameScreen();
    let timer = setInterval(() => {
        //displays time/score
        timerDiv.innerHTML = startTime;
        startTime--;
        if(startTime <= 0 || questionPosition === questions.length) {
        //stops timer showing -numbers on game over
            timerDiv.innerHTML = 0;
            
            clearInterval(timer);
            gameOver();
            
        }
    }, 1000);
    addQuestion(); 
}

// sets hides homescreen and reveals question divs
function gameScreen(){
    questionDiv.classList.remove('hide');
    homeScreen.classList.add('hide');
}

// adds a question
function addQuestion() {
    questionPosition++
    questionTitle.textContent = questions[questionPosition].question;
    addAnswers();
}

// creates buttons for all answers creating a class that is targeted later
function addAnswers() {
    let answers = questions[questionPosition].answers;
    shuffleArr(answers);
        for(i = 0; i < answers.length; i++) {
            let button = document.createElement('button')
            button.setAttribute('class', 'answerButtons')
            button.textContent = answers[i].text;
            choices.appendChild(button)
        }  
        console.log(answers);
    checkLogic();
}

// shuffles the answers
function shuffleArr(arr) {
    for(let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function checkLogic() {
    // loops through all answer buttons having an event listener for each
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].addEventListener('click', function() {
            // once clicked, assign the correct answer to a variable by using find
            let correctAnswer = questions[questionPosition].answers.find(answer => answer.correct);
            // if the user selects a correct answer they gain 5 seconds/score
            if(this.textContent === correctAnswer.text) {
                startTime += 5;
                // resets the screen ready for next question;
                choices.innerHTML = ''
                questionTitle.textContent = '';
                addQuestion();
            // if the user select an incorrect answer they lose 10 seconds
            } else {
                startTime -= 10;
            }
        });
    }
}

// displays the game over screen;
function gameOver() {
    endScreen.classList.remove('hide');
    questionDiv.classList.add('hide');
    finalScore.textContent = startTime;
    // When button is clicked it sends the userID and startime(which is score) to storage function
    submitButton.addEventListener('click', function() {
        let userId = initials.value;
        let score = startTime;
        // assigns user score and id to an object that is then stored locally
        let userData = {
            userId: userId,
            score: score
        };
        // Check if scores exist in local storage
        if (localStorage.getItem("scores")) {
            // Retrieve scores from local storage, modify it and re - store
            let scores = JSON.parse(localStorage.getItem("scores"));
            scores.push(userData);
            localStorage.setItem('scores', JSON.stringify(scores));
        } else {
            // If no scores exist in local storage, create an array and add the userData to it
            let scores = [userData];
            localStorage.setItem('scores', JSON.stringify(scores));
        }
        
    });
}

startGameButton.addEventListener('click', gameLoop);