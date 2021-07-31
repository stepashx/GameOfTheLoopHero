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
        ctx.fillText("Ход №" + (Math.floor((summaryTurn)/4)+1) +' \n игрока: ' + heroes[summaryTurn % 4].name, 32, 28)
        ctx.closePath()
    }
}

