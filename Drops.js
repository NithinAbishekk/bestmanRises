class CreateDrop{
      constructor(x,y){
         var option ={
             'friction' : 0.1
         }
         this.rain = Bodies.circle(x, y, 3, option);
         this.r = 3;
         World.add(world, this.rain);
      }

      update(){
          if(this.rain.position.y > height){
               Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)});
          }
      }

      display(){
          var pos = this.rain.position;
          push();
          translate(pos.x, pos.y);
          fill(0,0,255);
          ellipseMode(RADIUS);
          ellipse(0, 0, this.r, this.r);
          pop();
      }
}