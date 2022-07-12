
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;


function preload()
{
	
}

function setup() {
	createCanvas(2000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 groundObj=new Ground(width/2,670,width,20);
 leftSide = new Ground(1100,600,20,120);
 rightSide= new Ground(1500,600,20,120);


 ball= Bodies.circle(400,350,20,20);
 World.add(world,ball);


	var ball_options={
		isStatic : false,
		restitution : 0.3,
		friction:0,
		density:1.2
	}
 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundObj.display();
  leftSide.display();
  rightSide.display();
  ellipse(ball.position.x, ball.position.y, 50, 50);
  Engine.update(engine);
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:0.1, y:-0.05})
	}
}



