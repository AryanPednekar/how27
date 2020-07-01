const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var engine, world;
var bobObject1,bob2,bob3,bob4,bob5;
var paperObject,rope,bobDiameter;

//function preload()
//{
	//helicopterIMG=loadImage("helicopter.png")
	//packageIMG=loadImage("package.png")
//}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	engine = Engine.create();
    world = engine.world;
    
       
	/*packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6*/

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	bobDiameter=40;
	bobObject1=new Bob(200,520,50);
	bob2=new Bob(300,520,50);
	bob3=new Bob(400,520,50);
	bob4=new Bob(500,520,50);
	bob5=new Bob(600,520,50);
	roof=new Roof(425,100,500,10);
	rope = new Rope(bobObject1.body,roof.body,-bobDiameter*2,0)
	

	
	

	
    

	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roof.display();
  bobObject1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 rope.display();
 
  Engine.update(engine);
  drawSprites();

 
}



						
