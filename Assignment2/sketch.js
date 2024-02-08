let colorNow;
let buttons;
let a;
let b;
let isInFace = false;

function setup() {
  createCanvas(800, 800);

 buttons = 
 [new button( 10,10, color('red')),
 new button( 10,35, color('orange')),
 new button( 10,60, color('yellow')),
 new button( 10,85, color('green')),
 new button( 10,110, color('cyan')),
 new button( 10,135, color('blue')),
 new button( 10,160, color('magenta')),
 new button( 10,185, color('brown')),
 new button( 10,210, color('white')),
 new button( 10,235, color('black')),
];

colorNow = color('black');
background(255);
}

function draw() {
  
  for(let i = 0; i < buttons.length; i++ ){
    buttons[i].draw();
  }

  if (mouseIsPressed){
    a += mouseX - pmouseX;
    b += mouseY - pmouseY;
    fill(colorNow)
    noStroke();
    circle(mouseX, mouseY, 35);
  }


for(let h = 0; h < buttons.length; h++ ){
  if(buttons[h].contains(mouseX,mouseY)){
    noStroke();
    noFill;
    break;
  }
   
  }
}
  


function mousePressed(){
  for(let i = 0; i < buttons.length; i++ ){
    if(buttons[i].contains(mouseX,mouseY)){
      //square(250,250,50);
      colorNow = buttons[i].fill;
      console.log(colorNow);
      isInFace = true;
      break;
    }
  }
}

class button {
  constructor(x,y,fill){
    this.x = x;
    this.y = y;
    this.fill = fill;
  }

  draw(){
    fill(this.fill);
    square(this.x,this.y,20);

  } 

  contains(x,y){
    let insideX = x >= this.x && x <= this.x+20;
    let insideY = y >= this.y && y <= this.y+20;
    //console.log(insideX && insideY);
    return insideX && insideY;
  }
}
