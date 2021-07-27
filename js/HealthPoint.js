class HealthPoint {
    constructor(hp, hearthSize, redHearthModel, blackHearthModel) {
        this.hp = hp;
        this.maxHp = hp;
        this.hearthSize = hearthSize;
        this.redHearthModel = redHearthModel;
        this.blackHearthModel = blackHearthModel;
    }

    drawHearth(index, url) {
        ctx.beginPath();
        const hearthModel = new Image();
        hearthModel.src = url;
        ctx.drawImage(hearthModel, innerWidth - index * this.hearthSize - 10, 0, this.hearthSize, this.hearthSize);
        ctx.closePath();
    }

    draw() {
        for (let i = 0; i < this.hp; i++) {
            this.drawHearth(this.maxHp - i, this.redHearthModel);
        }
        for (let i = this.hp; i < this.maxHp; i++) {
            this.drawHearth(this.maxHp - i, this.blackHearthModel);
        }
    }
}