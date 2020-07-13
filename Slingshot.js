class Slingshot{
    constructor(bodyA, bodyB){

        var options = {
            bodyA: bodyB,
            pointB :pointB,
            stiffness: 0.04,
            length :10

        }
        this.pointB = this.pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);

    }
    fly(){
        this.sling.bodyA = null;

    }
    display(){

    if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointB.y, pointB.y, pointB.y);

    }


    }


}