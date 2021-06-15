const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

let ball;
let player1;
let player2;



function startGame() {
  ball = new Ball();
  player1 = new Player(20, 200, "white");
  player2 = new Player(665, 300, "white");
  updateCanvas();
}

function drawNet(){
  context.fillStyle = "white";
  context.fillRect(350, 0, 5, 500);
}

function drawScore(x, y, score){
  context.fillStyle = "white";
  context.font = "35px sans-serif";
  context.fillText(score, x, y);
}

function updateCanvas() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  player1.draw();
  player2.draw();
  drawNet();
  drawScore(175, 83, player1.score);
  drawScore(525, 83, player2.score);

  ball.draw();
  ballMovement();
  if (detectPlayer1Collision()) {
    ball.vx *= -1;
  }

  if (ball.x + ball.radius >= canvas.width){
    player1.score += 1;
  }

  if (detectPlayer2Collision()) {
    ball.vx *= -1;
  }

    if (ball.x - ball.radius <= 0){
    player2.score += 1;
  }


  requestAnimationFrame(updateCanvas);

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

function detectPlayer1Collision() {
  return ball.y + ball.vy > player1.y && 
        ball.x + ball.vx > player1.x &&
        ball.x + ball.vx < player1.x + player1.width &&
        ball.y + ball.vy < player1.y + player1.height
}

function detectPlayer2Collision() {
  return ball.y + ball.vy > player2.y && 
        ball.x + ball.vx > player2.x &&
        ball.x + ball.vx < player2.x + player2.width &&
        ball.y + ball.vy < player2.y + player2.height
}

startGame();

document.addEventListener("keydown", (keyboardEvent) => {
  switch(keyboardEvent.key) {
    case "q":
      player1.moveUp();
    break;
    case "a":
      player1.moveDown();
    break;

  }
});

document.addEventListener("keydown", (keyboardEvent) => {
  switch(keyboardEvent.key) {
    case "ArrowUp":
      player2.moveUp();
    break;
    case "ArrowDown":
      player2.moveDown();
    break;

  }
});





    

