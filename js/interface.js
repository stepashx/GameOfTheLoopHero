let time = new Time(0, 0, "./image/clock.png");
let healthPoint = new HealthPoint(10, 32,
    "image/redHeart.png",
    "./image/blackHeart.png");
let stock = new Slots("./image/frame.png", 80);
// let compass = new Compass("./image/compass.png", 200);


function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    time.draw();
    healthPoint.draw();
    stock.draw();
    // compass.draw();
}
setInterval(draw,100);