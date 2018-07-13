function Ball() {
	this.x = width / 2;
	this.y = height / 2;
	this.radius = 6;
	this.speed = 5;
	this.speedY = 2;
  this.rally = 0;

  // Shows the Ball
	this.show = () => {
		fill(255);
		ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
	};

  // Start the Ball moving along both axes - Default will start from the left.
	this.startMove = () => {
		this.x -= this.speed;
		this.y -= this.speedY;
	};


	// Checks for collision of the ball at the Top and Bottom of screen. If detected it will change the Y axis
	this.collide = () => {
		if (ball.y <= 0) {
			this.speedY = -2;
		}
		if (ball.y >= 480) {
			this.speedY = +2;
		}
	};


  // Check for collision with the paddles. If detected it will reverse the direction of the ball. 
  // Also it will add one to the rally total.
  this.collideLeft = paddle => {
    if (ball.x === paddle.x + 10 && (ball.y >= paddle.y && ball.y <= paddle.y + 80)) {
      this.speed = -5;
      this.rally = this.rally + 1;
    }
  };

  this.collideRight = paddle => {
    if (ball.x === paddle.x - 10 && (ball.y >= paddle.y && ball.y <= paddle.y + 80)) {
      this.speed = +5;
      this.rally = this.rally + 1;
    }
  };

  // Checks which side the ball left the screen and awards the win to the opposing player.
	this.score = () => {
		fill(255);
		if (ball.x <= 0) {
			textAlign(CENTER);
      text('Player 2 Wins', width / 2, height / 2);
      text('Press Spacebar to start over', width / 2, height / 2 + 20)
		}
		if (ball.x >= 600) {
			textAlign(CENTER);
      text('Player 1 Wins', width / 2, height / 2);
      text('Press Spacebar to start over', width / 2, height / 2 + 20)
		}
	};

}
