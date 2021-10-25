//p5.SoundFile example 0
//preload example from https://p5js.org/reference/#/p5.SoundFile to be familiar to how to add soun
//http://molleindustria.github.io/p5.play/examples/index.html
let mySound;
  var kart;
function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('asset/register.mp3');
  kart= loadAnimation('asset/shoppingkart.png', 'asset/shoppingkart2.png');

}

function setup() {
  let cnv = createCanvas(250, 150);
  cnv.mousePressed(canvasPressed);
  }


function draw(){
  background(125, 206, 160);
  textSize(16);
  text(' pay', 10, 20);
  textSize(16);
  text('add the amount selected',250,500);
  animation(kart, 300, 150);

}

function canvasPressed() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  mySound.play();
}

function setup() {
  createCanvas(100, 100);
  background('grey');
  let inp = createInput('');
  inp.position(150, 850);
  inp.size(100);
  inp.input(myInputEvent);

}

function myInputEvent() {
  print( this.value());
}
