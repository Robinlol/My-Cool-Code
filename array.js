


let words=['Hello','my','name','is','Bob']
let index=0;









function setup(){
    createCanvas(800,400);



}
function draw(){
background(0);
fill(255);
textSize(32);
text(words[index],400,200);



}
function mousePressed() {
  index=index +1;

  if(index>= 5){

    index= index=0;
  }


}
