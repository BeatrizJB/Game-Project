class Ball {
  constructor() {
    this.x = 300;
    this.y = 250;
    this.vx = 5;
    this.vy = 5;
    this.radius = 10;
    this.color = "white";
    this.speed = 7;
  }

  draw() {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    context.fillStyle = this.color;
    context.fill();
  }
}
