class Circle1 {
    constructor(a) {
        this.x = 100;
        this.y = 0;
        this.r = 20;
        this.color = "red";
        this.velocity = a + Math.random() * 5;
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

    update() {
        this.y += this.velocity;
    }
}

class Circle2 {
    constructor(a) {
        this.x = 225;
        this.y = 0;
        this.r = 20;
        this.color = "blue";
        this.velocity = a + Math.random() * 5;
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

    update() {
        this.y += this.velocity;
    }
}

class Circle3 {
    constructor(a) {
        this.x = 350;
        this.y = 0;
        this.r = 20;
        this.color = "green";
        this.velocity = a + Math.random() * 5;
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

    update() {
        this.y += this.velocity;
    }
}

class Circle4 {
    constructor(a) {
        this.x = 475;
        this.y = 0;
        this.r = 20;
        this.color = "orange";
        this.velocity = a + Math.random() * 5;
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

    update() {
        this.y += this.velocity;
    }
}

class Circle5 {
    constructor(a) {
        this.x = 600;
        this.y = 0;
        this.r = 20;
        this.color = "brown";
        this.velocity = a + Math.random() * 5;
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

    update() {
        this.y += this.velocity;
    }
}

export {
    Circle1,
    Circle2,
    Circle3,
    Circle4,
    Circle5
}