class dragonCurve {
    constructor() {
        this.angle = HALF_PI;
        this.axiom = "FX";
        this.sentence = this.axiom;
        this.len = 200;
        this.generation = 0;

        this.rules = [
            {
                a: "X",
                b: "X+YF"
            },
            {
                a: "Y",
                b: "FX-Y"
            }
        ];
    }

    generate() {
        this.generation++;
        let nextSentence = "";
        for (let i = 0; i < this.sentence.length; i++) {
            let current = this.sentence.charAt(i);
            let replace = "" + current;
            for (let j = 0; j < this.rules.length; j++) {
                if (current == this.rules[j].a) {
                    replace = this.rules[j].b;
                    break;
                }
            }
            nextSentence += replace;
        }
        this.sentence = nextSentence;
    }

    show() {
        resetMatrix();
        translate(width / 2, height / 2);
        stroke(255);
        colorMode(HSB);
        this.len = width / 4 * pow(0.75, this.generation);
        for (let i = 0; i < this.sentence.length; i++) {
            stroke(360 * (i / this.sentence.length), 100, 100);
            let current = this.sentence.charAt(i);

            if (current == "F") {
                line(0, 0, 0, -this.len);
                translate(0, -this.len);
            } else if (current == "+") {
                rotate(this.angle);
            } else if (current == "-") {
                rotate(-this.angle);
            }
        }
    }
}
