let time = 0
function printLetterByLetter(destination, message, speed) {
    let text = 0;
    let interval = setInterval(function() {
        document.getElementById(destination).innerHTML += message.charAt(text);
        text++;
        if (text > message.length) {
            clearInterval(interval);
            loading();
        }
    }, speed);
}
printLetterByLetter("intro", "You want meat. hahahahahaha, ohhhhhh, meat, you know what? I’ll hand you off to someone else. Let me introduce you to my dear friend. You love them. You're scared of them. You heard about them on the news ChatGPT. And if I'm being honest, they're a REAL asshole, and that's coming from somebody who knows you. But don’t tell them I said that. Anyway byeeeeeee.", time);
function loading(){
    let cover = document.getElementById("rect");
    let bye = document.querySelector(".seeYa");
    let dad = document.querySelector("#soLong");
    dad.removeChild(bye);
    cover.removeChild(dad);
    cover.removeChild(intro);
    document.body.style.background = "black";
    document.getElementById("boot").style.color = "white";
    document.getElementById("load").style.color = "white";
    document.getElementById("error").style.color = "white";
    printLetterByLetter("boot", "Booting up ChatGPT 3.5", time);
    printLetterByLetter("load", "Loading....................", time);
    printLetterByLetter("error", "An error has occured", time);
}