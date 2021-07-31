function visualBoard() {
    var canvas = document.getElementById("canvas");
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
        var img = new Image();
        img.onload = function() {      
            for (i = 0; i < 29; i++) {
                for (j = 0; j < 21; j++) {
                    if (i % 2 == 0 & board[i][j][0] != -1) {
                        ctx.drawImage(img, 
                            Block[board[i][j][0]][board[i][j][1]].x, Block[board[i][j][0]][board[i][j][1]].y , 
                            boardXY[0], boardXY[1], 
                            board[i][j][2], board[i][j][3], 
                            boardXY[0] + 2, boardXY[1] + 2
                        );
                    }
                    if (i % 2 == 1 & j < 20 & board[i][j][0] != -1) {
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