function randArr(arr) {;
    let a = Math.floor(Math.random() * arr.length);
    return arr[a];
}

function rand(a) {;
    return Math.floor(Math.random() * a);
}

var waterXY = [];
var board = [];
var boardXY = [];
boardXY[0] = 184; // ширина иконки (разница по X)
boardXY[1] = 250; // высота иконки 
boardXY[2] = 79; // разница по Y
boardXY[3] = 92; //разница 2 по X
var sector = []; // 0 , 1, 2, 3
var sectorXY = [];
sectorXY[0] = [10, 15];
sectorXY[1] = [9, 15];
sectorXY[2] = [10, 14];
sectorXY[3] = [9, 14];

function newBoard() {
    for (let i = 0; i < 29; i++) {
        board[i] = [];   
        for (let j = 0; j < 21; j++) {
            board[i][j] = [];  
            board[i][j][0] = -1;
            board[i][j][1] = 1;  
            board[i][j][2] = boardXY[0] * j;
            board[i][j][3] = boardXY[2] * i; 
        }          
    }
}   

function tower() {
    board[1][0][0] = 'tower';
    board[1][0][1] = 0;
    board[1][0][4] = true;
    board[1][19][0] = 'tower';
    board[1][19][1] = 1;
    board[1][19][4] = true;
    board[27][0][0] = 'tower';
    board[27][0][1] = 2;
    board[27][0][4] = true;
    board[27][19][0] = 'tower';
    board[27][19][1] = 3;  
    board[27][19][4] = true; 
}

function castle () {
    board[14][10][0] = 'castle';
    board[14][10][1] = 0;
    board[14][10][4] = true;
}

function sectorRand () {
    let arr = [];
    let a, b;

    a = rand(4);
    sector[a] = 'earth';

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
    sector[arr[a]] = 'earth';
    
    arr.splice(a, 1);
    arr[1] = b;
    a = rand(2);
    sector[arr[a]] = 'mountain';
    
    arr.splice(a, 1);
    sector[arr[0]] = 'sand';

    if (sector[0] == 'earth' && sector[1] == 'earth' || sector[2] == 'earth' && sector[3]== 'earth') {
        sectorXY[0] = [10, 14];
        sectorXY[2] = [10, 13];
    }
}

function sectorINFO (x, y) {
    let a;
    if (x < sectorXY[0][0] & y < sectorXY[0][1]) {
        a = sector[0];
    } else if (x > sectorXY[1][0] && y < sectorXY[1][1]) {
        a = sector[1];
    } else if (x < sectorXY[2][0] && y > sectorXY[2][1]) {
        a = sector[2];
    } else if (x > sectorXY[3][0] && y > sectorXY[3][1]) {
        a = sector[3];    
    }
    return a;
}

function sectorTest () {
    for (let i = 0; i < 29; i++) {
        for (let j = 0; j < 21; j++) {
            let a = sectorINFO(j, i);
            if (a && i % 2 == 0 && board[i][j][0] == -1) {
                board[i][j][0] = a;
            } else if (a && i % 2 == 1 && j < 20 && board[i][j][0] == -1) {
                board[i][j][0] = a;                
            }
        }
    }
}

function armorCastle () {
    for (let i = 0; i < 3; i = i + 2) {
        let a = 9 + i;
        if (sectorINFO(a, 14) == 'mountain' || sectorINFO(a, 14) == 'sand') {
            board[14][a][0] = 'mountain';
            board[14][a][1] = 5;
            board[14][a][4] = false;
        } else {
            board[14][a][0] = 'mountain';
            board[14][a][1] = 0;
            board[14][a][4] = false;
            waterXY.push([a, 14]);
        }
    }

    for (let i = 0; i < 3; i = i + 2) {
        let a = 13 + i;
        if (sectorINFO(10, a) == 'mountain' || sectorINFO(10, a) == 'sand') {
            board[a][10][0] = 'mountain';
            board[a][10][1] = 5;
            board[a][10][4] = false;
        } else {
            board[a][10][0] = 'earth';
            board[a][10][1] = 0;
            board[a][10][4] = false;
            waterXY.push([10, a]);
        }
    }

    for (let i = 0; i < 3; i = i + 2) {
        let a = 13 + i;
        if (sectorINFO(9, a) == 'mountain' || sectorINFO(9, a) == 'sand') {
            board[a][9][0] = 'mountain';
            board[a][9][1] = 5;
            board[a][9][4] = false;
        } else {
            board[a][9][0] = 'mountain';
            board[a][9][1] = 0;
            board[a][9][4] = false;
            waterXY.push([9, a]);
        }
    }
}

function water () {
    let a = rand(3);
    if (sector[0] == sector[1]) {
        waterXY[3] = [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -1, -1];
        waterXY[4] = 1;      
    } else if (sector[1] == sector[3]) {
        waterXY[3] = 1;
        waterXY[4] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1];              
    } else if (sector[3] == sector[2]) {
        waterXY[3] = [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -1, -1];
        waterXY[4] = -1;   
    } else if (sector[2] == sector[0]) {
        waterXY[3] = -1;
        waterXY[4] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1];   
    }

    if  (waterXY[3] == -1 || waterXY[3] == 1) {
        while (waterXY[a][0] != 0 || waterXY[a][1] != 0) {
            waterXY[a][0] += waterXY[3];
            let b = rand (waterXY[4].length);
            waterXY[a][0] += waterXY[4][b];
            
            board[waterXY[a][1]][waterXY[a][0]][0] = 'mountain';
            board[waterXY[a][1]][waterXY[a][0]][1] = 0;
            board[waterXY[a][1]][waterXY[a][0]][4] = false;
        }

    }
}

function canMoveBoard() {
    for (let i = 0; i < 29; i++) {
        for (let j = 0; j < 21; j++) {
            if (board[i][j][0] != -1 && board[i][j][1] != -1) {
                board[i][j][4] = Block[board[i][j][0]][board[i][j][1]].canMove;
                board[i][j][5] = false;
                board[i][j][6] = Block[board[i][j][0]][board[i][j][1]].hp;
            }
        }          
    }
}   

function cornerBoard() {
    board[0][0][0] = -1;
    board[0][0][1] = -1;
    board[0][0][4] = false;
    board[0][20][0] = -1;
    board[0][20][1] = 2;
    board[0][20][4] = false;
    board[28][0][0] = -1;
    board[28][0][1] = 3;
    board[28][0][4] = false;
    board[28][20][0] = -1;
    board[28][20][1] = 4;  
    board[28][20][4] = false; 
}

function generationBoard() {
    tower();
    castle ();
    sectorRand ();
    armorCastle();
    sectorTest ();

    // canMoveBoard();
    cornerBoard();
}

function visualBoard() {
    let canvas = document.getElementById("canvas");
    if (canvas.getContext) {
        let ctx = canvas.getContext("2d");
        let img = new Image();
        img.onload = function() {      
            for (let i = 0; i < 29; i++) {
                for (let j = 0; j < 21; j++) {
                    if (board[i][j][0] != -1 && board[i][j][1] != -1) {
                        if (i % 2 == 0) {
                            ctx.drawImage(img, 
                                Block[board[i][j][0]][board[i][j][1]].x, Block[board[i][j][0]][board[i][j][1]].y, 
                                boardXY[0], boardXY[1], 
                                board[i][j][2], board[i][j][3], 
                                boardXY[0] + 2, boardXY[1] + 2
                            );
                        }
                        if (i % 2 == 1 && j < 20) {
                            ctx.drawImage(img, 
                                Block[board[i][j][0]][board[i][j][1]].x, Block[board[i][j][0]][board[i][j][1]].y, 
                                boardXY[0], boardXY[1], 
                                board[i][j][2] + boardXY[3], board[i][j][3], 
                                boardXY[0] + 2, boardXY[1] + 2
                            );
                        }
                    }                        
                }
            }
        }
        img.src = 'png/Block.png';  
    }
}