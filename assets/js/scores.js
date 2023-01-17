let highscoresList = document.querySelector("#highscores");
let clear = document.querySelector("#clear");

window.onload = function displayScores() {   
    // Check if scores exist in local storage
    if (localStorage.getItem("scores")) {
        let scores = JSON.parse(localStorage.getItem("scores"));
        // Sort scores by best score
        scores.sort((a, b) => (a.score < b.score) ? 1 : -1);
        // Loop through scores arr and create an li element 
        for (let i = 0; i < scores.length; i++) {
            let score = scores[i];
            let li = document.createElement("li");
            li.innerHTML = score.userId + " - " + score.score;
            highscoresList.appendChild(li);
        }
    } else {
        highscoresList.innerHTML = "No scores to display.";
    }
}

// clears local storage and the page of scores
clear.addEventListener('click', function() {
    localStorage.removeItem('scores');
    highscoresList.innerHTML = "No scores to display.";
})