function init() {
    canvas = document.getElementById("field");
    cellSize = 24;
    colors = ["#FF0000", "#FFFF00", "#40FF00", "#2E2EFE", "#FF00F3", "#FF005A"];

    canvas.width = 24 * cellSize;
    canvas.height = 24 * cellSize;
    context = canvas.getContext('2d');

    draw();
}

// Отрисовка игры
function draw() {

    context.fillStyle = '#A9F5F2';
    context.fillRect(0, 0, canvas.width, canvas.height);
    RenderLevel();
}


var field = document.getElementById("field");
var context = field.getContext('2d');


function RenderLevel() {

    var map = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ];

    var color;
    for (var j = 0; j < map.length; j++) {
        color = colors[(Math.floor(Math.random() * colors.length))];
        for (var i = 0; i < map[j].length; i++) {
            if ((map[j][i]) == 1) {
                DrawBrick(i * 2 * cellSize, j * cellSize, color);
            }
        }
    }
}

function DrawBrick(x, y, color) {
    context.fillStyle = "grey";
    fillRoundedRect(x, y, 2 * cellSize, cellSize, 5);
    context.fillStyle = color;
    fillRoundedRect(x + 2, y + 2, 2 * cellSize - 4, cellSize - 4, 3);
}

function fillRoundedRect(x, y, w, h, r) {
    context.beginPath();
    context.moveTo(x + r, y);
    context.lineTo(x + w - r, y);
    context.quadraticCurveTo(x + w, y, x + w, y + r);
    context.lineTo(x + w, y + h - r);
    context.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    context.lineTo(x + r, y + h);
    context.quadraticCurveTo(x, y + h, x, y + h - r);
    context.lineTo(x, y + r);
    context.quadraticCurveTo(x, y, x + r, y);
    context.fill();
}
