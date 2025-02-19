var but = document.querySelectorAll(".drum");

function makeSound(key) {
    var audio;
    switch(key) {
        case 'w':
            audio = new Audio("./sounds/tom-1.mp3");
            break;
        
        case 'a':
            audio = new Audio("./sounds/tom-2.mp3");
            break;

        case 's':
            audio = new Audio("./sounds/tom-3.mp3");
            break;

        case 'd':
            audio = new Audio("./sounds/tom-4.mp3");
            break;
        
        case 'j':
            audio = new Audio("./sounds/snare.mp3");
            break;

        case 'k':
            audio = new Audio("./sounds/crash.mp3");
            break;

        case 'l':
            audio = new Audio("./sounds/kick-bass.mp3");
            break;

        default:
            console.log("Wrong Selection");
            break;
    }
    audio.play();
}

document.addEventListener("keypress", function (Event) {
    var keys = Event.key;
    makeSound(keys);
    eventAnimation(keys);
});

for (var j = 0; j < but.length; j++) {
    but[j].addEventListener("click", function () {
        var letter = this.classList[0]
        makeSound(letter);
        eventAnimation(letter);
    });
}

function eventAnimation(key) {
    var buttonPressed = document.querySelector("." + key);
    buttonPressed.classList.add("pressed");
    setTimeout(function () {
        buttonPressed.classList.remove("pressed");
    },100);
}


