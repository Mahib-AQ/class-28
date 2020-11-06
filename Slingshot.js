class Slingshot{
    constructor(bodyA, b){
        var options = {
            bodyA: bodyA,
            pointB: b,
            stiffness: 0.04,
            length: 10
        }
        this.chain = Constraint.create(options);
        this.pointB = b;
        World.add(world, this.chain);
    }

     fly(){
        this.chain.bodyA = null;
    }



    display(){

        if(this.chain.bodyA){
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}