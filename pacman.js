

// The Pacman class is constucted with an image (of the character), and the x and y cordinates
class Pacman {
	constructor(x,y) {
    this.right= loadImage('https://cdn.glitch.com/2e24f9a2-9e1f-41a0-a137-0eff91ea8965%2Fpacman35x35.png?v=1595886474021');
    this.left= loadImage('https://cdn.glitch.com/2e24f9a2-9e1f-41a0-a137-0eff91ea8965%2Fleft.png?v=1595890535749')
    this.up= loadImage('https://cdn.glitch.com/2e24f9a2-9e1f-41a0-a137-0eff91ea8965%2Fup.png?v=1595890540741')
    this.down= loadImage('https://cdn.glitch.com/2e24f9a2-9e1f-41a0-a137-0eff91ea8965%2Fdown.png?v=1595890532134')
    // we loaded in  4 images so we can show different oreintations of pacman when he is moving left right up and down
    this.img = this.right //starts out facing right
		this.position = [x,y] //position is an array that stores pacman's x and y coordinates
		this.status = 2 //status 1 means allive, staus 2 means he can eat other pacmen and status 0 means he is dead
		this.velocity = 0 
    this.index = 0 // this is used for setVelocity() and move()
    this.score = 0 //the score of this pacman
    this.draw() //draws pacman


	}
  
	draw() { //draws the pacman 
		image(this.img,this.position[0],this.position[1],20,20)
	}

	setVelocity() { //setVelocity is called by keyPressed(), so every time a key is pressed pacman's velocity is set
		if (keyCode === 87) {
			this.velocity = -1
			this.index = 1
      this.img = this.up
		}
		else if (keyCode === 83 ){
			this.velocity = 1
			this.index = 1
      this.img = this.down
		}
		else if (keyCode === 65) {
			this.velocity = -1
			this.index = 0
      this.img = this.left
		}
		else if (keyCode === 68) {
			this.velocity = 1
			this.index = 0
      this.img = this.right
		}
    else if (keyCode === 32) {
      this.velocity = 0
    }
    
	}

	checkStatus() { //checks if pacman is dead, if dead then the game is over for that pacman
		if (!this.status) {
			gameLost()

		}
	}
/* */
  
	move(){ // This is called constantly so pacman is always moving
    this.position[this.index] += this.velocity * 3
    if (map.checkCollision(this.position[0],this.position[1],20,20))
      {  
        this.position[this.index] -= this.velocity * 6
        this.velocity = 0
      
      }
    
		this.draw()
		
    

	}
  
  /*
  checkPlayerCollision() { //this checks if pacman has collided into another pacman, if it did then it checks if its in powered up mode, if it is and the other pacman isnt, then the other pacman's status is set to dead
    let players = [] //players will be a list of the pacmans
    for (let i of players) {
      if (dist(this.position[0],this.position[1],i.position[0],i.position[1]) < 3) {
        if (this.status === 2 && i.status !== 2) {
          i.status = 0
          this.score += 5
        }
      }
    }
  } */

}