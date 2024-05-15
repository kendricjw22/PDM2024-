let but1, but2, but3, but4;
let bC = new Tone.BitCrusher(1);
let bcSlider;



 let soundFx = new Tone.Players({
    bird : "assets/bird.mp3",
    glass : "assets/glass.mp3",
    pics : "assets/pics.mp3",
    telephone : "assets/telephone.mp3"
  }).connect(bC);
   
  bC.toDestination();


function setup() {
  

  but1 = createButton('birdies');
  but1.position (150,50);
  but1.mousePressed(() => soundFx.player('bird').start());

  but2 = createButton('Stone Cold');
  but2.position (150,100);
  but2.mousePressed(() => soundFx.player('glass').start());

  but3 = createButton('Camera');
  but3.position (150,150);
  but3.mousePressed(() => soundFx.player('pics').start());

  but4 = createButton('Phone');
  but4.position (150,200);
  but4.mousePressed(() => soundFx.player('telephone').start());

  bcSlider = createSlider(1,16, 1, 0.5);
  bcSlider.position (130, 300);
  bcSlider.mouseMoved(()=> bC.bits.value = bcSlider.value());
  
 
}



function draw() {
  background(220);

  createCanvas(400, 400);
  textSize(15);
  fill('red');
  text('Slide here to change bits', 120, 275);
  text('Click a button to play a sound', 100, 20);

}
