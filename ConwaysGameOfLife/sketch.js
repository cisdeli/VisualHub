let gameStart = false
let genNum = 0

function setup() {
  createCanvas(windowWidth, windowHeight)
  grid = new Grid(windowWidth, windowHeight, '0')
  grid.init()
  // grid.showMatrix()
}

function drawGameInfo() {
  push()
  fill(255, 255, 255)
  textFont('Helvetica')
  textAlign(CENTER, CENTER)
  noStroke()
  textSize(20)
  text('Generation number: ' + genNum, 500, 20)
  text('Game State: ' + (gameStart ? 'started' : 'set initial conditions'), 150, 20)
  pop()
}

function keyPressed() {
  if (keyCode === RETURN)
    gameStart = true
  if (keyCode === RIGHT_ARROW && gameStart) {
    genNum++
    grid.nextGen()
  }
}

function draw() {
  background('#000')

  drawGameInfo()
  grid.show()
  if (!gameStart)
    grid.setInitState()

}
