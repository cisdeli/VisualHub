class Cell {
  constructor(padding) {
    this.padding = padding

    this.cell_size = 10
    this.cell_dead_color = '#6c1300'
    this.cell_live_color = '#ff5733'

  }

  getRect(col, row) {
    this.left = this.padding + (col * this.cell_size);
    this.top = this.padding + (row * this.cell_size);
    this.size = this.cell_size - 2;
    return [this.left, this.top, this.size]
  }

  show(state) {
    if (state == 1)
      fill(this.cell_live_color)
    else
      fill(this.cell_dead_color)
    rect(this.left, this.top, this.size, this.size);
  }

}
