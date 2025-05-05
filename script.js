const myCanvas = document.getElementById("myCanvas");
const ctx = myCanvas.getContext("2d");

ctx.fillRect(125, 10, 50, 50);

function playSound() {
    var audio = new Audio('AEE.mp3.wav');
    audio.play();
}
