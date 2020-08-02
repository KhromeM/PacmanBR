/* global collideRectRect,firebase, createButton, createElement, createInput, constrain, dist, angleMode, DEGREES, arc, clear, createCanvas, colorMode, HSB, width, height, random, background, fill, color, random,
          rect, rectMode, ellipse, lerpColor, stroke, image, loadImage, collideCircleCircle, collideRectCircle, text, tint, noTint
          map, mouseX, mouseY, pmouseX, pmouseY, round, strokeWeight, sqrt, line, mouseIsPressed, noFill, windowWidth, windowHeight, noStroke, 
          key, keyCode, CENTER, PI, HALF_PI, UP_ARROW, LEFT_ARROW, RIGHT_ARROW, DOWN_ARROW, textSize */

console.log('maps imported')
            
class Map1{
  
  constructor(){
    this.parts = [];
    this.dots = [];
  }
  
   makeMap1(){
    this.makeBorder();
    // (x, y, width, height)
    this.parts.push(new Part(width/2-10,0, 20, height/2*0.7));
    this.parts.push(new Part(0,height/2-10, width/2*0.7, 20));
    this.parts.push(new Part(width/2-10,height-(height/2*0.7),20,height/2*0.7));
    this.parts.push(new Part(width-(width/2*0.7),height/2-10,width/2*0.7,20));
        
    // quad 1
    this.parts.push(new Part(width/9,height/7,10,height/5));
    this.parts.push(new Part(width/9,height/7,width/5,10));
    this.parts.push(new Part(width/9,height/7 + height/5, width/5,10));
    
    this.parts.push(new Part(width/4, height/4, width/8, 10))
    
    // quad 2
    this.parts.push(new Part(width*6/7.3-width/5,height/8,width/5,10));
    this.parts.push(new Part(width*6/7.3-width/5,height/8,10,height/5));
    this.parts.push(new Part(width*6/7.3,height/8,10,height/5));
    
    this.parts.push(new Part(width/1.385,height/4,10,height/8))
    
    // quad 3
    this.parts.push(new Part(width/6.1+width/5-20,height/5.9 +height/2,10,height/5));
    this.parts.push(new Part(width/7,height/6+height/2,width/5,10));
    this.parts.push(new Part(width/7,height/6.5+ height/5+height/2, width/5,10));
    
    this.parts.push(new Part(width/8, height/1.31, width/8, 10))
    
    // quad 4
    this.parts.push(new Part(width*6/7.3-width/5,height/8+height/1.75+height/5-20,width/5,10));
    this.parts.push(new Part(width*6/7.3-width/5,height/8+height/1.82,10,height/5));
    this.parts.push(new Part(width*6/7.3,height/8+height/1.815,10,height/5));
    
    this.parts.push(new Part(width/1.385,height/1.5,10,height/8))
     
    for(let i = 0; i < 29; i++){
      this.dots.push(new Dot(40,45+i*6,3));
    }
     
     for(let i = 0; i < 29; i++){
       this.dots.push(new Dot(40+i*6,45,3));
     }
     
     for(let i = 0; i < 70; i++){
       this.dots.push(new Dot(210,45+i*6,3));
     }
     for(let i = 0; i < 68; i++){
       this.dots.push(new Dot(45+i*6,215,3));
     }
     
     for(let i = 0; i < 68; i++){
       this.dots.push(new Dot(45+i*6,294,3));
     }
     
     for(let i = 0; i < 70; i++){
       this.dots.push(new Dot(285,45+i*6,3));
     }
     
     for(let i = 0; i < 29; i++){
       this.dots.push(new Dot(285+i*6,45,3));
     }
     
     for(let i = 0; i < 29; i++){
       this.dots.push(new Dot(453,45+i*6,3));
     }
     
     for(let i = 0; i < 29; i++){
      this.dots.push(new Dot(45,294+i*6,3));
    }
     
     for(let i = 0; i < 28; i++){
       this.dots.push(new Dot(45+i*6,462,3))
     }
     
     for(let i = 0; i < 29; i++){
       this.dots.push(new Dot(285+i*6,462,3))
     }
     
     for(let i = 0; i < 29; i++){
       this.dots.push(new Dot(453,294+i*6,3));
     }
     
  }
  
  makeBorder(){
    this.parts.push(new Part(0,0,20,height));
    this.parts.push(new Part(0,0,width,20));
    this.parts.push(new Part(0,height-20,width,20));
    this.parts.push(new Part(width-20,0,20,height));
  }
  
  display(){
    for(let i = 0; i < this.parts.length; i++){
      this.parts[i].display();
    }
    for(let i = 0; i < this.dots.length; i++){
      this.dots[i].display();
    }
  }
  
  checkCollision(x,y,w,h){
    for(let i = 0; i < this.parts.length; i++){
      if(this.parts[i].checkCollision(x,y,w,h)) return true;
    }
    return false;
  }
  
  
  makeMatrix(gridSize,ghostSize,pacman){
    let valid = [];
    for(let i = 0; i < width/gridSize; i++){
      valid.push([]);
    }
    for(let i = 0; i < valid.length; i++){
      for(let j = 0; j < height/gridSize; j++){
        //check if the pacman is positioned at the top left corner of the
        //grid if it will collide with a wall
        let collide = this.checkCollision(i*gridSize,j*gridSize,ghostSize,ghostSize);
        
        if(collide){
          valid[i].push(1); //ghost cant move to thsi position
        }
        // else if(collideRectRect(pacman.position[0],pacman.position[1],35,35,i*gridSize,j*gridSize,ghostSize,ghostSize)){
        //   valid[i].push(2);  //ghost touches pacman
        // }
        else{
          valid[i].push(0);  //valid position
        }
        
      }
    }
    
    let x = (pacman.position[0]-pacman.position[0]%gridSize)/gridSize+1;
    let y = (pacman.position[1]-pacman.position[1]%gridSize)/gridSize+1;
    valid[x][y] = 2;
    return valid;
    
  }
  
  checkDotCollision(pacman){
    for(let i = 0; i < this.dots.length; i++){
      if(this.dots[i].checkCollision(pacman.position[0],pacman.position[1],20,20)){
        pacman.score++;
        this.dots.splice(i,1);
        i--;
      }
    }
  }
  
}

class Dot{
  constructor(x,y,r){
    this.x=x;
    this.y=y;
    this.r=r;
  }
  
  display(){
    fill(150);
    ellipse(this.x,this.y,this.r,this.r);
  }
  
  checkCollision(x,y,w,h){
    return collideRectCircle(x,y,w,h,this.x,this.y,this.r);
  }
}


class Part{
  
  constructor(x,y,w,h){
    this.x=x;
    this.y=y;
    this.w=w;
    this.h=h;
  }
  
  display(){
    fill(0);
    rect(this.x,this.y,this.w,this.h);
  }
  
  checkCollision(x,y,w,h){
    return collideRectRect(x,y,w,h,this.x,this.y,this.w,this.h);
  }
  
}