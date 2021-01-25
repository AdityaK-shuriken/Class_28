class Slingshot {
constructor(object1, pointB) {
 var options = {
     bodyA : object1,
     pointB : pointB,
     length : 10,
     stiffness : 0.04
 }
 this.sling = Matter.Constraint.create(options)
 World.add(world, this.sling)
 this.pointB = pointB
}
 display() {
  if (this.sling.bodyA) {
 var pointA = this.sling.bodyA.position;
 var pointB = this.pointB;
 strokeWeight(4)
 line(pointA.x, pointA.y, pointB.x, pointB.y)
 }
}
 fly() {
 this.sling.bodyA = null     
 }
}