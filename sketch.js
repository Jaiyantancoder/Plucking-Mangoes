//Creating Constraints
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

//Creating variables
var ground,tree,stone,boy,boyImg;
var mango1,mango2,mango3,mango4,mango5;
var mango6,mango7,mango8,mango9,mango10;
var chain;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

   

	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  tree  =  new Tree(560,440,15,20);
   stone = new Stone(300,300,10,10);
   mango1 = new Mango(700,420,15);
   mango2 = new Mango(660,370,15);
   mango3 = new Mango(570,270,15);
   mango4 = new Mango(400,330,15);
   mango5 = new Mango(500,330,15);
   mango6 = new Mango(450,390,15);
   mango7 = new Mango(530,390,15);
   mango8 = new Mango(750,320,15);
   mango9 = new Mango(450,250,15);
   mango10 = new Mango(600,220,15);
   mango11 = new Mango(650,300,15);
   mango12 = new Mango(580,340,15)
   ground = new Ground(400,700,1500,25);
   boy    = new Boy(260,640,15,15);
  

  chain = new Chain(stone.body,{x:215, y: 550});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");
  
  tree.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();

  stone.display();
   
  ground.display();

 chain.display();

  boy.display();

  drawSprites();

 
}

function mouseDragged(){

	Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});

}

function mouseReleased(){

chain.fly();

}

function keyPressed(){

	if(keyCode===32){
	chain.attach(stone.body);
	
	}
		
	
	}

