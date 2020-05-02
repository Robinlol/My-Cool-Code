
let cow;
let dog;
function setup() {

createCanvas(800,400);  // put setup code here
cow = new Box(400,200,20,0,0,0);
dog = new Dog(300,100);

//print(box.x,box.y);

}






function draw() {
background(0);
  cow.show();
  cow.move();
  dog.show2();


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

   class Dog {
     constructor(x,y) {

       this.x=x;
       this.y=y;





     }


     show2(){
       rect(this.x,this.y,100,100);




     }
   }
