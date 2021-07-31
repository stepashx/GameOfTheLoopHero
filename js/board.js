var board = []; // массив поля
var cB = [];
cB[0] = 184; // ширина иконки (разница по X)
cB[1] = 250; // высота иконки 
cB[2] = 79; // разница по Y
cB[3] = 92; //разница 2 по X
cB[4] = [0, 1, 2, 3]; //список секторов
cB[5] = [10, 15]; //координаты 1 сектора
cB[6] = [9, 15]; //координаты 2 сектора
cB[7] = [10, 14]; //координаты 3 сектора
cB[8] = [9, 14]; //координаты 4 сектора
cB[9] = [29, 21]; //размер поля (Y / X)
cB[10] = [1, 0]; //координаты поля для 1 башни (Y / X)
cB[11] = [1, cB[9][1] - 2]; //координаты поля для 2 башни (Y / X)
cB[12] = [cB[9][0] - 2, 0]; //координаты поля для 3 башни (Y / X)
cB[13] = [cB[9][0] - 2, cB[9][1] - 2]; //координаты поля для 4 башни (Y / X)
cB[14] = [Math.floor(cB[9][0]/2), Math.floor(cB[9][1] / 2)]; //координаты поля для Замка (Y / X)
cB[15] = [0, 0]; // срез 1
cB[16] = [0, (cB[9][1] - 1)]; // срез 2
cB[17] = [cB[9][0] - 1, 0]; // срез 3
cB[18] = [cB[9][0] - 1, cB[9][1] - 1]; // срез 4

function rand(a) { //рандом
    return Math.floor(Math.random() * a);
}

function randM(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
  }

function newB() { //новый массив
    for (let i = 0; i < cB[9][0]; i++) {
        board[i] = [];   
        for (let j = 0; j < cB[9][1]; j++) {
            board[i][j] = [];  
            board[i][j][0] = -1; // тип ячейки
            board[i][j][1] = 1; // уровень ячейки
            board[i][j][2] = ''; // сектор
            board[i][j][3] = ''; //false; //забыл что
            board[i][j][4] = ''; //Block[board[i][j][0]][board[i][j][1]].canMove; // можно ходить / нельзя 
            board[i][j][5] = cB[0] * j;
            board[i][j][6] = cB[2] * i;
            //board[i][j][7] = Block[board[i][j][0]][board[i][j][1]].hp; // хп / нельзя ломать
        }          
    }
}   

function tower() { // башни
    for (i = 10; i < 14; i++) {
        board[cB[i][0]][cB[i][1]][0] = 'tower';
        board[cB[i][0]][cB[i][1]][1] = 0;
        board[cB[i][0]][cB[i][1]][4] = true;
    }
}

function castle () { // замок
    board[cB[14][0]][cB[14][1]][0] = 'castle';
    board[cB[14][0]][cB[14][1]][1] = 0;
    board[cB[14][0]][cB[14][1]][4] = true;
}

function sectorR () { //рандом сектора
    let arr = [];
    let a, b;

    a = rand(4);
    cB[4][a] = 'earth';

    if (a == 0) {
        arr = [1, 2];
        b = [3];
    } else if (a == 1) {
        arr = [0, 3];
        b = [2];
    } else if (a == 2) {
        arr = [0, 3];
        b = [1];
    } else if (a == 3) {
        arr = [2, 1];
        b = [0];
    }

    a = rand(2);
    cB[4][arr[a]] = 'earth';
    
    arr.splice(a, 1);
    arr[1] = b;
    a = rand(2);
    cB[4][arr[a]] = 'mountain';
    
    arr.splice(a, 1);
    cB[4][arr[0]] = 'sand';

    if (cB[4][0] == cB[4][1] || cB[4][2] == cB[4][3]) {
        cB[5] = [cB[5][0], cB[5][1] - 1];
        cB[7] = [cB[7][0], cB[7][1] - 1];
    }
}

function sectorB () { // заполнение сектора
    for (i = 0; i < cB[9][0]; i++) {
        for (j = 0; j < cB[9][1]; j++) {
            if (j < cB[5][0] & i < cB[5][1]) {
                board[i][j][2] = cB[4][0];
            } else if (j > cB[6][0] && i < cB[6][1]) {
                board[i][j][2] = cB[4][1];
            } else if (j < cB[7][0] && i > cB[7][1]) {
                board[i][j][2] = cB[4][2];
            } else if (j > cB[8][0] && i > cB[8][1]) {
                board[i][j][2] = cB[4][3];    
            }
        }
    }
}

function sectorT () { // отображение сектора
    for (let i = 0; i < cB[9][0]; i++) {
        for (let j = 0; j < cB[9][1]; j++) {
            if (board[i][j][2] && i % 2 == 0 && board[i][j][0] == -1) {
                board[i][j][0] = board[i][j][2];
            } else if (board[i][j][2] && i % 2 == 1 && j < cB[9][1] && board[i][j][0] == -1) {
                board[i][j][0] = board[i][j][2];                
            }
        }
    }
}

function armorC () { // граница вокруг замка
    for (let i = 0; i < 3; i = i + 2) {
        let a = cB[14][1] = 9 + i;
        if (board[cB[14][0]][a][2] == 'mountain' || board[cB[14][0]][a][2] == 'sand') {
            board[cB[14][0]][a][0] = 'mountain';
            board[cB[14][0]][a][1] = 5;
            board[cB[14][0]][a][4] = false;
        } else {
            board[cB[14][0]][a][0] = 'mountain';
            board[cB[14][0]][a][1] = 0;
            board[cB[14][0]][a][4] = false;
        }
    }

    for (let i = 0; i < 3; i = i + 2) {
        let a = cB[14][0] - 1 + i;
        if (board[a][cB[14][1] - 1][2] == 'mountain' || board[a][cB[14][1]][2] == 'sand') {
            board[a][cB[14][1] - 1][0] = 'mountain';
            board[a][cB[14][1] - 1][1] = 5;
            board[a][cB[14][1] - 1][4] = false;
        } else {
            board[a][cB[14][1] - 1][0] = 'earth';
            board[a][cB[14][1] - 1][1] = 0;
            board[a][cB[14][1] - 1][4] = false;
        }
    }

    for (let i = 0; i < 3; i = i + 2) {
        let a = cB[14][0] - 1 + i;
        if (board[a][cB[14][1] - 2][2] == 'mountain' || board[a][cB[14][1] - 2][2]== 'sand') {
            board[a][cB[14][1] - 2][0] = 'mountain';
            board[a][cB[14][1] - 2][1] = 5;
            board[a][cB[14][1] - 2][4] = false;
        } else {
            board[a][cB[14][1] - 2][0] = 'mountain';
            board[a][cB[14][1] - 2][1] = 0;
            board[a][cB[14][1] - 2][4] = false;

        }
    }
}

function oneR () {
    let a = 20; //mountain
    let b = 15; //loot
    let s = 40;
    
    while (s > 0) {
        let c = randM(cB[10][0] + 1, cB[14][0] + 5);
        let d = randM(cB[10][1] + 1, cB[14][1] + 5);
        if (board[c][d][2] == 'sand') {
            e = randM(0, 2);            
        } else {
            e = 2;
        }
        if(board[c][d][0] == -1) {
            s -= 1;
            board[c][d][0] = board[c][d][2];
            board[c][d][1] = e;
        }
    }
    while (a > 0) {
        let c = randM(cB[10][0] + 1, cB[14][0] + 5);
        let d = randM(cB[10][1] + 1, cB[14][1] + 5);
        let e = randM(3, 6);
        if(board[c][d][0] == -1) {
            a -= 1;
            board[c][d][0] = 'mountain';
            board[c][d][1] = e;
        }
    }
    while (b > 0) {
        let c = randM(cB[10][0] + 1, cB[14][0] + 3);
        let d = randM(cB[10][1] + 1, cB[14][1] + 3);
        let e;
        if (board[c][d][2] == 'mountain' || board[c][d][2] == 'sand') {
            e = randM(4, 7);
        } else {
            e = randM(0, 4);            
        }
        if(board[c][d][0] == -1) {
            b -= 1;
            board[c][d][0] = 'loot';
            board[c][d][1] = e;
        }
    }
}

function twoR () {
    let a = 20; //sand
    let b = 15; //loot
    let s = 40;
    
    while (s > 0) {
        let c = randM(cB[11][0] + 1, cB[14][0] + 3);
        let d = randM(cB[14][1] - 3, cB[11][1] + 2);
        if (board[c][d][2] == 'sand') {
            e = randM(0, 2);            
        } else {
            e = 2;
        }
        if(board[c][d][0] == -1) {
            s -= 1;
            board[c][d][0] = board[c][d][2];
            board[c][d][1] = e;
        }
    }
    while (a > 0) {
        let c = randM(cB[11][0] + 1, cB[14][0] + 3);
        let d = randM(cB[14][1] - 3, cB[11][1] + 2);
        let e = randM(3, 6);
        if(board[c][d][0] == -1) {
            a -= 1;
            board[c][d][0] = 'mountain';
            board[c][d][1] = e;
        }
    }
    while (b > 0) {
        let c = randM(cB[11][0] + 1, cB[14][0] + 3);
        let d = randM(cB[14][1] - 3, cB[11][1] + 2);
        if (board[c][d][2] == 'mountain' || board[c][d][2] == 'sand') {
            e = randM(4, 7);
        } else {
            e = randM(0, 4);            
        }
        if(board[c][d][0] == -1) {
            b -= 1;
            board[c][d][0] = 'loot';
            board[c][d][1] = e;
        }
    }
}

function freeR () {
    let a = 20; //sand
    let b = 15; //loot
    let s = 40;
    
    while (s > 0) {
        let c = randM(cB[14][0] + 3, cB[12][0] - 1);
        let d = randM(cB[12][1] + 1, cB[14][1] + 3);
        if (board[c][d][2] == 'sand') {
            e = randM(0, 2);            
        } else {
            e = 2;
        }
        if(board[c][d][0] == -1) {
            s -= 1;
            board[c][d][0] = board[c][d][2];
            board[c][d][1] = e;
        }
    }
    while (a > 0) {
        let c = randM(cB[14][0] + 3, cB[12][0] - 1);
        let d = randM(cB[12][1] + 1, cB[14][1] + 3);
        let e = randM(3, 6);
        if(board[c][d][0] == -1) {
            a -= 1;
            board[c][d][0] = 'mountain';
            board[c][d][1] = e;
        }
    }
    while (b > 0) {
        let c = randM(cB[14][0] + 3, cB[12][0] - 1);
        let d = randM(cB[12][1] + 1, cB[14][1] + 3);
        if (board[c][d][2] == 'mountain' || board[c][d][2] == 'sand') {
            e = randM(4, 7);
        } else {
            e = randM(0, 4);            
        }
        if(board[c][d][0] == -1) {
            b -= 1;
            board[c][d][0] = 'loot';
            board[c][d][1] = e;
        }
    }
}

function fourR () {
    let a = 20; //sand
    let b = 15; //loot
    let s = 40;
    
    while (s > 0) {
        let c = randM(cB[14][0] - 3, cB[13][0] + 1);
        let d = randM(cB[14][1] - 3, cB[13][1] + 1);
        if (board[c][d][2] == 'sand') {
            e = randM(0, 2);            
        } else {
            e = 2;
        }
        if(board[c][d][0] == -1) {
            s -= 1;
            board[c][d][0] = board[c][d][2];
            board[c][d][1] = e;
        }
    }
    while (a > 0) {
        let c = randM(cB[14][0] - 3, cB[13][0] + 1);
        let d = randM(cB[14][1] - 3, cB[13][1] + 1);
        let e = randM(3, 6);
        if(board[c][d][0] == -1) {
            a -= 1;
            board[c][d][0] = 'mountain';
            board[c][d][1] = e;
        }
    }
    while (b > 0) {
        let c = randM(cB[14][0] - 3, cB[13][0] + 1);
        let d = randM(cB[14][1] - 3, cB[13][1] + 1);
        if (board[c][d][2] == 'mountain' || board[c][d][2] == 'sand') {
            e = randM(4, 7);
        } else {
            e = randM(0, 4);            
        }
        if(board[c][d][0] == -1) {
            b -= 1;
            board[c][d][0] = 'loot';
            board[c][d][1] = e;
        }
    }
}

function sectorT () { // тестовая генерация секторов
    for (let i = 0; i < cB[9][0]; i++) {
        for (let j = 0; j < cB[9][1]; j++) {
            if (board[i][j][2] && i % 2 == 0 && board[i][j][0] == -1) {
                if (board[i][j][2] == 'sand') {
                    e = randM(0, 2);            
                } else {
                    e = 2;
                }
                board[i][j][0] = board[i][j][2];
                board[i][j][1] = e;               
            } else if (board[i][j][2] && i % 2 == 1 && j < cB[9][1] && board[i][j][0] == -1) {
                if (board[i][j][2] == 'sand') {
                    e = randM(0, 2);            
                } else {
                    e = 2;
                }
                board[i][j][0] = board[i][j][2];      
                board[i][j][1] = e;           
            }
        }
    }
}



// function water () {
//     let a = rand(3);
//     waterXY[3] = -1;
//     waterXY[4] = -1; 
//     let b = 0;
//     let c = 0; 

//     while (b < 10 || c < 10) {
//         b = b + 2;
//         c = c + 2;

//         board[b][c][0] = 'loot';
//         board[b][c][1] = 0;
//         // board[waterXY[a][1]][ waterXY[a][0]][2] = false;
//     }
// }

// function canMoveBoard() {
//     for (let i = 0; i < cB[9][0]; i++) {
//         for (let j = 0; j < cB[9][1]; j++) {
//             if (board[i][j][0] != -1 && board[i][j][1] != -1) {

//             }
//         }          
//     }
// }   

function cornerB() { // срезает углы
    for (i = 15; i < 19; i++) {
        board[cB[i][0]][cB[i][1]][0] = -1;
        board[cB[i][0]][cB[i][1]][1] = -1;
        board[cB[i][0]][cB[i][1]][4] = false;
    }
}

function generationBoard() {
    tower ();
    castle ();
    sectorR ();
    sectorB (); 
    armorC ();
    oneR ();
    twoR ();
    freeR ();
    fourR ();
    sectorT ()
    //sectorT (); 

    // canMoveBoard();
    cornerB();
}

function visualBoard() {
    let canvas = document.getElementById("canvas");
    if (canvas.getContext) {
        let ctx = canvas.getContext("2d");
        let img = new Image();
        img.onload = function() {      
            for (let i = 0; i < cB[9][0]; i++) {
                for (let j = 0; j < cB[9][1]; j++) {
                    if (board[i][j][0] != -1 && board[i][j][1] != -1) {
                        if (i % 2 == 0) {
                            ctx.drawImage(img, 
                                Block[board[i][j][0]][board[i][j][1]].x, Block[board[i][j][0]][board[i][j][1]].y, 
                                cB[0], cB[1], 
                                board[i][j][5], board[i][j][6], 
                                cB[0] + 2, cB[1] + 2
                            );
                        }
                        if (i % 2 == 1 && j < cB[9][1] - 1) {
                            ctx.drawImage(img, 
                                Block[board[i][j][0]][board[i][j][1]].x, Block[board[i][j][0]][board[i][j][1]].y, 
                                cB[0], cB[1], 
                                board[i][j][5] + cB[3], board[i][j][6], 
                                cB[0] + 2, cB[1] + 2
                            );
                        }
                    }                        
                }
            }
        }
        img.src = 'png/Block.png';  
    }
}

