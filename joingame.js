// Checks if Player1 and Player2 are taken, if not then gives thisPlayer one of those roles


let thisPlayer = 0
let Game

function startGame(name) {

  docRef.get()
  .then(function (doc) {
  if (doc && doc.exists) {
    Game = doc.data();
    joinGame(Game,name)
  }
})
}

function joinGame(inGame,name) {
 // console.log(inGame.player1.taken,'player1')
  //console.log(inGame.player2.taken,'player2')
  if (!inGame.player1.taken) {
    thisPlayer = 1
    inGame.player1.taken = 1
    //set it to taken and this player is player 1
    inGame.player1.name = name//prompt('Whats your name: ')
    updateDatabase2(inGame)
  }
  else if (!inGame.player2.taken) {
    thisPlayer = 2
    inGame.player2.taken = 1
    //set it to taken and this player is player 2
    inGame.player2.name = name//prompt('Whats your name: ')
    updateDatabase2(inGame)
  }
  else {
    alert('Sorry the game is full')
  }
}

function updateDatabase2(inGame) {
    docRef.set({
    player1 : inGame.player1,
    player2 : inGame.player2
  })
  .then(function() {
      Game = inGame; 
      makePacman();
    })
  .catch(function (error) {console.log(error)}) 
}

//startGame()
/*
Object
player1: {taken: 0, position: Array(2), score: 0, status: 1}
player2:
position: (2) [400, 400]
score: 0
status: 1
taken: 0
__proto__: Object
__proto__: Object */