/* global loadImage, image, createCanvas, color, textSize, height, width, createButton, background, colorMode, HSB, random, width, height,
   ellipse, mouseX, mouseY, text, ellipseMode, CENTER, collideCircleCircle, */

let pacman1Image,
  redGhostImage,
  blueGhostImage,
  pinkGhostImage,
  button1,
  button2,
  button3,
  button4,
  startscreen;

function Notsetup() {
 
  colorMode(HSB, 360, 100, 100);
  background(50, 100, 90);
  if ((startscreen = true)) {
    // lwc: This code should go in the drawStartScreen function
    textSize(25);
    text("PACMAN BATTLE ROYALE", 50, height / 4);
    textSize(18);

    // lwc: This can stay in setup
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
}

// lwc: Rename to drawStartScreen() (the actual draw function is in script.js)
// lwc: Include join-game-page.js in index.html, before script.js


