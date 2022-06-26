class Button1 {
    constructor() {
        this.x = 100;
        this.y = 550;
        this.r = 20;
        this.color = "pink";
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.strokeStyle = "white";
        ctx.lineWidth = 2;
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    }
}

class Button2 {
    constructor() {
        this.x = 225;
        this.y = 550;
        this.r = 20;
        this.color = "lightblue";
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.strokeStyle = "white";
        ctx.lineWidth = 2;
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    }
}

class Button3 {
    constructor() {
        this.x = 350;
        this.y = 550;
        this.r = 20;
        this.color = "lightgreen";
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.strokeStyle = "white";
        ctx.lineWidth = 2;
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    }
}

class Button4 {
    constructor() {
        this.x = 475;
        this.y = 550;
        this.r = 20;
        this.color = "yellow";
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.strokeStyle = "white";
        ctx.lineWidth = 2;
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    }
}

class Button5 {
    constructor() {
        this.x = 600;
        this.y = 550;
        this.r = 20;
        this.color = "violet";
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.strokeStyle = "white";
        ctx.lineWidth = 2;
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    }
}

export {
    Button1,
    Button2,
    Button3,
    Button4,
    Button5
}