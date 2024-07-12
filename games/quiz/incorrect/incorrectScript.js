way = 'Two'
let currentUrl = window.location.href;
let pass = 0
document.addEventListener('DOMContentLoaded', () => {
    if(currentUrl == "file:///C:/Users/kelde/Documents/meklez/Rocky/games/quiz/incorrect/wrongTwo.html"){
        way = 'Three'
    }
    if(currentUrl == "file:///C:/Users/kelde/Documents/meklez/Rocky/games/quiz/incorrect/wrongThree.html"){
        way = 'Four'
        alert("Now can you answer this?")
        let container = document.getElementById('cover');
        const theButton = document.createElement('button');
        theButton.textContent = `YOU`;
        document.body.appendChild(theButton);
        container.appendChild(theButton);
        theButton.addEventListener('click', generateMoreButtons);
    }
    if(currentUrl == "file:///C:/Users/kelde/Documents/meklez/Rocky/games/quiz/incorrect/wrongFour.html"){
        way = 'End'
        window.setTimeout(bye, 3000)
    }
})
function question(answer) {
    if (answer == "right") {
        window.open ("wrong" + way + ".html")
        window.close("wrong")
    }
}
function generateMoreButtons() {
    let numButtons = 20;
    for (let i = 1; i <= numButtons; i++) {
        const newButton = document.createElement('button');
        newButton.className = 'you';
        newButton.textContent = `YOU`;
        newButton.style.position = 'absolute';
        newButton.style.left = `${Math.random() * 100}%`;
        newButton.style.top = `${Math.random() * 100}%`;
        document.body.appendChild(newButton);
        newButton.addEventListener('click', generateMoreButtons);
    }
    pass = pass + 1
    if (pass == 10) {
        window.open ("wrong" + way + ".html")
        window.close("wrong")
    }
}
function bye() {
    window.close("wrong")
}