

function setup() {

createCanvas(800,400);  // put setup code here

let box;
box= new Box();
print(box.x,box.y);

}


class Box{
  constructor() {

   this.x =1;
   this.y = 1;


  }
}



function draw() {
  background(0);


}
