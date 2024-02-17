class Barnsley_Fern {
    constructor(startX, startY, scale) {
        this.x = startX;
        this.y = startY;
        this.scale = scale;

        this.iter = 0;
        this.xi = 0.0;
        this.yi = 0.0;
    }

    show(maxIters) {
        push();
        translate(this.x, this.y);

        while (this.iter < maxIters) {
            const r = Math.random();

            if (r < 0.01) {
                this.xi = 0.0;
                this.yi = 0.16 * this.y;
            } else if (r < 0.86) {
                this.xi = 0.85 * this.x + 0.04 * this.y;
                this.yi = -0.04 * this.x + 0.85 * this.y + 1.6;
            } else if (r < 0.93) {
                this.xi = 0.2 * this.x - 0.26 * this.y;
                this.yi = 0.23 * this.x + 0.22 * this.y + 1.6;
            } else {
                this.xi = -0.15 * this.x + 0.28 * this.y;
                this.yi = 0.26 * this.x + 0.24 * this.y + 0.44;
            }

            point(this.xi * this.scale, height - this.yi * this.scale);
            this.x = this.xi
            this.y = this.yi
            this.iter += 1;
        }
        pop();
    }
}

function setup() {
    createCanvas(700, 700);
    // bf = new Fern(width / 2, 0, 60, "B");
    bf = new Barnsley_Fern(width / 2, 0, 60);
    bf.show(100000);
}

function draw() {
}
