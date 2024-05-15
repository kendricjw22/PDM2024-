let synth = new Tone.PolySynth(Tone.MetalSynth);
let bC = new Tone.BitCrusher(1);

synth.connect(bC);
bC.toDestination();



function setup() {
  createCanvas(400, 400);
  bcSlider = createSlider(1,16, 1, 0.5);
  bcSlider.position (130, 300);
  bcSlider.mouseMoved(()=> bC.bits.value = bcSlider.value());
  
  
}

let notes = {
  'a' : "C4",
  's' : 'D4',
  'd' : 'E4',
  'f' : 'F4',
  'g' : 'G4',
  'h' : 'A4',
  'j' : 'B4',
  'k' : 'C5'
};

function keyPressed() {
  let playNotes = notes[key];
  synth.triggerAttack(playNotes);
}

function keyReleased(){
  let playNotes = notes[key];
  synth.triggerRelease(playNotes,'+0.03');
}





function draw() {
  background(220);
  text('Press "a - k" on the keyboard to play notes', 50, 50);
}
