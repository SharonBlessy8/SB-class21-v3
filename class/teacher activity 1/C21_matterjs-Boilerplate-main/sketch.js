const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var bottom,left,right, top_wall;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
bottom= new Ground(200,390,400,20);
left = new Ground(10,200,20,400)
right = new Ground(390,200,20,400);
top_wall= new Ground(200,10,400,20);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(51);
  Engine.update(engine);
  bottom.display();
  left.display();
  right.display();
  top_wall.display();
}

