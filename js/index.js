const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const hitSound = new Audio('../sounds/hitSound.wav');

document.querySelector(".game-board").style.display = "none";
document.querySelector(".intro").style.display = "block";

document.querySelector(".start__button").onclick = () => {
  document.querySelector(".intro").style.display = "none";
  document.querySelector(".game-board").style.display = "block";
  startGame();
};

// querySelector (".class name that you assigned to the element" or #"id name that you assigned to the element")
// getElementById ("id name that you assigned to the element")
// getElementByClassName ("class name that you assigned to the element")

let ball;
let player1;
let player2;

let currentGame;


function startGame() {
  ball = new Ball();
  player1 = new Player(20, 150, "white");
  player2 = new Player(770, 150, "white");
  updateCanvas();
}

function drawNet(){
  context.fillStyle = "white";
  context.fillRect(395, 0, 5, 500);
}

function drawScore(x, y, score){
  context.fillStyle = "white";
  context.font = "35px sans-serif";
  context.fillText(score, x, y);
}


function reset() { 

  ball.x = 350;
  ball.y = 250;

  ball.vx = -ball.vx;
  ball.vy = -ball.vy;
  
}


function updateCanvas() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  
  drawNet();

  player1.draw();
  player2.draw();
  
  drawScore(200, 83, player1.score);
  drawScore(600, 83, player2.score);
  
  
  ball.draw();

  setTimeout(() =>{
        ballMovement(); //recursive function
    }, 1000);

  //ballMovement();

  if (detectPlayer1Collision()) {
    ball.vx *= -1;
  }
  if (ball.x + ball.radius === canvas.width){
    player1.score += 1;
    reset();
  }

  if (detectPlayer2Collision()) {
    ball.vx *= -1;
  }
  if (ball.x - ball.radius === 0){
    player2.score+= 1;
    reset();
  }

 requestAnimationFrame(updateCanvas);

}


function ballMovement() {
  ball.x += ball.vx;
  ball.y += ball.vy;
  if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
    ball.vy *= -1;
  }
  if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
    ball.vx *= -1;
  }

}


function detectPlayer1Collision() {
  hitSound.play();
  return ball.y + ball.vy > player1.y && 
        ball.x + ball.vx > player1.x &&
        ball.x - ball.radius < player1.x + player1.width &&
        ball.y + ball.vy < player1.y + player1.height
}

function detectPlayer2Collision() {
  hitSound.play();
  return ball.y + ball.vy > player2.y && 
        ball.x + ball.radius > player2.x &&
        ball.x + ball.vx < player2.x + player2.width &&
        ball.y + ball.vy < player2.y + player2.height
}

startGame();

document.addEventListener("keydown", (keyboardEvent) => {
  switch(keyboardEvent.key) {
    case "q":
      player1.moveUp();
      if (player1.y > 8) {
        player1.y -= 8;
  } 
    break;
    case "a":
      player1.moveDown();
      if (player1.y < 290) {
        player1.y += 8;
  }
    break;

  }
});


document.addEventListener("keydown", (keyboardEvent) => {
  switch(keyboardEvent.key) {
    case "ArrowUp":
      player2.moveUp();
      if (player2.y > 8) {
        player2.y -= 8;
  } 
    break;
    case "ArrowDown":
      player2.moveDown();
      if (player2.y < 290) {
        player2.y += 8;
  }
    break;

  }
});



function updateTime(){
  var today = new Date();
  var hours24 = today.getHours();
  var hours12;
  var minutes = today.getMinutes();
  var suffix = '';

  if (hours24 >= 12) {
    suffix = " PM";
    hours12 = hours24 % 12;
  } else {
    suffix = " AM";
    hours12 = hours24;
  }
  
  if (minutes % 10 == 0) {
    //minutes = minutes + "0";
  } else if (minutes < 10) {
    minutes = "0" + minutes;
  }

  var time = hours12 + ":" + minutes + suffix;

  var timeBox = document.querySelector(".start__time-text");

  timeBox.innerHTML = time;
}

setInterval(updateTime, 1000);








    

