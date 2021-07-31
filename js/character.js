class Character {
    link = "png/character_maleAdventurer_sheet.png";
    name = "Player"
    bot = false;
    alt = "";
    hp = 10;
    atk = 5;
    def = 0;
    weapon = false;
    tool = false
    shild = false
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
    endMove(){
        return this.moves == 0 ? true : false;
    }

    atack(x, y) {
        let damag = this.atk;
        if (this.weapon) {
            damag += this.weapon[2];
            this.weapon[1]--;
            if (this.weapon[1] == 0) {
                this.weapon = false;
            }
        }
        board[x][y][5].changeHp(board[x][y][5].getHp() - damag)
    }

    mine(x, y) {
        if (this.tool) {
            this.moves--;
            this.tool[1]--;
            if (this.tool[1] == 0) {
                this.tool = false;
            }
        }
        else {
            this.moves -= 3;
        }
        board[x][y][6]--;

    }
    action(way) {
        let x = this.coordsX;
        let y = this.coordsY;
        let newX = x;
        let newY = y;
        if (way == 'east') {
            newX++;
        }
        else if (way == 'west') {
            newX--;
        }
        else if (x % 2 == 0) {
            if (way == 'north-east') {
                newY--;
            }
            else if (way == 'north-west') {
                newX--;
                newY--;
            }
            else if (way == 'south-east') {
                newY++;
            }
            else if (way == 'south-west') {
                newX--;
                newY++;
            }
        }
        else {
            if (way == 'north-east') {
                newX++;
                newY--;
            }
            else if (way == 'north-west') {
                newY--;
            }
            else if (way == 'south-east') {
                newX++;
                newY++;
            }
            else if (way == 'south-west') {
                newY++;
            }
        }
        if(newX<0 | newY<0 | newX>29 | newY>21){
            return 0;
        }
        if (board[newX][newY][0] == "mountine") {
            mine(newX, newY);
        }
        else if (board[newX][newY][4]) {
            if (board[newX][newY][5]) {
                atack(newX, newY);
            }
            else if (board[newX][newY][0] == 'loot') {
                pickUp(newX, newY);
            }
            else {
                this.coordsX = newX;
                this.coordsY = newY;
            }
            this.moves--;
        }
        if(this.endMove()){
            summaryTurn++;
        }
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
        if (x % 2 == 0 & y % 2 != 0) {
            marginX += 100
        }
        if (y % 2 == 0 & x % 2 != 0) {
            marginX -= 100
        }
        let character = new Image();
        character.src = this.link;
        character.onload = function () {
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
let summaryTurn = 0

function preAction(way) {
    heroes[summaryTurn % 4].action(way);
}
setInterval(drawHeroes(), 100);
