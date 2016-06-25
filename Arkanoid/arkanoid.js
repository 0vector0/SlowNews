function init() {
    canvas = document.getElementById("field");

    scale = 24;
    colors = ["#FF0000", "#FFFF00", "#40FF00", "#2E2EFE", "#FF00F3", "#FF005A"];
    canvas.width = 26 * scale;
    canvas.height = 26 * scale;
    context = canvas.getContext('2d');
    field = new brick("#A9F5F2", 0, 0, canvas.width, canvas.height, 0);
    border = new brick("black", canvas.height / 2 - 5 * scale / 2, canvas.height - scale, 4 * scale, scale, 5);
    ball = new brick("black", border.x + border.width / 2 - scale / 2, canvas.height - 2 * border.height,
        scale, scale, scale / 2+ 1);

    // X-axis speed
    ball.vX = scale / 12;
    // Y-axis speed
    ball.vY = scale / 12;

    mapLevel = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];

    bricks = [];
    newLevel();
    canvas.onmousemove = moveBorder;
    setInterval(play, 10);

}

function newLevel() {
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

function play() {
    draw();
    update();
    if (fieldIsEmpty()) {
        alert("WIN")
        newLevel();
        border.x = canvas.height / 2 - 4 * scale / 2;
        border.y = canvas.height - scale;
        ball.x = border.x + border.width / 2;
        ball.y = canvas.height - 2 * border.height;
    }
}

// Render the game
function draw() {
    field.draw();
    ball.draw();
    border.draw();
    renderLevel(bricks);
}

function renderLevel(bricks) {
    for (var j = 0; j < bricks.length; j++) {
        for (var i = 0; i < bricks[j].length; i++) {
            if ((bricks[j][i]).visible == 1) {
                (bricks[j][i]).draw();
            }
        }
    }
}

function update() {
    // Change the coordinates of the ball
    // in the Y-axis
    if (ball.y < 0) {
        // contact with the top
        ball.vY = -ball.vY;
    }
    if (ball.y + ball.height > field.height) {
        // contact with the bottom
        ball.vY = -ball.vY;
        // alert("please try again");
        document.location.reload();
    }

    // in the X-axis
    if (ball.x < 0) {
        // contact with the left wall
        ball.vX = -ball.vX;
    }
    if (ball.x + ball.width > field.width) {
        // contact with the right wall
        ball.vX = -ball.vX;
    }
    // contact with the board
    if (collisionBorder(border, ball)) {
        if (ball.x < (border.x + scale) && ball.vX < 0) {
            ball.vX = -ball.vX;
        }
        if (ball.x > (border.x + border.width - scale) && ball.vX > 0) {
            ball.vX = -ball.vX;
        }
        ball.vY = -ball.vY;
    }

    // contact with bricks
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

// change the coordinates of the ball
    ball.x = ball.x - ball.vX;
    ball.y = ball.y - ball.vY;
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

function moveBorder(e) {
    var x = e.pageX;
    if (border.width / 2 < x && x < field.width - border.width / 2) {
        border.x = x - border.width / 2;
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

function fieldIsEmpty() {
    var empty = true;
    for (var j = 0; j < bricks.length; j++) {
        for (var i = 0; i < bricks[j].length; i++) {
            if ((bricks[j][i]).visible == 1) {
                empty = false;
            }
        }
    }
    return empty;
}