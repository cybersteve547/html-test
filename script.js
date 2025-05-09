const myCanvas = document.getElementById("myCanvas");
const ctx = myCanvas.getContext("2d");
const audio = new Audio('AEE.mp3.wav');
let y = 0;
let vel = 0;
const g = -1;
function animate(timestamp) {
    vel += g;
    y += vel;
    if (y <= 0) {
        vel = 0;
        y = 0;
    }
    ctx.clearRect(0, 0, 300, 150);
    ctx.fillRect(125, 100 - y, 50, 50);
    requestAnimationFrame(animate);
}

function playSound() {
    audio.play();
    vel = 10;
}

requestAnimationFrame(animate);
