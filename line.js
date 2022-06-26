class Line1 {
    draw(ctx) {
        ctx.beginPath();
        ctx.moveTo(100, 0);
        ctx.lineTo(100, 600);
        ctx.lineWidth = 5;
        ctx.strokeStyle = "white";
        ctx.stroke();
    }
}

class Line2 {
    draw(ctx) {
        ctx.beginPath();
        ctx.moveTo(225, 0);
        ctx.lineTo(225, 600);
        ctx.lineWidth = 5;
        ctx.strokeStyle = "white";
        ctx.stroke();
    }
}

class Line3 {
    draw(ctx) {
        ctx.beginPath();
        ctx.moveTo(350, 0);
        ctx.lineTo(350, 600);
        ctx.lineWidth = 5;
        ctx.strokeStyle = "white";
        ctx.stroke();
    }
}

class Line4 {
    draw(ctx) {
        ctx.beginPath();
        ctx.moveTo(475, 0);
        ctx.lineTo(475, 600);
        ctx.lineWidth = 5;
        ctx.strokeStyle = "white";
        ctx.stroke();
    }
}

class Line5 {
    draw(ctx) {
        ctx.beginPath();
        ctx.moveTo(600, 0);
        ctx.lineTo(600, 600);
        ctx.lineWidth = 5;
        ctx.strokeStyle = "white";
        ctx.stroke();
    }
}

export {
    Line1,
    Line2,
    Line3,
    Line4,
    Line5
}