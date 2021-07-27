const itemURL = undefined;

const attackItemX = undefined;
const attackItemY = undefined;

const defenseItemX = undefined;
const defenseItemY = undefined;

const instrumentX = undefined;
const instrumentY = undefined;

class Slot {
    constructor(x, y) {
        this.url = itemURL;
        this.x = x;
        this.y = y;
        this.item = undefined;
    }
}

class Slots {
    constructor(slotFrame, slotSize) {
        this.slotFrame = slotFrame;
        this.slotSize = slotSize;
        this.attackItem = new Slot(attackItemX, attackItemY);
        this.defenseItem = new Slot(defenseItemX, defenseItemY);
        this.instrument = new Slot(instrumentX, instrumentY);
    }

    swap(array, index) {

    }

    draw() {
        console.log("Konch")
        ctx.beginPath();
        const slotModel = new Image();
        slotModel.src = this.slotFrame;
        for (let i = 0; i < 3; i++) {
            ctx.drawImage(slotModel, innerWidth - this.slotSize - 10, innerHeight / 3.5 + i * (this.slotSize + 16) + 10, this.slotSize, this.slotSize);
        }
        ctx.closePath();
    }
}
