let username = ''
function botMove (move) {
    if (move == "rock") {
        return "paper"
    }
    if (move == "paper") {
        return "scissors"
    }
    if (move == "scissors") {
        return "rock"
    }
}
function playerMove (move) {
    const botText = document.querySelector('#botText');
    let decide = botMove(move)
    botText.textContent = decide
    console.log(decide)
    const botThought = document.querySelector('#botThought');
    botThought.src = "images/" + decide + ".jpg"
    alert( username + " LOST")
}
document.addEventListener('DOMContentLoaded', () => {
    console.log("Hello")
    username = prompt("What is your name")
    console.log(username)
    const intro = document.querySelector('#intro');
    intro.textContent = "Hello " + username
})