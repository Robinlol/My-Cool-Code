function setup() {
createCanvas(600, 400);


}

function draw() {
background(0);
Pattern(20,20,10,10);


function Pattern(x,y,b,h) {
  for(var x = 0; x<= width; x+=50){
    for(var y = 0; y<= width; y+=50){
      fill(random(255), 0, random(255));
      ellipse(x,y,b,h);

      }
  }

}





}
