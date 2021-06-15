class Ball {
  constructor() {
    this.x = 350;
    this.y = 250;
    this.vx = 2;
    this.vy = 2;
    this.radius = 15;
    this.color = "white";
  }

  draw() {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    context.fillStyle = this.color;
    context.fill();
  }
}
