
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy,boyIMG,tree,treeIMG;
var stone;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
function preload()
{
	treeIMG=loadImage("tree.png");
	boyIMG=loadImage("boy.png");
	
}

function setup() {
	createCanvas(1000,700);


	engine = Engine.create();
	world = engine.world;

	ground = new ground(500,690,1000,20);
	stone=new Stone(90,545,50);
	
	mango1 = new Mango(740,335,34);
	mango2 = new Mango(690,460,35);
	mango3 = new Mango(790,300,35);
	mango4 = new Mango(640,310,35);
	mango5 = new Mango(660,400,35);
	mango6 = new Mango(820,400,35);
	mango7 = new Mango(900,400,35);
	mango8 = new Mango(600,370,35);
	mango9 = new Mango(700,380,35);
	mango10 = new Mango(860,440,35);
	boy=createSprite(140,620);
	boy.addImage(boyIMG);
	boy.scale=0.12;

	tree=createSprite(750,450);
	tree.addImage(treeIMG);
	tree.scale=0.4
    
	attach=new Throw(stone.body,{x:90,y:545});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(110,255,255);

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
    

   
  drawSprites();
 ground.display();
   
   stone.display();
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
}
function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	attach.fly();
}

function detectCollision(stone1,mango1){

	if(stone1.body.position.x- mango1.body.position.x <mango1.diametre + stone1.diametre
		&& mango1.body.position.x - stone1.body.position.x  < mango1.diametre + stone1.diametre
		&&stone1.body.position.y -mango1.body.position.y < mango1.diametre + stone1.diametre
		&& mango1.body.position.y - stone1.body.position.y < mango1.diametre + stone1.diametre){
		Matter.Body.setStatic(mango1.body,false);
	}

}
 
function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:100,y:465});
		attach.Launch(stone.body);
	}
}