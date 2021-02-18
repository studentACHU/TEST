var bobObject1;
var bobObject2;
var bobObject3;
var bobObject4;
var bobObject5;
var rope1;
var ROOF;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new BOB(200,500,100);
    ROOF = new roof(400,100,700,100);
	rope1 = new ROPE(bobObject1.body,ROOF.body,-bobObject1diameter*2,0); 

	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  

bobObject1.display();
ROOF.display();

  drawSprites();
 
}



