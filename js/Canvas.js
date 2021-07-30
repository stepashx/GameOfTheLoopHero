const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

canvas.width = innerWidth
canvas.height = innerHeight

let mx
let my

addEventListener('click', function(event)
{
    onmousemove = function (event) {
        mx = event.x
        my = event.y
    }

});
