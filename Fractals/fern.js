class Fractal {
    constructor(startX, startY, scale) {
        this.x = startX;
        this.y = startY;
        this.scale = scale;

        this.iter = 0;
        this.xi = 0.0;
        this.yi = 0.0;
    }
}

class Fern extends Fractal {
    constructor(startX, startY, scale, type) {
        super(startX, startY, scale);
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

    show(maxIters) {
        push();
        translate(this.x, this.y);

        while (this.iter < maxIters) {
            const r = Math.random();
            let t;

            if (r < 0.01) {
                t = this.coefficients[0];
            } else if (r < 0.86) {
                t = this.coefficients[1];
            } else if (r < 0.93) {
                t = this.coefficients[2];
            } else {
                t = this.coefficients[3];
            }

            this.xi = t.a * this.x + t.b * this.y + t.e;
            this.yi = t.c * this.x + t.d * this.y + t.f;

            point(this.xi * this.scaleFactor, height - this.yi * this.scaleFactor);
            this.x = this.xi
            this.y = this.yi
            this.iter += 1;
        }
        pop();
    }
}

