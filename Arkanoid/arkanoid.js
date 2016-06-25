function init() {
    canvas = document.getElementById("field");
    scale = 24;
    colors = ["#FF0000", "#FFFF00", "#40FF00", "#2E2EFE", "#FF00F3", "#FF005A"];

    canvas.width = 24 * scale;
    canvas.height = 24 * scale;
    context = canvas.getContext('2d');
    field = new brick("#A9F5F2", 0, 0, canvas.width, canvas.height, 5);
    border = new brick("black", (canvas.height / 2 - 4 * scale / 2), canvas.height - scale, 4 * scale, scale, 5);
    ball = new brick("black", border.x + border.width / 2, canvas.height - 2 * border.height, scale, scale, 14);
    ball.vX = 2; // скорость по оси х
    ball.vY = 2; // скорость по оси у

    var mapLevel = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1],
        [0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1]
    ];

    bricks = [];
    var color;
    var number = 0;
    for (var j = 0; j < mapLevel.length; j++) {
        color = colors[number];
        bricks[j] = [];
        for (var i = 0; i < mapLevel[j].length; i++) {
            bricks[j][i] = new brick(color, i * 2 * scale, j * scale, 2 * scale, scale, 5, mapLevel[j][i]);
        }
        if (number == colors.length - 1) {
            number = 0;
        } else {
            number++;
        }
    }

    canvas.onmousemove = borderMove;
    setInterval(play, 10);

}

// Отрисовка игры
function draw() {
    field.draw();
    ball.draw();
    border.draw();
    RenderLevel(bricks);
}

function play() {
    draw(); // отрисовываем всё на холсте
    update(); // обновляем координаты
}


function collision(objA, objB) {
    if (objA.x + objA.width >= objB.x &&
        objA.x <= objB.x + objB.width &&
        objA.y + objA.height >= objB.y &&
        objA.y <= objB.y + objB.height) {
        return true;
    }
    else {
        return false;
    }
}

function collisionBorder(objA, objB) {
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


function brick(color, x, y, width, height, radius, visible) {
    this.color = color; // цвет прямоугольника
    this.x = x; // координата х
    this.y = y; // координата у
    this.width = width; // ширина
    this.height = height; // высота
    this.radius = radius; //радиус скруглений
    this.visible = visible; //видимость
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
    if (ball.y < 0) {
        // соприкосновение потолком игрового поля
        ball.vY = -ball.vY;
    }

    if (ball.y + ball.height > field.height) {
        // соприкосновение с полом игрового поля
        ball.vY = -ball.vY;
        // alert("please try again");
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

    if (collisionBorder(border, ball)) {

        if (ball.x   < (border.x +  scale) && ball.vX < 0) {
            ball.vX = -ball.vX;
        }
        if (ball.x > (border.x + border.width - scale) && ball.vX > 0) {
            ball.vX = -ball.vX;
        }

        ball.vY = -ball.vY;
    }

    for (var j = 0; j < bricks.length; j++) {
        for (var i = 0; i < bricks[j].length; i++) {
            if (collision((bricks[j][i]), ball) && ((bricks[j][i]).visible == 1)) {
                (bricks[j][i]).visible = 0;
                if (((bricks[j][i]).y + (bricks[j][i]).height) <= ball.y) {
                    ball.vY = -ball.vY;
                }
                if ((bricks[j][i]).y >= (ball.y + ball.height)) {
                    ball.vY = -ball.vY;
                }
                if ((bricks[j][i]).x >= (ball.x + ball.width)) {
                    ball.vX = -ball.vX;
                }
                if (((bricks[j][i]).x + (bricks[j][i]).width) <= ball.x) {
                    ball.vX = -ball.vX;
                }
            }
        }
    }

// меняем координаты шарика
    ball.x -= ball.vX;
    ball.y -= ball.vY;

}


function RenderLevel(bricks) {
    for (var j = 0; j < bricks.length; j++) {
        for (var i = 0; i < bricks[j].length; i++) {
            if ((bricks[j][i]).visible == 1) {
                (bricks[j][i]).draw();
            }
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
