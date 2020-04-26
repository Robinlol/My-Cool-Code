

function setup() {

createCanvas(800,400);  // put setup code here

}

function draw() {
  background(0);

var x = 0;
var y =0;
var colur =10;
var fade=0;
fade=fade+10;

while (x<= width) {
  fill(0,0,255);
  ellipse(x, 100, 25, 25);
  x+=50;
}

for(var x=0; x<= width; x+=50){
  fill(255,0,0);
 ellipse(x, 300, 25, 25);

}

for(var y=0; y<= width; y+=50){
  colur+=fade;
  fill(colur,0,fade);
 ellipse(100, y, 25, 25);

}

for(var y=0; y<= width; y+=50){

    colur+=fade;
    fill(fade,0,colur);

 ellipse(700, y, 25, 25);

}








}
