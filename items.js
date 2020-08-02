console.log('items imported')
// red dots = power up
// white dots = +1 point


class Item {
  
  constructor(x,y,type) { //Items must be draw from the center for the collide() to work
    this.x = x
    this.y = y
    this.type = type //the type of the item, dots (pacman eats) or powerups
    this.status = 1 //if status is 1 its not eaten, if 0 then eaten
   // (this.type === 0) ? this.img = 
  }
  
  draw() { //draws the item
    if (this.status == 0) return false
    if (this.type == 'powerup') {
     // circleMode(CENTER)
      fill('red')
      circle(this.x,this.y,5)
    }
  }
  
  eaten() { 
   if (distCalc(this.x,this.y,thisPacman.position[0],thisPacman.position[1]) < 5) {
     this.status = 0
     this.action()
   }
    
  }
  
  action() { //depending on the item, the pacman that ate either gets +1 score or powered up
    if (this.type === 'powerup') {
      //go into power-up mode
      thisPacman.status = 2
    }
    
    if (this.type === 'dot') {
      thisPacman.score ++
    }
  }
 
  
  }
  
let ppowerUps = [[250,250]] 
let pdots = []  

let items = []

for (let i of pdots) {
  items.push(new Item(i[0],i[1],'dot'))
}

for (let i of ppowerUps) {
  items.push(new Item(i[0],i[1],'powerup'))
}

function showItems() {
  for (let i of items) {
    i.draw()
    i.eaten()
  }
}