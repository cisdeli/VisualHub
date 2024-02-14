const cellWidth = 5;
let startY = 0;

let currGen = [];

const ruleNumber = 30;
let ruleSet;

function setNewState(left, state, right) {
    const surroundings = '' + left + state + right;
    const value = 7 - parseInt(surroundings, 2);
    return parseInt(ruleSet[value]);
}

function setup() {
    createCanvas(1000, 2000);
    let cellNum = width / cellWidth;
    for (let i = 0; i < cellNum; i++) {
        currGen[i] = 0;
    }
    currGen[floor(cellNum / 2)] = 1;
    ruleSet = ruleNumber.toString(2).padStart(8, "0");

    background(255);
}

function draw() {
    const len = currGen.length
    for (let i = 0; i < len; i++) {
        const x = i * cellWidth;
        noStroke();
        fill(255 - currGen[i] * 255);
        square(x, startY, cellWidth);
    }
    startY += cellWidth;

    let nextGen = [];
    for (let i = 0; i < len; i++) {
        nextGen[i] = setNewState(currGen[(i - 1 + len) % len], currGen[i], currGen[(i + 1 + len) % len])
    }
    currGen = nextGen;
}
