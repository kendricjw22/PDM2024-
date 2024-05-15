let synth = new Tone.PolySynth(Tone.MetalSynth);

synth.toDestination();

function setup() {
  createCanvas(400, 400);
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
}
