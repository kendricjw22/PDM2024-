let sprite;
let characters = [];

function preload(){
  let animations = {
    stand: {row: 0, frames: 1},
    walkRight: {row: 0, col: 1, frames: 8}
  };
  
  characters.push(new Character(200,200,80,80,'assets/mboy.png',animations));
  characters.push(new Character(200,100,80,80,'assets/rob.png',animations));
  characters.push(new Character(200,300,80,80,'assets/himbo.png',animations));

}


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);

  characters.forEach((character) => {
    if (kb.pressing('arrowRight')){
    character.walkRight();
    } else if (kb.pressing('arrowLeft')) {
    character.walkLeft();
   } else{
    character.stop();
    }
  })
}

class Character {
  constructor(x,y,width,height,spriteSheet,animations){
  this.sprite = new Sprite(x,y,width,height);
  this.sprite.spriteSheet = spriteSheet;
  this.sprite.anis.frameDelay = 6;
  this.sprite.addAnis(animations);
  this.sprite.changeAni('stand');   
  };
  walkRight(){
    this.sprite.changeAni('walkRight')
    this.sprite.vel.x = 1;
    this.sprite.scale.x = 1;
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
}



// function keyTyped() {
//   switch(key){
//     case'd':
//      walkRight();
//       break;
//     case'a':
//      walkLeft();
//      break;
//     }
// }
