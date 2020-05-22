var bullet,wall;
var speed,weight,thickness;
var damage;


function setup() {
  createCanvas(1600,800);
  bullet=createSprite(100,400,40,40);
  bullet.shapeColor="white";
  wall=createSprite(1000,400,thickness,1000);
  wall.shapeColor="purple";
  thickness=random(80,100);
  speed=random(80,100);
  weight=random(20,52);
  }

function draw() {
  background(0,0,0);
console.log(random);
  bullet.velocityX=speed;
 
  if(wall.x-23 -bullet.x <bullet.width/2 + wall.width/2){
    bullet.velocityX=0;
    damage=0.5*bullet.velocityX*bullet.velocityX/thickness*thickness*thickness;
    
  }
  
  if(damage<10){
    bullet.shapeColor = "green";

  }
 if(damage>10){
 bullet.shapeColor="red";
 }
  drawSprites();
}
