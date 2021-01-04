
class Cardioid {
  constructor(numPoints, multiplier, scalee) {
    this.numPoints = numPoints;
    this.multiplier = multiplier;
    this.scale = scalee;
    this.diameter = this.scale*(width/2);
    this.radius = this.diameter/2
    this.points = [];
    for (let i=0; i<this.numPoints; i++) {
      this.points.push({'x': cos((2*Math.PI/this.numPoints)*i)*this.radius,
                        'y': sin((2*Math.PI/this.numPoints)*i)*this.radius});
    }
  }

  update(numPoints, multiplier, scalee) {
    this.numPoints = numPoints;
    this.multiplier = multiplier;
    this.scale = scalee;
    this.diameter = this.scale*(width/2);
    this.radius = this.diameter/2
    this.points = [];
    for (let i=0; i<this.numPoints; i++) {
      this.points.push({'x': cos((2*Math.PI/this.numPoints)*i)*this.radius,
                        'y': sin((2*Math.PI/this.numPoints)*i)*this.radius});
    }
  }

  show() {
    noFill();
    stroke(230);
    strokeWeight(0.75);
    ellipse(0, 0, this.diameter);

    colorMode(HSB);
    strokeWeight(1.6);
    for (let i=0; i<this.numPoints; i++) {
      let startPoint = this.points[i];
      let endPoint = this.points[(i*this.multiplier)%this.numPoints]
      stroke((this.multiplier/maxMultiplier)*360, 100, 82);
      line(startPoint.x, startPoint.y, endPoint.x, endPoint.y);
    }
    colorMode(RGB);

    stroke(38, 240, 240);
    strokeWeight(5);
    for (let pnt of this.points) {
      point(pnt.x, pnt.y);
    }
  }
}
