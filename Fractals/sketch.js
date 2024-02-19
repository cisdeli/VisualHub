function setup() {
    createCanvas(900, 700);
    fern = new Fern(0, 0, 60, "B");
    // dc = new dragonCurve();
}

function draw() {
    background(0);
    fern.show();
    if (!fern.done)
        fern.get_points(1000);

    // if (dc.generation < 15 && frameCount % 50 == 0) {
    //     dc.generate();
    // }
    // dc.show();
}

