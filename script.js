const myCanvas = document.getElementById("myCanvas");
const ctx = myCanvas.getContext("2d");
const audio = new Audio('AEE.mp3.wav');

function animate(timestamp) {
    ctx.clearRect(0, 0, 300, 150);
    ctx.fillRect(125, 100, 50, 50);
    requestAnimationFrame(animate);
}

function playSound() {
    audio.play();
}

requestAnimationFrame(animate);
