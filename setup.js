
let thisPacman
let otherPacman
let updateRate = 0 //every 12 frames

function makePacman() {
  if (thisPlayer != 0) {
    //create a pacman for the player
    (thisPlayer == 1) ? position = [100,100] : position = [350,85] //player 1 starts at the top left, player two at the top right
    thisPacman =  new Pacman(position[0], position[1])
  }  
}

function updatePacman() {
  //thisPacman.position = [434,2424544]
  if (thisPlayer == 1) {
    checkIfDead()
    Game.player1.position = thisPacman.position
    Game.player1.status = thisPacman.status
    Game.player1.score = thisPacman.score
  }
  else if (thisPlayer == 2) {
    Game.player2.position = thisPacman.position
    Game.player2.status = thisPacman.status
    Game.player2.score = thisPacman.score
  }
  updateDatabase(Game)
}


function updateDatabase(inGame) {
  if (thisPlayer == 1) {
    docRef.update({
    player1 : inGame.player1
  })
  .then(function() {
    })
  .catch(function (error) {console.log(error)}) 
    } 
  else if (thisPlayer == 2)  {
  
    docRef.update({
    player2 : inGame.player2
  })
  .then(function() {
    })
  .catch(function (error) {console.log(error)}) }
}



function drawOther() {
  if (thisPlayer==1) {
    let p = Game.player2.position
    image(img,p[0],p[1],20,20)
  }
  else if (thisPlayer==2) {
     let p = Game.player1.position
    image(img,p[0],p[1],20,20)
  }
}


function checkIfDead() {
  if (thisPlayer == 1) {
    if (Game.player1.status == 0) {
      gameLost()
    }
  }
  if (thisPlayer == 2) {
    if (Game.player2.status == 0) {
      gameLost()
    }
  }
}


function thisPerson() {
  if (thisPlayer == 1) return Game.player1
  if (thisPlayer == 2) return Game.player2
}

getUpdates = function() {
  docRef.onSnapshot(function (doc) {
    if (doc && doc.exists) {
    Game = doc.data();
    }
  })
} 

getUpdates()