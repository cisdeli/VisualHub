class Grid {
  constructor(c_width, c_height, c_color) {
    this.padding = 50
    this.rows = 20
    this.columns = 20

    this.canvas_width = c_width
    this.canvas_height = c_height
    this.canvas_color = c_color

    this.matrix = []
    this.rects = []
  }

  init() {
    for (let col = 0; col < this.columns; col++) {
      this.matrix[col] = []
      this.rects[col] = []
      for (let row = 0; row < this.rows; row++) {
        this.matrix[col][row] = 0

        this.rects[col][row] = new Cell(this.padding)

      }
    }
  }

  show() {
    for (let col = 0; col < this.columns; col++) {
      for (let row = 0; row < this.rows; row++) {
        this.rects[col][row].getRect(col, row)
        this.rects[col][row].show(this.matrix[col][row])
      }
    }
  }

  showMatrix() {
    console.table(this.matrix)
  }

  setInitState() {
    for (let col = 0; col < this.columns; col++)
      for (let row = 0; row < this.rows; row++) {
        let rData = []
        rData = this.rects[col][row].getRect(col, row)
        if (mouseX > rData[0] && mouseX < rData[0] + rData[2] && mouseY > rData[1] && mouseY < rData[1] + rData[2]) {
          if (mouseIsPressed == true) {
            if (this.matrix[col][row] == 0) {
              this.matrix[col][row] = 1
            } else if (this.matrix[col][row] == 1) {
              this.matrix[col][row] = 0
            }
          }
        }
      }
  }

  isValidPos(i, j) {
    if (i < 0 || j < 0 || i > this.columns - 1 || j > this.rows - 1)
      return 0
    else
      return 1
  }

  checkAdjacent(arr, i, j) {
    var n_alive = 0
    if (this.isValidPos(i - 1, j - 1))
      if (arr[i - 1][j - 1] == 1)
        n_alive++

    if (this.isValidPos(i + 1, j + 1))
      if (arr[i + 1][j + 1] == 1)
        n_alive++

    if (this.isValidPos(i - 1, j + 1))
      if (arr[i - 1][j + 1] == 1)
        n_alive++

    if (this.isValidPos(i + 1, j - 1))
      if (arr[i + 1][j - 1] == 1)
        n_alive++

    if (this.isValidPos(i, j - 1))
      if (arr[i][j - 1] == 1)
        n_alive++

    if (this.isValidPos(i - 1, j))
      if (arr[i - 1][j] == 1)
        n_alive++

    if (this.isValidPos(i, j + 1))
      if (arr[i][j + 1] == 1)
        n_alive++

    if (this.isValidPos(i + 1, j))
      if (arr[i + 1][j] == 1)
        n_alive++

    return n_alive
  }

  nextGen() {
    /*
	  	Rule 1: 1 cell with 0 or 1 neighbors = 0
		Rule 2: 1 cell with 2 or 3 neighbors = 1
		Rule 3: 1 cell with 4 or + neighbors = 0
	  	Rule 4: 0 cell with   3    neighbors = 1
	  */
    var auxMatrix = new Array(this.columns);
    for (var i = 0; i < auxMatrix.length; i++) {
      auxMatrix[i] = new Array(this.rows);
    }

    for (let col = 0; col < this.columns; col++)
      for (let row = 0; row < this.rows; row++)
        auxMatrix[col][row] = 0


    for (let col = 0; col < this.columns; col++)
      for (let row = 0; row < this.rows; row++) {
        if (this.matrix[col][row] == 1) {
          let n_alive = 0
          n_alive = this.checkAdjacent(this.matrix, col, row)

          // Rule 1
          if (n_alive == 0 || n_alive == 1)
            auxMatrix[col][row] = 0

          // Rule 2
          if (n_alive == 2 || n_alive == 3)
            auxMatrix[col][row] = 1

          // Rule 3
          if (n_alive >= 4)
            auxMatrix[col][row] = 0

        } else if (this.matrix[col][row] == 0) {
          let n_alive = 0
          n_alive = this.checkAdjacent(this.matrix, col, row)

		  // Rule 4
          if (n_alive == 3)
            auxMatrix[col][row] = 1
        }
      }

    this.matrix = auxMatrix
  }
}
