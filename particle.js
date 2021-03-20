class Particle{
    constructor(x, y,radius) {
        var options = {
            restitution:0.4
        }
        this.body = Bodies.circle(x, y,radius,options)
        this.radius = radius;
      
        World.add(world, this.body);
        this.color=color(random(0,255),random(0,255),random(0,255))
        
        
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0, 0, this.radius, this.radius);
        pop();
      }
}