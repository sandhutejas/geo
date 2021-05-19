const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,iron;
var rubber,stone;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber = new Rubber(900,450,70);
    stone = new Stone(700,320,100,100);  
    iron = new Iron(630,330,60,80)

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
rubber.display();
    stone.display();
    iron.display();
 
}