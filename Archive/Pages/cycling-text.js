const phrases = [
    "Video Game Developer",
    "Software Enthusiast",
    "Computer Science Student",
    "Tech Explorer"
];

let index = 0;

function updateText() {
    const textElement = document.getElementById("cycling-text");
    textElement.style.opacity = 0; 
    setTimeout(() => {
        textElement.textContent = phrases[index];
        textElement.style.opacity = 1;
        index = (index + 1) % phrases.length;
    }, 500);
}

setInterval(updateText, 2000);
updateText();