class Ball {
  constructor() {
    this.x = 100;
    this.y = 100;
    this.vx = 15;
    this.vy = 10;
    this.radius = 25;
    this.color = "purple";
  }

  draw() {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    context.fillStyle = this.color;
    context.fill();
  }
}
