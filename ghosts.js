/* global abs,firebase, createButton, createElement, createInput, constrain, dist, angleMode, DEGREES, arc, clear, createCanvas, colorMode, HSB, width, height, random, background, fill, color, random,
          rect, rectMode, ellipse, lerpColor, stroke, image, loadImage, collideCircleCircle, collideRectCircle, text, tint, noTint
          map, mouseX, mouseY, pmouseX, pmouseY, round, strokeWeight, sqrt, line, mouseIsPressed, noFill, windowWidth, windowHeight, noStroke, 
          key, keyCode, CENTER, PI, HALF_PI, UP_ARROW, LEFT_ARROW, RIGHT_ARROW, DOWN_ARROW, textSize */


console.log('ghosts imported')
class Ghost{
  constructor(img,map,x,y,v,d,w,h){
    this.img=img;
    this.map=map;
    this.x=x;
    this.y=y;
    this.v=v;
    this.d=d; //0 north, 1 east, 2 south, 3 west
    this.w=w;
    this.h=h;
  }
  
  getNextX(){
    //calculates next x position ghost will be in
    // 1 is east
    if(this.d==1) return this.x+this.v;
    if(this.d==3) return this.x-this.v;
    return this.x;
  }
  
  getNextY(){
    if(this.d==0) return this.y-this.v;
    if(this.d==2) return this.y+this.v;
    return this.y;
  
  }
  
  getWidth(){
    return this.w;
  }
  
  getHeight(){
    return this.h;
  }
  
  move(){
    //update
    if(this.d===0){
      this.y-=this.v
    }
    else if(this.d===1){
      this.x+=this.v;
    }
    else if(this.d===2){
      this.y+=this.v
    }
    else if(this.d===3){
      this.x-=this.v
    }
  }
  
  setDirection(d){
    this.d=d;
  }
  
  path(pacman){
    if(pacman===null){
      this.d = round(random(0,4));
      return;
    }
    
    let gridSize = 3;
    let mat = map.makeMatrix(gridSize,this.w,pacman);
    let parent = [];
    let dist = [];
    let f = [];
    
    let start = [(this.x-this.x%gridSize)/gridSize, (this.y-this.y%gridSize)/gridSize];
    let end = [];
    
    
    
    for(let i = 0; i < mat.length; i++){
      parent.push([]);
      dist.push([]);
      f.push([]);
      for(let j = 0; j < mat[0].length; j++){
        parent[i].push(0);
        dist[i].push(-1);
        f[i].push(-1);
        if(mat[i][j]==2){
          end.push([i,j]);
        }
      }
    }
    
    
    let dx = [0,0,-1,1];
    let dy = [-1,1,0,0];
    
    dist[start[0]][start[1]] = 0;
    f[start[0]][start[1]] = 0;
    let open = [];
    open.push(start);
    console.log(mat[start[0]][start[1]]);
    let destination = end[0];
    while(open.length>0){
      //console.log(open.length);
      let minF = f[open[0][0]][open[0][1]];
      let ind = 0;
      for(let i = 1; i < open.length; i++){
        let temp = f[open[i][0]][open[i][1]];
        if(temp<minF && temp!==-1){
          minF = temp;
          ind = i;
        }
      }
      
      let node = open[ind];
      open.splice(ind,1);
      
      for(let i = 0; i < 4; i++){
        let nx = node[0]+dx[i];
        let ny = node[1]+dy[i];
        if(mat[nx][ny]===1) continue;
        if(nx<0 || ny<0 || nx>=mat.length || ny>=mat[0].length) continue;
        let found = false;
        for(let j = 0; j < end.length; j++){
          if(nx===end[j][0] && ny===end[j][1]){
            parent[nx][ny] = node;
            destination = end[j];
            found = true;
            break;
          } 
        }
        if(found) break;
        //calculate f
        let nf = dist[node[0]][node[1]] + 1 + abs(nx-end[0][0]) + abs(ny-end[0][1]);
        if(f[nx][ny]<=nf && f[nx][ny]!==-1) continue;
        f[nx][ny] = nf;
        parent[nx][ny] = node;
        
        dist[nx][ny] = dist[node[0]][node[1]]+1;
        open.push([nx,ny]);
      
      }
    }
    while(true){
      //console.log("ksfj");
    //  console.log(current[0]+" "+current[1])
      if(typeof destination===undefined) return;
      let temp = parent[destination[0]][destination[1]];
      if(temp[0]===start[0] && temp[1]===start[1]){
        break;
      }
      destination = temp;
   }
    
    if(destination[0]===start[0]+1 && destination[1]===start[1]){
      this.d = 1; //east
    }
    else if(destination[0]===start[0]-1 && destination[1]===start[1]){
      this.d=3; //west
    }
    else if(destination[0]===start[0] && destination[1]===start[1]+1){
      this.d=2;  //south
    }
    else if(destination[0]===start[0] && destination[1]===start[1]-1){
      this.d=0;//north
    }
//    console.log("direction"+this.d);
    
  }
  
  display(){
    image(this.img,this.x,this.y,this.w,this.h);
  }
}