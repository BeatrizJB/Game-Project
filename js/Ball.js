class Ball {
  constructor() {
    this.x = 395;
    this.y = 250;
<<<<<<< HEAD
    this.vx = 5;
    this.vy = 5;
    this.radius = 10;
=======
    this.vx = 4;
    this.vy = 4;
    this.radius = 8;
>>>>>>> 0221b43a168c5578c51b3a42b290828e43236723
    this.color = "white";
  }

  draw() {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    context.fillStyle = this.color;
    context.fill();
  }
}
