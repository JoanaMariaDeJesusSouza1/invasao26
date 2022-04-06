class CannonBall {
    constructor(x, y,) {
        var options = {
            isStatic: true
        }

        this.r = 30;
        this.image = loadImage("./assets/cannonball.png")
        this.trajectory = [];
        this.body = Bodies.circle(x,y,this.r,options);
        World.add(world,this.body);
    
    }    
    remove(index) {
      
      setTimeout(() => {
        Matter.World.remove(world, boats[index].body);
        delete boats[index];
      }, 2000);
    }
    shoot(){
        var newAngle=cannon.angle -28;
        newAngle=newAngle*(3.14/180);
        
        var velocity= p5.Vector.fromAngle(newAngle);
        velocity.mult(0.5);

       Matter.Body.setStatic(this.body,false)
       Matter.Body.setVelocity(this.body,{x:velocity.x*(180/3.14),y:velocity.y*(180/3.14)})
    }
  display(){
    
    if (this.body.velocity.x>0 && this.body.position.x>300    ) {
      var position=[this.body.position.x,this.body.position.y];
      this.trajectory.push(position);
      for (var i = 0; i < this.trajectory.length; i++) {
        image(this.image,this.trajectory[i][0],this.trajectory[i][1],5,5)
        
      }
    }
    var pos = this.body.position;
    push();
    imageMode(CENTER);
    image(this.image, pos.x,pos.y,this.r,this.r)
    pop();
 
  }
}
