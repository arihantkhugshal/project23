var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//need to declare the variables in the global scope before using them.
var engine,world,packageBody,packageSprite;
var left,left1,bottom,bootom1,right,right1;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	
	packageSprite=createSprite(200, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	left = createSprite(110,620,20,100);
	left.shapeColor = 'red';
	left1 = Bodies.rectangle(110,600,20,100,{isStatic:true});
	World.add(world,left1);

	bottom = createSprite(500,650,200,20);
	bottom.shapeColor = 'red';
	bottom1 = Bodies.rectangle(200,650,200,20,{isStatic:true});
	World.add(world,bottom1);

	right = createSprite(290,620,20,100);
	right.shapeColor = 'red';
	right1 = Bodies.rectangle(290,600,20,100,{isStatic:true});
	World.add(world,right1);

	var package_options={
		restitution:0.2 ,
		isStatic:true
	}

	packageBody = Bodies.circle(200 , 200 , 5,package_options);
	World.add(world,packageBody);
	  //should not be declared here because you are using world in line 33
	// engine = Engine.create();
	// world = engine.world;

	//should be added right after the packageBody creation	
	World.add(world,packageBody);

	helicopterSprite=createSprite(200, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
  
			
	var ground_options={
		isStatic:true,
	}
	//Create a Ground	
	ground = Bodies.rectangle(500, 650, width, 10 , ground_options);
 	World.add(world, ground);

//  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  packageSprite.x = packageBody.position.x 
  packageSprite.y = packageBody.position.y 
  left.x = left1.position.x 
  left.y = left1.position.y 
  bottom.x = bottom1.position.x 
  bottom.y = bottom1.position.y 
  right.x = right1.position.x 
  right.y = right1.position.y 
	
  if(keyDown("down"))
  {
	  Body.setStatic(packageBody,false)
  }


  drawSprites();
}




