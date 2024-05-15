let soundFx = new Tone.Players({
  magic: "Audios/Magic_sound.wav",
  Drum: "Audios/Drum.wav",
  Guitar: "Audios/Guitar.wav",
  Bass: "Audios/Bass.wav",

});

let slider;
let deylaySlider,fbSlider, distSlider;
let delAmt = new Tone.FeedbackDelay("8n", 0.5).toDestination();


  




let distAmt = new Tone.Distortion(0.5);

soundFx.connect(delAmt);
delAmt.connect(distAmt);
distAmt.toDestination();



function setup() {
  
  //Sound buttons
  let magic_button = createButton('Magic!');
  let Drum = createButton('Drum');
  let Guitar = createButton('Guitar');
  let Bass = createButton('Bass');
  magic_button.position(20,100);
  Drum.position(100,100);
  Guitar.position(100,120);
  Bass.position(20,120);

  magic_button.size(50);
  Drum.size(50);
  Bass.size(50);
 Guitar.size(50);
  createCanvas(450, 400);
  


  deylaySlider = createSlider(0,1, 0, 0.05);
  deylaySlider.position(10,200);
  deylaySlider.size(80);
  deylaySlider.mouseMoved(()=> delAmt.delayTime.value = deylaySlider.value());
  
  fbSlider = createSlider(0,1, 0, 0.05);
  fbSlider.position(10,250 );
  fbSlider.size(80);
  fbSlider.mouseMoved(() => delAmt.feedback.value = fbSlider.value());

  distSlider = createSlider(0,255, 0, 0.05);
  distSlider.position(10, 300);
  distSlider.size(80);
  distSlider.mouseMoved(() => distAmt.Distortion = distSlider.value());

  magic_button.mousePressed(()=>{
    soundFx.player('magic').start();
    
  });

  Drum.mousePressed(()=>{
    soundFx.player('Drum').start();
    
  });

  Guitar.mousePressed(()=>{
    soundFx.player('Guitar').start();
    
  });

  Bass.mousePressed(()=>{
    soundFx.player('Bass').start();
    
  });
  
}




function draw() {
  
  background(220, 100, 200);
  text('Click on a Sound!', 130,50);
  text('<--Use this slider to delay each sound: ' +  delAmt.delayTime.value * 100.00 + '%', 130,210);
  text('<--Use this slider to add feedback delay to each sound: ' +   delAmt.feedback.value * 100.00 + '%', 130,260);
  text('<--Use this slider to add distortion to each sound', 130,310);


}
