class Compass {
    constructor(image, size) {
        this.image = image
        this.size = size
        this.x = 20
        this.y = innerHeight - this.size - 20
    }



    draw() {
        ctx.beginPath()
        const compassModel = new Image();
        compassModel.src = this.image;
        ctx.drawImage(compassModel, this.x, this.y, this.size, this.size)
        ctx.closePath()
    }
}