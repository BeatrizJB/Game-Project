const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
let ball;
let player1;
let player2; 

function startGame() {
  ball = new Ball();
  player1 = new Player(20, 200, "red");
  player2 = new Player(665, 300, "red");
  updateCanvas();
}


function defenseDetect(player, ball) {
  // returns true or false
  player.top = player.y;
  player.right = player.x + player.width;
  player.bottom = player.y + player.height;
  player.left = player.x;
  ball.top = ball.y - ball.radius;
  ball.right = ball.x + ball.radius;
  ball.bottom = ball.y + ball.radius;
  ball.left = ball.x - ball.radius;
  return ball.left < player.right && ball.top < player.bottom && ball.right > player.left && ball.bottom > player.top;
}

function updateCanvas() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  player1.draw();
  player2.draw(); 

  ball.draw();
  ballMovement();
  if (detectCollision()) {
  ball.vx *= -1;
    console.log('player got hit');
  }

  requestAnimationFrame(updateCanvas);

  let player = (ball.x < canvas.width / 2) ? player2 : player1;
  if (defenseDetect(player, ball)) {
    // play hitSound
    // default angle is 0deg in Radian
    let angle = 0;
    // if ball hit the top of paddle
    if (ball.y < (player.y + player.height / 2)) {
      // then -1 * Math.PI / 4 = -45deg
      angle = -1 * Math.PI / 4;
    } else if (ball.y > (player.y + player.height / 2)) {
      // if it hit the bottom of paddle
      // then angle will be Math.PI / 4 = 45deg
      angle = Math.PI / 4;
    }
    /* change velocity of ball according to on which paddle the ball hitted */
    ball.velocityX = (player === user ? 1 : -1) * ball.speed * Math.cos(angle);
    ball.velocityY = ball.speed * Math.sin(angle);
    // increase ball speed
    ball.speed += 0.2;
  }
}

function ballMovement() {
  ball.x += ball.vx;
  ball.y += ball.vy;
  if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
    ball.vy *= -1;
  }
  if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
    ball.vx *= -1;
  }
}


function detectCollision() {
  return !(
    player1.x > ball.x ||
    player1.x + player1.width < ball.x ||
    player1.y > ball.y ||
    player1.y + player1.height < ball.y
  );
}


startGame();


document.addEventListener("keydown", (keyboardEvent) => {
  player1.movePlayer1(keyboardEvent.key);
});

document.addEventListener("keydown", (keyboardEvent) => {
  player2.movePlayer2(keyboardEvent.key);
});