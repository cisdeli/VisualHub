class dragonCurve {
    constructor(generations) {
        this.angle = HALF_PI;
        this.axiom = "FX";
        this.sentence = this.axiom;

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


        this.currentSegment = 0;
        this.scaleFactor = 0.992;
        this.zoomOutIndex = 0;
        this.generation = generations;
        for (let i = 0; i < generations; i++)
            this.generate();
    }

    generate() {
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
        return this.sentence;
    }

    show(num_segments) {
        resetMatrix();
        translate(width / 2, height / 3);
        colorMode(HSB);

        let len = width / 10 * pow(this.scaleFactor, this.zoomOutIndex);
        for (let i = 0; i <= this.currentSegment; i++) {
            stroke(360 * (i / this.sentence.length), 100, 100);
            let current = this.sentence.charAt(i);

            if (current == "F") {
                line(0, 0, 0, -len);
                translate(0, -len);
            } else if (current == "+") {
                rotate(this.angle);
            } else if (current == "-") {
                rotate(-this.angle);
            }
        }
        this.zoomOutIndex += 1.2;
        this.currentSegment += num_segments;
    }
}
