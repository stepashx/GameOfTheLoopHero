class character {
    link = "url(png/Person/Male_adventurer/character1.png)";
    alt = "";
    hp = 10;
    atk = 5;
    def = 0;
    weapon = "";
    tool = "";
    shild = "";
    coordsX = 0;
    coordsY = 0;
    getLink() {
        return this.link;
    }
    getAlt() {
        return this.alt;
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
    getCoords(){
        return [this.coordsX, this.coordsY];
    }

    changeHp(x) {
        this.hp = x;
    }
    changeAtk(x) {
        this.atk = x;
    }
    changeDef(x) {
        this.def = x;
    }

    isDead(){
        if(hp==0){return true}
        else {return false}
    }

    move(x,y){
        this.coordsX=x;
        this.coordsY=y;
    }

    
}