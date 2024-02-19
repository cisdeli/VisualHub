class Fern {
    constructor(startX, startY, scale, type) {
        this.x = startX;
        this.y = startY;
        this.scale = scale;

        this.xi = 0.0;
        this.yi = 0.0;

        this.iter = 0;
        this.maxIters = 100000;
        this.done = false;

        this.points = [];

        if (type === "B") {
            this.coefficients = [
                {
                    name: "f1",
                    a: 0,
                    b: 0,
                    c: 0,
                    d: 0.16,
                    e: 0,
                    f: 0,
                    p: 0.01
                },
                {
                    name: "f2",
                    a: 0.85,
                    b: 0.04,
                    c: -0.04,
                    d: 0.85,
                    e: 0,
                    f: 1.60,
                    p: 0.85,
                },
                {
                    name: "f3",
                    a: 0.20,
                    b: -0.26,
                    c: 0.23,
                    d: 0.22,
                    e: 0,
                    f: 1.60,
                    p: 0.07
                },
                {
                    name: "f4",
                    a: -0.15,
                    b: 0.28,
                    c: 0.26,
                    d: 0.24,
                    e: 0,
                    f: 0.44,
                    p: 0.07
                }
            ];
        } else if (type === "CT") {
            this.coefficients = [
                {
                    name: "f1",
                    a: 0,
                    b: 0,
                    c: 0,
                    d: 0.25,
                    e: 0,
                    f: -0.4,
                    p: 0.02
                },
                {
                    name: "f2",
                    a: 0.95,
                    b: 0.005,
                    c: -0.005,
                    d: 0.93,
                    e: -0.002,
                    f: 0.5,
                    p: 0.84
                },
                {
                    name: "f3",
                    a: 0.035,
                    b: -0.2,
                    c: 0.16,
                    d: 0.04,
                    e: -0.09,
                    f: 0.02,
                    p: 0.07
                },
                {
                    name: "f4",
                    a: -0.04,
                    b: 0.2,
                    c: 0.16,
                    d: 0.04,
                    e: 0.083,
                    f: 0.12,
                    p: 0.07
                }
            ];
        } else {
            this.coefficients = null;
        }
    }

    get_points(n) {
        push();
        for (let i = 0; i < n; i++) { // Draw only 20 points per iteration
            if (this.iter < this.maxIters) {
                const r = Math.random();
                let t;

                if (r < this.coefficients[0].p) {
                    t = this.coefficients[0];
                } else if (r < this.coefficients[0].p + this.coefficients[1].p) {
                    t = this.coefficients[1];
                } else if (r < this.coefficients[1].p + this.coefficients[2].p) {
                    t = this.coefficients[2];
                } else {
                    t = this.coefficients[3];
                }

                this.xi = t.a * this.x + t.b * this.y + t.e;
                this.yi = t.c * this.x + t.d * this.y + t.f;

                this.points.push({ x: this.xi * this.scale, y: height - this.yi * this.scale });
                this.x = this.xi
                this.y = this.yi
                this.iter += 1;
            } else {
                this.done = true;
                break;
            }
        }
        pop();
    }

    show() {
        translate(width / 2, 10);
        stroke(255);
        for (let i = 0; i < this.points.length; i++) {
            point(this.points[i].x, this.points[i].y);
        }
    }
}

