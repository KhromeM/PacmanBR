function getScores() {
  showScores([[Game.player1.name, Game.player1.score],[Game.player2.name,Game.player2.score]])
}


function showScores(arr) {
  textAlign(LEFT)
  fill('red')
  textSize(20)
  text(arr[0][0],5,20)
  text(arr[0][1],100,20)
  text(arr[1][0],5,60)
  text(arr[1][1],100,60)

}

function gameWon() {
  background('gold')
  fill('red')
  textAlign(CENTER)
  stroke(25)
  textSize(25)
  text('You Won!',250,200)
  text(`Score: ${thisPacman.score}`,250,250)
  noLoop()
}

function gameLost() {
  background('black')
  fill('white')
  textAlign(CENTER)
  stroke(25)
  textSize(25)
  text('You Lost',250,200)
  text(`Score: ${thisPacman.score}`,250,250)
  noLoop()
}