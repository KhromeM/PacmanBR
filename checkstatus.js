function BRcheck() {
//  console.log(Math.floor(distCalc(Game.player1.position,Game.player2.position)))
  let otherScore 
  (thisPlayer==1)? otherScore=Game.player2.score : otherScore=Game.player1.score
  if (Math.floor(distCalc(Game.player1.position,Game.player2.position))<=15) {
    if(thisPacman.score > otherScore)  { 
      if(thisPlayer==1) {
         Game.player2.status = 0
         docRef.update({
            player2 : Game.player2
       })
        
      } else {
        Game.player1.status = 0
        docRef.update({
            player1 : Game.player1
       })
      }
          
      console.log('won')
      gameWon()
    }
  else if (thisPacman.score < otherScore) {
    gameLost()
  }
  }
}


function distCalc(array,array2) {
   return((array2[0]-array[0])**2 + (array2[1]-array[1])**2)**.5
}