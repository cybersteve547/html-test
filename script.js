const myCanvas = document.getElementById("myCanvas");
const ctx = myCanvas.getContext("2d");
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

function jump() {
    vel = 10;
}

requestAnimationFrame(animate);
