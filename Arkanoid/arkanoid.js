function init() {
    canvas = document.getElementById("field");
    cellSize = 24;
    colors = ["#FF0000", "#FFFF00", "#40FF00", "#2E2EFE", "#FF00F3", "#FF005A"];
    brics  = [];
    canvas.width = 24 * cellSize;
    canvas.height = 24 * cellSize;
    context = canvas.getContext('2d');
    field = new brick("#A9F5F2", 0, 0, canvas.width, canvas.height, 5);
    border = new brick("black", canvas.height / 2, canvas.height - cellSize, 3 * cellSize, cellSize, 5);
    ball = new brick("black", border.x + border.width / 2, canvas.height - 2 * border.height, cellSize, cellSize, 14);
    ball.vX = 2; // скорость по оси х
    ball.vY = 2; // скорость по оси у


    // draw();

    canvas.onmousemove = borderMove;
    setInterval(play, 10);

}

// Отрисовка игры
function draw() {
    field.draw();
    RenderLevel();
    ball.draw();
    border.draw();
}

function play() {
    draw(); // отрисовываем всё на холсте
    update(); // обновляем координаты
}



function collision(objA, objB) {
    if (objA.x + objA.width > objB.x &&
        objA.x < objB.x + objB.width &&
        objA.y + objA.height > objB.y &&
        objA.y < objB.y + objB.height) {
        return true;
    }
    else {
        return false;
    }
}

function borderMove(e) {
    var x = e.pageX;
    if (border.width / 2 < x && x < field.width - border.width / 2) {
        border.x = x - border.width / 2;
    }
}


function brick(color, x, y, width, height, radius) {
    this.color = color; // цвет прямоугольника
    this.x = x; // координата х
    this.y = y; // координата у
    this.width = width; // ширина
    this.height = height; // высота
    this.radius = radius; //радиус скруглений
    this.draw = function () // Метод рисующий прямоугольник
    {
        context.fillStyle = "grey";
        fillRoundedRect(this.x, this.y, this.width, this.height, this.radius);
        context.fillStyle = this.color;
        fillRoundedRect(this.x + 2, this.y + 2, this.width - 4, this.height - 4, this.radius - 2);
    }
}

function update() {

// меняем координаты шарика
    // Движение по оси У
    // соприкосновение потолком игрового поля
    if (ball.y < 0) {
        ball.vY = -ball.vY;
    }
    // соприкосновение с полом игрового поля
    if (ball.y + ball.height > field.height) {
         ball.vY = -ball.vY;
        // alert("GAME OVER");
        document.location.reload();

    }

    // Движение по оси Х
    if (ball.x < 0) {
        // столкновение с левой стеной
        ball.vX = -ball.vX;
    }
    if (ball.x + ball.width > field.width) {
        // столкновение с правой
        ball.vX = -ball.vX;
    }

    if ((collision(border, ball))) {
        ball.vY = -ball.vY;
    }

    // меняем координаты шарика
    ball.x -= ball.vX;
    ball.y -= ball.vY;

}


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
    var number = 0;
    var count = 0;
    for (var j = 0; j < map.length; j++) {

        // color = colors[(Math.floor(Math.random() * colors.length))];
        color = colors[number];
        for (var i = 0; i < map[j].length; i++) {
            if ((map[j][i]) == 1) {
                brics[count] = new brick(color, i * 2 * cellSize, j * cellSize, 2 * cellSize, cellSize, 5).draw();
                // DrawBrick(i * 2 * cellSize, j * cellSize, color);

                count++;

            }
        }
        if (number == colors.length - 1) {
            number = 0;
        } else {
            number++;
        }
    }
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
