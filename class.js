
let cow= [];

function setup() {

createCanvas(800,400);  // put setup code here

for(let i=0; i< 100; i++){
  let x =random(width);
  let y =random(height);
  let r =random(50);
  cow[i] = new Box(x,y,r,0,0,0);

}
}



function draw() {
background(0);
for(let i=0; i< 100; i++){
  cow[i].move();
  cow[i].show();

}
}

class Box{
  constructor(x,y,r,red,o,b) {

   this.x =x;
   this.y =y;
   this.r =r;
   this.red =red;
   this.o =o;
   this.b= b;
 }

   move(){
     this.x = this.x + random(-5,5);
        this.y = this.y + random(-5,5);
          this.red = this.red + 1;

            this.o = this.o + 1;

   }

   show(){
     fill(this.red,this.o,this.b);
     ellipse(this.x, this.y, this.r*2);



   }
   }
