let p1;
let p2;
let ball;
let p1Score;
let p2Score;
let rally;

function setup() {
	createCanvas(600, 480);
	reset()
}

// Initializes Game and then starts it.
function draw() {
  initGame()
  startGame()
}

// Initial set up. Also used for start a new game
function reset() {
  p1 = new Paddle(10);
  p2 = new Paddle(width - 20);
  ball = new Ball()
  ball.p1Score = 0
  ball.p2Score = 0
}

// Key Press Listener. Used to move paddles and also reset the game
// Codes: 87 = 'w', 83 = 's', 32 = Spacebar
function keyPressed() {
	if (keyIsDown(UP_ARROW)) {
		p1.moveUp();
	}
	if (keyIsDown(DOWN_ARROW)) {
		p1.moveDown();
	}
	if (keyIsDown(87)) {
		p2.moveUp();
	}
	if (keyIsDown(83)) {
		p2.moveDown();
  }
  if (keyCode === 32) {
    reset()
  }
}

// Initialize game function - Creates background, shows paddles and ball. Displays text.
function initGame() {
  background(0);
  p1.show();
  p2.show();
  ball.show()
  text('Player One', 60, 20)
  text('Player Two', width - 60, 20)
  text('Rally: ' + ball.rally, width / 2, 20)
}

// Start all game functions, ball movement, keyPressed listener, collision listeners.
function startGame() {
  ball.startMove()  
  keyPressed();
  ball.collideLeft(p1)
  ball.collideRight(p2)
  ball.collide()
  ball.score()
}


