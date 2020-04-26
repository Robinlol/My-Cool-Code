



var c={
x:0,
y:0,
co:0
}

var coc =10;
var speed =2;

function setup() {

createCanvas(600,400);  // put setup code here

}

function draw() {
  background(0);



  // Draw a square at location (30, 20) with a side size of 55.


if(c.y >400){
  c.co=c.co+coc;
}
fill(c.co,0, c.co);

    ellipse(200,c.y,100,100);
   c.y=c.y+speed;
   c.x=c.x+speed;
   if(c.y > 400){

     speed = -3;
   }
   if(c.y < 1){

     speed = 3;
   }



















}
function mousePressed(){
    background(220,0, 200);
}
