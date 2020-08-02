/* global firebase, createButton, createElement, createInput, constrain, dist, angleMode, DEGREES, arc, clear, createCanvas, colorMode, HSB, width, height, random, background, fill, color, random,
          rect, rectMode, ellipse, lerpColor, stroke, image, loadImage, collideCircleCircle, collideRectCircle, text, tint, noTint
          map, mouseX, mouseY, pmouseX, pmouseY, round, strokeWeight, sqrt, line, mouseIsPressed, noFill, windowWidth, windowHeight, noStroke, 
          key, keyCode, CENTER, PI, HALF_PI, UP_ARROW, LEFT_ARROW, RIGHT_ARROW, DOWN_ARROW, textSize */

let img;
let map;
let ghosts = [];
let once = true;
// lwc: screen string variable to determine which screen the user is on

let pacman1Image,
  redGhostImage,
  blueGhostImage,
  pinkGhostImage,
  button1,
  button2,
  button3,
  button4;

let startScreen = true;

function setup() {
  img = loadImage(
    "https://cdn.glitch.com/2e24f9a2-9e1f-41a0-a137-0eff91ea8965%2Fimage.png?v=1596125222994"
  );
  let canv= createCanvas(500, 500);
  colorMode(HSB, 360, 100, 100);
  background(50, 100, 90);
  if ((startscreen = true)) {
    pacman1Image = loadImage(
      "https://cdn.glitch.com/45f2c844-a5a7-4cce-8102-cf2f89eb2d1a%2F1200px-Pac_Man.svg.png?v=1596063371675"
    );
    redGhostImage = loadImage(
      "https://cdn.glitch.com/45f2c844-a5a7-4cce-8102-cf2f89eb2d1a%2Fpmr.png?v=1596063256424"
    );
    blueGhostImage = loadImage(
      "https://cdn.glitch.com/45f2c844-a5a7-4cce-8102-cf2f89eb2d1a%2Funnamed.png?v=1596063893315"
    );
    pinkGhostImage = loadImage(
      "https://cdn.glitch.com/45f2c844-a5a7-4cce-8102-cf2f89eb2d1a%2FPacman%202.png?v=1596063953226"
    );
  }
  message = createElement('h2', 'Enter your Username: ');
  message.position(140,185);
  input = createInput();
  input.position(125, 250);

  button = createButton('Join Game');
  button.position(input.x + input.width, 250);
  button.mousePressed(function() {
    startScreen = false
    startGame(input.value())
    button.hide()
    input.hide()
    message.hide()
  })

  // lwc: Relevant setup code from join-game-page.js moved here

  // lwc: screen = "start";
}

//-----------------------------------------------------------------------------------------------------------

function draw() {
  
  // lwc: Based on the "screen" variable, draw the relevant screen content

  // if (screen === "start") {
  //   drawStartScreen();
  // } else if (screen === "choose multiplayer") {
  //   Code to draw the choose multiplayer screen goes here...
  // } else if (screen === "game") {
  //   Move the code below to here...
  // }

  //console.log(mouseX,mouseY)
  
  if (startScreen) {
    drawStart();
  } else {
    background(200);
    if (thisPacman) {
      if (once) doOnce();
      map.display();
      //let collide = map.checkCollision(ghost.getNextX(),ghost.getNextY(),ghost.getWidth(),ghost.getHeight());
      // if(!collide){
      //   ghost.move();
      // }
      // else{
      //
      //   //ghost.setDirection(3);
      // }
      for (let i = 0; i < ghosts.length; i++) {
        if (thisPacman.status === 0) {
          ghosts[i].path(null);
        } else ghosts[i].path(thisPacman);
        ghosts[i].move();
        if (
          collideRectRect(
            ghosts[i].x+2,
            ghosts[i].y+2,
            ghosts[i].w-4,
            ghosts[i].h-4,
            thisPacman.position[0],
            thisPacman.position[1],
            20,
            20
          )
        ) {
          thisPacman.status = 0;
          console.log("here");
        }
        ghosts[i].display();
      }

      thisPacman.move();
      map.checkDotCollision(thisPacman);
      thisPacman.checkStatus();
      drawOther();

      if (updateRate % 5 == 0) {
        updatePacman();
      }
      getScores();
      updateRate++;
      BRcheck();
     // checkIfDead()
      thisPacman.checkStatus();
    }
  }
}

function keyPressed() {
  if (thisPacman) thisPacman.setVelocity();
}

function doOnce() {
  map = new Map1();
  map.makeMap1();
  let matrix = map.makeMatrix(10, 30, thisPacman);
  // for(let i = 0; i < matrix.length; i++){
  //   let s = "";
  //   for(let j = 0; j < matrix[0].length; j++){
  //     s+=matrix[i][j]+" "
  //   }
  //   console.log(s+"\n");
  // }

  let ghostImg = loadImage(
    "https://cdn.glitch.com/2e24f9a2-9e1f-41a0-a137-0eff91ea8965%2FScreen%20Shot%202020-07-27%20at%203.47.25%20PM.png?v=1595890087970"
  );
  ghosts.push(new Ghost(ghostImg,map,400,450,2,0,20,20));
   //ghosts.push(new Ghost(ghostImg,map,100,450,2,0,20,20));

  once = false;
}




drawStart = function() {
  //inserting all the text
  background(50, 100, 90);
  textSize(25);
  text("PACMAN BATTLE ROYALE", 250, height / 4);
  textSize(18);
  text("Play with your friends!", 250, 175);
  
  // drawing all the images
  image(pacman1Image, 70, 380, 50, 50);
  image(redGhostImage, 140, 380, 50, 50);
  image(blueGhostImage, 210, 380, 50, 50);
  image(pinkGhostImage, 280, 380, 50, 50);
  image(pacman1Image, 350, 380, 50, 50);

  

  textAlign(CENTER);
  textSize(50);
  
}

