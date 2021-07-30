function rand() {
    var arr = ['loot', 'mountain', 'earth', 'sand', 'tower', 'decor'];
    var a = Math.floor(Math.random() * arr.length);
    return arr[a];
}

var board = [];
var boardXY = [];
boardXY[0] = 184; // ширина иконки (разница по X)
boardXY[1] = 250; // высота иконки 
boardXY[2] = 79; // разница по Y
boardXY[3] = 92; //разница 2 по X

function newBoard() {
    for (i = 0; i < 29; i++) {
        board[i] = [];   
        for (j = 0; j < 21; j++) {
            board[i][j] = [];  
            board[i][j][0] = rand();
            board[i][j][1] = 1;  
            board[i][j][2] = boardXY[0] * j;
            board[i][j][3] = boardXY[2] * i; 
        }          
    }
}

function canMoveBoard() {
    for (i = 0; i < 29; i++) {
        for (j = 0; j < 21; j++) {
            board[i][j][4] = Block[board[i][j][0]][board[i][j][1]].canMove;
        }          
    }
}       

function generationBoard() {
    newBoard();
    canMoveBoard();
}

function visualBoard() {
    var canvas = document.getElementById("canvas");
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
        var img = new Image();
        img.onload = function() {
            for (i = 0; i < 29; i++) {
                for (j = 0; j < 21; j++) {
                    if (i % 2 == 0) {
                        ctx.drawImage(img, 
                            Block[board[i][j][0]][board[i][j][1]].x, Block[board[i][j][0]][board[i][j][1]].y , 
                            boardXY[0], boardXY[1], 
                            board[i][j][2], board[i][j][3], 
                            boardXY[0] + 2, boardXY[1] + 2
                        );
                    }
                    if (i % 2 == 1 & j < 20) {
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
        img.src = 'png/Block.png';
    }
}