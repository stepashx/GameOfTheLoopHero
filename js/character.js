class Character {
    link = "png/character_maleAdventurer_sheet.png";
    name = "Player"
    bot = false;
    alt = "";
    hp = 10;
    atk = 5;
    def = 0;
    weapon = "";
    tool = "";
    shild = "";
    coordsX = 0;
    coordsY = 0;
    moves = 6;
    constructor(x = 1, y = 1, pic = "png/character_maleAdventurer_sheet.png", name = "Player") {
        this.name = name;
        this.coordsY = y;
        this.coordsX = x;
        this.link = pic;
        this.name = name;
    }
    getLink() {
        return this.link;
    }
    getAlt() {
        return this.alt;
    }
    getName() {
        return this.name;
    }
    getHp() {
        return this.hp;
    }
    getAtk() {
        return this.atk;
    }
    getDef() {
        return this.def;
    }
    getCoords() {
        return [this.coordsX, this.coordsY];
    }

    changeHp(x) {
        this.hp = x;
    }
    changeName(x) {
        this.name = x;
    }
    changeAtk(x) {
        this.atk = x;
    }
    changeDef(x) {
        this.def = x;
    }

    isDead() {
        return this.hp == 0 ? true : false;
    }
    isBot() {
        return this.bot;
    }
    //block(x, y, 0) - объект на нижнем слое,  block(x,y,1) - объект на верхнем слое
    action(x, y) {
        if (board[x][y][0] == "mountine") {
            mine(x, y);
            return true;
        }
        else if (board[x][y][4]) {
            if (block(x, y, 1) == 'character') {
                atack(x, y);
            }
            else if (board[x][y][0] == 'loot') {
                pickUp(x, y);
            }
            else {
                this.coordsX = x;
                this.coordsY = y;
            }
            this.move--;
            return true;
        }
        else {
            return false;
        }
    }

    atack(x, y) {
        (board[x][y][5].changeHp(board[x][y][5].getHp() - this.getAtk()))
    }

    mine(x, y) {
        board[x][y][1].reduceLayer();
        this.move -= 3;
    }

    move(x, y) {
        let temp = this.link;
        this.coordsX = x;
        this.coordsY = y;
        this.draw();
    }
    draw() {
        let canvas = document.getElementById("canvas1");
        let context = canvas.getContext('2d');
        let coordX = 0;
        let coordY = 0;
        let innerX = 90;
        let innerY = 150;
        let marginX = 20 + this.coordsX * 184;
        let marginX1 = 20 + this.coordsX * 92;
        let marginY = 55 + this.coordsY * 79;
        let width = 130;
        let height = 150;
        let move = 0;
        let x = this.coordsX;
        let y = this.coordsY;
        if (x % 2 == 0 & y % 2 != 0){
            marginX+=100
        }
        if (y % 2 == 0 & x % 2 != 0){
            marginX-=100
        }
        let character = new Image();
        character.src = this.link;
        character.onload = function () {
            context.clearRect(0, 0,5000,5000);
            if (x % 2 == 0) {
                context.drawImage(character, coordX, coordY, innerX, innerY, marginX, marginY, width, height);
            }
            else {
                context.drawImage(character, coordX, coordY, innerX, innerY, marginX + 92, marginY, width, height);
            }
        }
    }
}
heroes = [];
heroes[0] = new Character(0, 1, "png/character_maleAdventurer_sheet.png", "Player" + 0);
heroes[1] = new Character(19, 1, "png/character_femaleAdventurer_sheet.png", "Player" + 1);
heroes[2] = new Character(0, 27, "png/character_femalePerson_sheet.png", "Player" + 2);
heroes[3] = new Character(19, 27, "png/character_malePerson_sheet.png", "Player" + 3);
function drawHeroes() {
    for (let i = 0; i < 4; i++) {
        heroes[i].draw();
    }
}

setInterval(drawHeroes(), 100);
