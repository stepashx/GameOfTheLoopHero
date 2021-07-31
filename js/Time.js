class Time {
    constructor(x, y, url) {
        this.x = x;
        this.y = y;
        this.url = url;
        this.clockSize = 32;
        this.turn = 0;
    }

    increase(hp) {
        this.turn -= hp;
    }

    draw() {
        ctx.beginPath()
        const clockModel = new Image();
        clockModel.src = this.url;
        ctx.drawImage(clockModel, this.x, this.y, this.clockSize, this.clockSize)
        ctx.fillStyle = "black";
        ctx.font = "32px 'Montserrat'";
        ctx.fillText("Номер хода: " + this.turn.toString(), 32, 28)
        let imga = new Image();
        imga.src = "./image/clock.png"
        imga.alt = "tfjhtg"
        ctx.drawImage(imga, 10, 10, 100, 100);

        ctx.closePath()
    }
}

