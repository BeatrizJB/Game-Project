class Player {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.width = 15;
        this.height = 120;
        this.color = color;
    }

    draw() {
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.width, this.height);
    }

    movePlayer2(key) {
        context.clearRect(this.x, this.y, this.width, this.height);
        switch (key) {
          case "ArrowUp":
            if (this.y > 10) {
              this.y -= 10;
            }
            break;
          case "ArrowDown":
            if (this.y < 370) {
              this.y += 10;
            }
            break;
        }
      }

    movePlayer1(key) {
        context.clearRect(this.x, this.y, this.width, this.height);
        switch (key) {
          case "q":
            if (this.y > 10) {
              this.y -= 10;
            }
            break;
          case "a":
            if (this.y < 370) {
              this.y += 10;
            }
            break;
        }
      }
}

