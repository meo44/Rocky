let way = 'Two'
let currentUrl = window.location.href;
anger = 0
document.addEventListener('DOMContentLoaded', () => {
    if(currentUrl == "file:///C:/Users/kelde/Documents/meklez/Rocky/games/quiz/rightWay/quizTwo.html"){
        way = 'Three'
    }
    if(currentUrl == "file:///C:/Users/kelde/Documents/meklez/Rocky/games/quiz/rightWay/quizThree.html"){
        way = 'Four'
    }
    if(currentUrl == "file:///C:/Users/kelde/Documents/meklez/Rocky/games/quiz/rightWay/quizFour.html"){
        way = 'Five'
    }
    if(currentUrl == "file:///C:/Users/kelde/Documents/meklez/Rocky/games/quiz/rightWay/quizFive.html"){
        way = 'End'
    }
})
function question (answers) {
    if (answers == "wrong") {
        alert("Try Again")
        anger = anger + 1
        if(anger > 3) {
            window.open("file:///C:/Users/kelde/Documents/meklez/Rocky/games/quiz/incorrect/wrong.html")
            window.close("quiz")
        }
    }
    if (answers == "right") {
        alert("Good Job")
        window.open("quiz" + way + ".html")
        window.close("quiz")
    }    
    currentUrl = window.location.href;
}