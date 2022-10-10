
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground

var ball
var ball_Options = {
	isStatic: false,
	restitution: 0.1,
	friction: 0,
	density: 1.2

	
} 

function preload()
{

}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	
	ground = new Ground(width/2,670,width,20)
	left = new Ground(700,600,20,120)
	right = new Ground(900,600,20,120)

	//Create the Bodies Here.
	ball = Bodies.circle(200, 100, 11, ball_Options)
	World.add(world, ball)
	
	Engine.run(engine);

	
  
}

function keyPressed(){

	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball, {x:0, y:0}, {x:10, y:-5} )
	}
	
}
	


function draw() {
  rectMode(CENTER);
  background(0);

  ground.show()
  left.show()
  right.show()

  ellipse(ball.position.x, ball.position.y, 20)

  
  
  drawSprites();
 
}

