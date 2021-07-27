time = new Time(0, 0, "https://image.flaticon.com/icons/png/512/2972/2972528.png");
healthPoint = new HealthPoint(10, 32,
    "https://image.flaticon.com/icons/png/512/929/929417.png",
    "https://image.flaticon.com/icons/png/512/535/535285.png");
stock = new Slots("https://image.flaticon.com/icons/png/512/38/38820.png", 80);

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    time.draw();
    healthPoint.draw();
    stock.draw();
}

draw();