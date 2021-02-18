class ROPE{
    constructor(body1,body2,offsetX,offsetY)
    {
        this.offsetX=offsetX
        this.offsetY=offsetY
        var opt={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this. this.offsetX=offsetX,y: this.offsety=offsetY}
            
                }
          this.ROPE=Constraint.create(opt);
            World.add(world,this.ROPE);
    
    }
    
    display(){
    var pointA=this.ROPE.bodyA.position;
    var pointb=this.ROPE.bodyB.position;
    
    strokeWeight(4);
    line(pointA.x,pointA.y,pointb.x,pointb.y);
    
    
    
    }
    }
    