function setup() {

createCanvas(600, 400);
var kgEarth =55;
var kgMars=conversion(kgEarth);
var kgMoon=conversion2(kgEarth);
print('Mars '+kgMars+'kg');
print('Moon '+kgMoon+'kg');
}



function conversion(kgEarth) {
  var kgMars =kgEarth /9.8 *3.711;
  return kgMars;
}

function conversion2(kgEarth) {
  var kgMoon =kgEarth /9.8 *1.62;
  return kgMoon;
}



function draw() {
background(0);










}
