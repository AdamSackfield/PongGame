function Paddle(x) {
  this.x = x
  this.y = height / 2
  this.width = 10
  this.height = 80

  // Show the paddle
  this.show = () => {
    fill(255)
    rect(this.x, this.y, this.width, this.height)
  }

  this.moveUp = () => {
    if(this.y >= 5) {
      this.y -= 5
    }
  }

  this.moveDown = () => {
    if(this.y + 80 <= height - 5) {
      this.y += 5
    }
  }
}