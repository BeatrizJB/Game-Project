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
    
    if (this.y > 15) {
      this.y -= 15;
    }
  }

  moveDown() {
    context.clearRect(this.x, this.y, this.width, this.height);
    if (this.y + this.height < 385) {
      this.y += 15;
    }
  }

}
