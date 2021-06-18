class Player {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.width = 10;
    this.color = color;
    this.score = 0;
  }

  draw(height) {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.width, height);
  }

  moveUp() {
     if (this.y >= 20) {
      this.y -= 20;
    }
  }

  moveDown() {
     if (this.y + this.height <= 390) {
      this.y += 10;
    }
  }

}
