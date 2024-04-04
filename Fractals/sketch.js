function setup() {
    createCanvas(450, 600);
    dc = new dragonCurve(12);
    // fern = new Fern(0, 0, 60, "B");
}

let segNum = 20;
let frameCounter = 0;
function draw() {
    background(0);
    dc.show(segNum);
    if (dc.currentSegment >= dc.sentence.length) {
        noLoop();
    }
    if (frameCounter > 150) {
        segNum++;
    }
    frameCounter++;

    // fern.show();
    // if (!fern.done)
    //     fern.get_points(1000);

}

