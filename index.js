let drums = document.querySelectorAll(".drum");

function handleEvent(event) {
    let key = this.innerHTML || event.key;
    makesound(key);
    btnAnimation(key);
}

drums.forEach(drum => {
    drum.addEventListener('click', handleEvent);
    drum.addEventListener('touchstart', handleEvent);
});

document.addEventListener("keypress", function(event) {
    makesound(event.key);
    btnAnimation(event.key);
});

function makesound(key) {
    const soundMap = {
        "w": "sounds/tom-1.mp3",
        "a": "sounds/tom-2.mp3",
        "s": "sounds/tom-3.mp3",
        "d": "sounds/tom-4.mp3",
        "j": "sounds/snare.mp3",
        "k": "sounds/crash.mp3",
        "l": "sounds/kick-bass.mp3"
    };

    if (soundMap[key]) {
        const audio = new Audio(soundMap[key]);
        audio.play();
    }
}

function btnAnimation(currentKey) {
    let activeBtn = document.querySelector("." + currentKey);
    if (activeBtn) {
        activeBtn.classList.add("pressed");
        setTimeout(() => activeBtn.classList.remove("pressed"), 50);
    }
}
