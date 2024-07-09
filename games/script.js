let username = ''
let times = 0
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
    botThought.src = "../images/" + decide + ".jpg"
    times = times + 1
    if (times == 1) {
        alert(username + " LOST TRY AGAIN NEXT TIME")
    }
    if (times == 2) {
        alert(username + " HAS FAILED AGAIN")
    }
    if (times == 3) {
        alert("HAAHAHAHAHA " + username + " DIDN'T SEE THAT COMING")
    }
    if (times == 4) {
        alert("FACE IT " + username + " YOU ARE INFERIOR")
    }
    if (times >= 5) {
        alert("COME BACK WHEN YOUR'RE BETTER " + username)
    }
}
document.addEventListener('DOMContentLoaded', () => {
    console.log("Hello")
    username = prompt("What is your name")
    console.log(username)
    const intro = document.querySelector('#intro');
    intro.textContent = "Hello " + username
})