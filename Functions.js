function setup() {

createCanvas(600, 400);
var kgEarth =55;
var kgMars=conversion(kgEarth);
print('Mars '+kgMars);

}



function conversion(kgEarth) {
  var kgMars =kgEarth /9.8 *3.711;
  return kgMars;
}



function draw() {
background(0);










}
