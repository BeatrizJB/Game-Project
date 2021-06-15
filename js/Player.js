class Player {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.width = 10;
    this.height = 100;
    this.color = color;
    this.score = 0;
  }

  draw() {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.width, this.height);
  }

  moveUp() {
    context.clearRect(this.x, this.y, this.width, this.height);
    if (this.y > 10) {
      this.y -= 10;
    }
  }

  moveDown() {
    context.clearRect(this.x, this.y, this.width, this.height);
    if (this.y + this.height < 390) {
      this.y += 10;
    }
  }

}
