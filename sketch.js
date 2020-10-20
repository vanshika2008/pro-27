const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bob1, bob2, bob3, bob4, bob5 ;
var rope1,rope2,rope3,rope4,rope5 ;
var roof1;

function setup(){
    var canvas = createCanvas(1000,700);
    engine = Engine.create();
    world = engine.world;
    
    roof1 = new Roof(600,100,600,30);

    bob1 = new Bob(350,400,50);
    bob2 = new Bob(450,400,50);
    bob3 = new Bob(550,400,50);
    bob4 = new Bob(650,400,50);
    bob5 = new Bob(750,400,50);
   
    rope1 = new Rope(bob1.body,roof1.body,-200,0);
    rope2 = new Rope(bob2.body,roof1.body,-100,0);
    rope3 = new Rope(bob3.body,roof1.body,0,0);
    rope4 = new Rope(bob4.body,roof1.body,100,0);
    rope5 = new Rope(bob5.body,roof1.body,200,0);

}

function draw(){
    background(240);
    Engine.update(engine);
    roof1.display();

   rope1.display();
    rope2.display();
    rope3.display();
    rope4.display();
    rope5.display();

    bob1.display();
    bob2.display();
    bob3.display();
    bob4.display();
    bob5.display();
 
    
    keyPressed();
}

function keyPressed(){
    if(keyCode === 38 ){
       Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-11,y:11});
       
    }
  }
