let xSlide;
let ySlide;
let zSlide;
let x;
let y;
let z;

let n;

function setup() {
  createCanvas(displayHeight - 50, displayHeight - 50, WEBGL);
  n = displayHeight - 150;
  var fov = 60 / 180 * PI;
  var cameraZ = height / 2.0 / tan(fov / 2.0);
  perspective(60 / 180 * PI, width / height, cameraZ * 0.1, cameraZ * 10);


  x = 0;
  xSlide = document.getElementById("xSlide");
  xSlide.oninput = function() {
    x = map(this.value, -1000, 1000, -n / 2, n / 2);
  }
  
  y = 0;
  ySlide = document.getElementById("ySlide");
  ySlide.oninput = function() {
    y = map(this.value, 1000, -1000, -n / 2, n / 2);
  }
  
  z = 0;
  zSlide = document.getElementById("zSlide");
  zSlide.oninput = function() {
    z = map(this.value, -1000, 1000, -n / 2, n / 2);
  }


}

function draw() {
  background(150, 250, 244);


  let r = map(x, -100, 100, 0, 255);
  let g = map(y, -100, 100, 0, 255);
  let b = map(z, -100, 100, 0, 255);
  let c = color(r, g, b);

  //axes
  stroke(0, 255, 0, 100);
  cylinder(3, n);
  push();
  stroke(255, 0, 0, 100);
  rotateZ(HALF_PI);
  cylinder(3, n);
  stroke(0, 0, 255, 100);
  rotateX(HALF_PI);
  cylinder(3, n);
  pop();

  //ball
  // push();
  // translate(x, y, z);
  // stroke(c);
  // sphere(15);
  // pop();

  //triangle
  stroke(255, 255, 255, 100);
  fill(r, g, b, 100);
  //1
  beginShape();
  vertex(0, 0, 0);
  vertex(x, 0, 0);
  vertex(0, y, 0);
  endShape();
  //2
  beginShape();
  vertex(0, 0, 0);
  vertex(0, 0, z);
  vertex(0, y, 0);
  endShape();
  //3
  beginShape();
  vertex(0, 0, 0);
  vertex(x, 0, 0);
  vertex(0, 0, z);
  endShape();
  //4
  beginShape();
  vertex(0, 0, z);
  vertex(x, 0, 0);
  vertex(0, y, 0);
  endShape();

  orbitControl();
}