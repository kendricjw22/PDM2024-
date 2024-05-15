let sprite;
let bugs = [];
let score = 0;
let gameTime = 20;
let gameOver = false;
let bheight = 96;
let bwidth = 96;
let bposx;
let bposy;

function preload(){
  let animations = {
    stand: {row: 0, frames: 1},
    walkRight: {row:0, col:0,  frames: 4}
  };
  
  bugs.push(new Bug(10,74,32,32,'assets/hey.png',animations));
  bugs.push(new Bug(550,random(107,127),32,32,'assets/hey.png',animations));
  bugs.push(new Bug(0,random(160,180),32,32,'assets/hey.png',animations));
  bugs.push(new Bug(555,random(215,235),32,32,'assets/hey.png',animations));
  bugs.push(new Bug(7,random(267,280),32,32,'assets/hey.png',animations));
  bugs.push(new Bug(550,random(312,330),32,32,'assets/hey.png',animations));

  // bugs.push(new Bug(590,random(139,200),64,64,'assets/man.png',animations));
  // bugs.push(new Bug(10,random(264,328),64,64,'assets/man.png',animations));
  // bugs.push(new Bug(590,random(392,456),64,64,'assets/man.png',animations));
  //bugs.push(new Bug(0,74,64,64,'assets/man.png',animations));
  //bugs.push(new Bug(600,74,64,64,'assets/man.png',animations));
  //bugs.push(new Bug(0,74,64,64,'assets/man.png',animations));
}

function mousePressed(){

   bugs.forEach((bug) => {
    if (bug.contains(mouseX, mouseY)){
      ;
    }
  })
}


function gameDone() {
  textSize(15);
  text("Final Score: " + score,150,150);
  text("Press R to Start Over" , 135,250);
}

function setup() {
  createCanvas(550, 550);
}

function draw() {
  background(220);

  if(gameOver){
    gameDone();
  } else{ 
  playing();
  }

  
  bugs.forEach((bug) => {

     if(bug.sprite.x + bug.sprite.width/4 > width){
      bug.walkLeft();
    } else if (bug.sprite.x - bug.sprite.width/4 <= 0){
      bug.walkRight();
    }

    
  })



  // bugs.forEach((bug) => {
  //   if (kb.pressing('arrowRight')){
  //   bug.walkRight();
  //   } else if (kb.pressing('arrowLeft')) {
  //   bug.walkLeft();
  //  } else if (bug > width){
  //   bug.walkLeft();
  //  }
  //  else{
  //   bug.stop();
  //   }

    
  // })
}

function playing() {
  textSize(15);
  text("Score: " + score,20,20);
  text("Time Left: " + ceil(gameTime),300,20);

  //gameTime -= deltaTime / 1000;

  if (gameTime < 0){
    gameOver = true;
  }
}

class Bug {
  constructor(x,y,width,height,spriteSheet,animations){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  this.sprite = new Sprite(this.x,this.y,this.width,this.height);
  this.sprite.spriteSheet = spriteSheet;
  this.sprite.anis.frameDelay = 4;
  this.sprite.addAnis(animations);
  this.sprite.changeAni('stand');   
  };

  walkRight(){
    this.sprite.changeAni('walkRight')
    frameRate(60);
    this.sprite.vel.x = speed;
    this.sprite.scale.x = speed;
  }
  
  walkLeft(){
    this.sprite.changeAni('walkRight')
    this.sprite.vel.x = -1;
    this.sprite.scale.x = -1;
  }
  
  stop(){
    this.sprite.vel.x = 0;
    this.sprite.changeAni('stand');
  }

  contains(x,y){
    let insideX = x >= this.sprite.x - 15 && x <= this.sprite.x + 7;
    let insideY = y >= this.y - 19 && y <= this.y + 7;
    return insideX && insideY;
  }
}