class Boat{
    constructor(x,y,w,h,boatPos){

            var options={
                isStatic:false
            }

        this.w = w;
        this.h = h;
        this.boatPos = boatPos;

        this.image = loadImage("./assets/boat.png");
        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body);
 
    }
    remove(i) {

        Matter.Body.setVelocity(this.body,{x:0,y:0})
        
        setTimeout(() => {
          Matter.World.remove(world, this.body);
          delete boats[i];
        }, 1000);
      }

    display(){

    
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,this.boatPos,this.w,this.h);
        pop();

    }
}