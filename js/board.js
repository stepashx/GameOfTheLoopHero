function rand() {
    var arr = ['loot', 'mountain', 'earth', 'sand', 'tower', 'decor'];
    var a = Math.floor(Math.random() * arr.length);
    return arr[a];
}

var boardXY = [];
var board = [];

boardXY[0] = 184; // ширина иконки (разница по X)
boardXY[1] = 250; // высота иконки 
boardXY[2] = 79;// разница по Y
boardXY[3] = 92;//разница 2 по X
boardXY[4] = 59; //разница 2 по Y

function newBoard() {
    for (i = 0; i < 30; i++) {
        board[i] = [];   
        for (j = 0; j < 20; j++) {
            board[i][j] = [];  
            board[i][j][0] = rand();
            board[i][j][1] = 1;  
            board[i][j][2] = boardXY[0] * j;
            board[i][j][3] = boardXY[2] * i; 
        }          
    }
}

function draw() {
    var canvas = document.getElementById("canvas");
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
        var img = new Image();
        img.onload = function() {
            for (i = 0; i < 30; i++) {
                for (j = 0; j < 20; j++) {
                    if (i % 2 == 0) {
                        ctx.drawImage(img, 
                            Block[board[i][j][0]][board[i][j][1]].x, Block[board[i][j][0]][board[i][j][1]].y , 
                            boardXY[0], boardXY[1], 
                            board[i][j][2], board[i][j][3], 
                            boardXY[0] + 2, boardXY[1] + 2
                        );
                    }
                    if (i % 2 == 1) {
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
        img.src = 'Block.png';
    }
}