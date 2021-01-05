let numPoints;
let multiplier;
let maxMultiplier = 50; // for scaling hue
let fr = 12;

function setup() {
  width = 600;
  height = 600;
  createCanvas(width, height);
  frameRate(fr);

  // numPoints = createSlider(0,200,30);
  // multiplier = createSlider(0,maxMultiplier,2);
  // cardioid = new Cardioid(numPoints.value(), multiplier.value(), 1.5);
  numPoints = 30;
  multiplier = 2;
  cardioid = new Cardioid(numPoints, multiplier, 1.5);
}

function draw() {
  background(10);
  translate(width/2, height/2);
  cardioid.update(numPoints, multiplier, 1.5);
  cardioid.show();

  // numPoints += 1;
  numPoints %= 200;
  multiplier += 1;
  multiplier %= maxMultiplier;

}
