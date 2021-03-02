const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1,block2,block3,block4,block5,block6,block7,block8,block9;
var block10,block11,block12,block13,block14,block15,block16,block17,block18;
var block19,block20,block21,block22,block23,block24,block25,

var SlingShot;
var ground1,ground2;
var hexagon;
var hexagonImg;

function preload(){
    hexagonImg=loadImage("polygon.png");
}

function setup() {
    createCanvas(1500,600);
    engine = Engine.create();
      world = engine.world;
  
  
    block1 = new Block(600,260,30,40);
    block2 = new Block(570,260,30,40);
    block3 = new Block(540,260,30,40);
    block4 = new Block(630,260,30,40);
    block5 = new Block(660,260,30,40);
  
  
  
    block6 = new Block(585,220,30,40);
    block7 = new Block(555,220,30,40);
    block8 = new Block(615,220,30,40);
    block9 = new Block(645,220,30,40);
  
  
  
    bolck10 = new Block(600,170,30,40);
    block11 = new Block(570,180,30,40);
    block12 = new Block(630,180,30,40);
  
  
    block13 = new Block(600,140,30,40);
  
    ground1 = new Ground(600,285,200,10);
    ground2 = new Ground(900,195,200,10);
    
  
  
    block14 = new Block(900,170,30,40);
    block15 = new Block(930,170,30,40);
    block16 = new Block(870,170,30,40);
    block17 = new Block(840,170,30,40);
    block18 = new Block(960,170,30,40);
  
    block19 = new Block(900,140,30,40);
    block20 = new Block(930,140,30,40);
    block21 = new Block(870,140,30,40);
  
    block22 = new Block(900,110,30,40);

  
    hexagon = new Hexagon(50,200,30,30);
  
    ball = Bodies.circle(50,200,20);
    World.add(world,ball);
  
    slingshot = new SlingShot(this.ball,{x:150, y:160});
  
  }
  function draw() {
    background("grey");
    Engine.update(engine);
  
    fill(rgb(135, 205, 236));
  
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
  
    fill("black");
    block6.display();
    block7.display();
    block8.display();
    block9.display();
  
    fill("green");
    bolck10.display();
    block11.display();
    block12.display();
    fill("red");
  
    block13.display();
  
    fill("blue");
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    fill("lightGreen");
  
    block19.display();
    block20.display();
    block21.display();
    fill("pink");
  
    block22.display();
    block23.display();
    block24.display();
    block25.display();

    ground1.display();
    ground2.display();
   
  
    imageMode(CENTER);
    image(img,hexagon.position.x,hexagon.position.y,40,40);
  
    sling.display();
  }
  
  
  function mouseDragged(){
    Matter.Body.setPosition(this.hexagon, {x: mouseX , y: mouseY});
  }
  
  
  function mouseReleased(){
    sling.fly();
  }
  
  function keyPressed(){
      if(keyCode === 32)
      {
          Matter.Body.setPosition(hexagon.body,{x:235, y:420})
          slingshot.attach(player.body);
      }
  }