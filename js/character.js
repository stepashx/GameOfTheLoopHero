let canvas55 = document.getElementById("canvas1");
let context55 = canvas55.getContext('2d');
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
    endMove() {
        return this.moves <= 0
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
        board[y][x][5].changeHp(board[y][x][5].getHp() - damag)
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
        board[y][x][6]--;

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
        else if (y % 2 == 0) {
            if (way == 'north_east') {
                newY--;
            }
            else if (way == 'north_west') {
                newX--;
                newY--;
            }
            else if (way == 'south_east') {
                newY++;
            }
            else if (way == 'south_west') {
                newX--;
                newY++;
            }
        }
        else {
            if (way == 'north_east') {
                newX++;
                newY--;
            }
            else if (way == 'north_west') {
                newY--;
            }
            else if (way == 'south_east') {
                newX++;
                newY++;
            }
            else if (way == 'south_west') {
                newY++;
            }
        }
        if (newX < 0 | newY < 0 | newX > 20 | newY > 28) {
            return 0;
        }
        if (board[newY][newX][0] == "mountine") {
            mine(newX, newY);
        }
        else if (board[newY][newX][4]) {
            if (board[newY][newX][5]) {
                atack(newX, newY);
            }
            else if (board[newY][newX][0] == 'loot') {
                pickUp(newX, newY);
            }
            else {
                this.coordsX = newX;
                this.coordsY = newY;
            }
            this.moves--;
        }
        if (this.endMove()) {
            this.moves=7;
            summaryTurn++;
        }
        this.coordsX = newX;
        this.coordsY = newY;
        this.moves--;
    }
    move(x, y) {
        let temp = this.link;
        this.coordsX = x;
        this.coordsY = y;
        this.draw();
    }

}
heroes = [];
heroes[0] = new Character(0, 1, "png/character_maleAdventurer_sheet.png", "Player" + 0);
heroes[1] = new Character(19, 1, "png/character_femaleAdventurer_sheet.png", "Player" + 1);
heroes[2] = new Character(0, 27, "png/character_femalePerson_sheet.png", "Player" + 2);
heroes[3] = new Character(19, 27, "png/character_malePerson_sheet.png", "Player" + 3);
let summaryTurn = 0

function preAction(way) {
    heroes[summaryTurn % 4].action(way);
}

function draw() {
    context55.clearRect(0, 0, 5000, 5000);

    for (i = 0; i < 4; i++) {
        
        let coordX = 0;
        let coordY = 0;
        let innerX = 90;
        let innerY = 150;
        let marginX = 20 + heroes[i].coordsX * 184;
        let marginX1 = 20 + heroes[i].coordsX * 92;
        let marginY = 55 + heroes[i].coordsY * 79;
        let width = 130;
        let height = 150;
        let move = 0;
        let x = heroes[i].coordsX;
        let y = heroes[i].coordsY;
        if (x % 2 == 0 & y % 2 != 0) {
            marginX += 100
        }
        if (y % 2 == 0 & x % 2 != 0) {
            marginX -= 100
        }
        let character = new Image();
        character.src = heroes[i].link;
        if (x % 2 == 0) {
            context55.drawImage(character, coordX, coordY, innerX, innerY, marginX, marginY, width, height);
        }
        else {
            context55.drawImage(character, coordX, coordY, innerX, innerY, marginX + 92, marginY, width, height);
        }
    }
}
setInterval(draw, 100);
