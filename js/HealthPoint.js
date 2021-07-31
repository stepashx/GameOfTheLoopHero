class HealthPoint {
    constructor(hearthSize, redHearthModel, blackHearthModel) {
        this.hp = new Array(4);
        this.maxHp = 10;
        this.hearthSize = hearthSize;
        this.redHearthModel = redHearthModel;
        this.blackHearthModel = blackHearthModel;
    }

    drawHearth(index, url, i) {
        ctx.beginPath();
        const hearthModel = new Image();
        hearthModel.src = url;
        ctx.drawImage(hearthModel, innerWidth - index * this.hearthSize - 50, 0, this.hearthSize, this.hearthSize);
        ctx.closePath();
    }

    draw() {
        for (let j = 0; j < 4; j++) {
            for (let i = 0; i < this.hp; i++) {
                this.drawHearth(this.maxHp - i, this.redHearthModel, j);
            }
            for (let i = this.hp; i < this.maxHp; i++) {
                this.drawHearth(this.maxHp - i, this.blackHearthModel, j);
            }
        }
    }
}