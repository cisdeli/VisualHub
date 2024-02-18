function setup() {
    createCanvas(900, 700);
    f2 = new Fern(0, 0, 60, "B");
    points = f2.get_points(100000);
}

let i = 0; 
function draw() {
    translate(width / 2, 10);
    for (let j = 0; j < 20; j++) { 
        if (i < points.length) {
            point(points[i].x, points[i].y);
            i++;
        }
    }
}

