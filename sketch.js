const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground;
var plank1, plank2;
var hex, hex_img;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16;
var boxx1, boxx2, boxx3, boxx4, boxx5, boxx6, boxx7, boxx8, boxx9, boxx10, boxx11, boxx12, boxx13, boxx14, boxx15, boxx16;
var sling;
var score = 0;

function preload(){
    hex_img = loadImage("polygon.png");
}

function setup(){
    createCanvas(1400,700);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(700,680,1400,40);

    plank1 = new Ground(627,460,390,20);
    plank2 = new Ground(1150,310,390,20);

    hex = Bodies.circle(165,330,40);
    World.add(world, hex);

    //bottom layer of plank 1
    box1 = new Box(477,425,50,50);
    box1.color = "blue";
    box2 = new Box(527,425,50,50);
    box2.color = "blue";
    box3 = new Box(577,425,50,50);
    box3.color = "blue";
    box4 = new Box(627,425,50,50);
    box4.color = "blue";
    box5 = new Box(677,425,50,50);
    box5.color = "blue";
    box6 = new Box(727,425,50,50);
    box6.color = "blue";
    box7 = new Box(777,425,50,50);
    box7.color = "blue";

    //3rd layer of plank1
    box8 = new Box(527,375,50,50);
    box8.color = "pink";
    box9 = new Box(577,375,50,50);
    box9.color = "pink";
    box10 = new Box(627,375,50,50);
    box10.color = "pink";
    box11 = new Box(677,375,50,50);
    box11.color = "pink";
    box12 = new Box(727,375,50,50);
    box12.color = "pink";

    //2nd layer of plank1
    box13 = new Box(577,325,50,50);
    box13.color = "purple";
    box14 = new Box(627,325,50,50);
    box14.color = "purple";
    box15 = new Box(677,325,50,50);
    box15.color = "purple";

    //top layer of plank2
    box16 = new Box(627,275,50,50);
    box16.color = "white";

    //bottom layer of plank 2
    boxx1 = new Box(1000,275,50,50);
    boxx1.color = "blue";
    boxx2 = new Box(1050,275,50,50);
    boxx2.color = "blue";
    boxx3 = new Box(1100,275,50,50);
    boxx3.color = "blue";
    boxx4 = new Box(1150,275,50,50);
    boxx4.color = "blue";
    boxx5 = new Box(1200,275,50,50);
    boxx5.color = "blue";
    boxx6 = new Box(1250,275,50,50);
    boxx6.color = "blue";
    boxx7 = new Box(1300,275,50,50);
    boxx7.color = "blue";

    //3rd layer of plank2
    boxx8 = new Box(1050,225,50,50);
    boxx8.color = "pink";
    boxx9 = new Box(1100,225,50,50);
    boxx9.color = "pink";
    boxx10 = new Box(1150,225,50,50);
    boxx10.color = "pink";
    boxx11 = new Box(1200,225,50,50);
    boxx11.color = "pink";
    boxx12 = new Box(1250,225,50,50);
    boxx12.color = "pink";

    //2nd layer of plank2
    boxx13 = new Box(1100,175,50,50);
    boxx13.color = "purple";
    boxx14 = new Box(1150,175,50,50);
    boxx14.color = "purple";
    boxx15 = new Box(1200,175,50,50);
    boxx15.color = "purple";

    //top layer of plank2
    boxx16 = new Box(1150,125,50,50);
    boxx16.color = "white";

    sling = new SlingShot(hex,{x:160, y:330});
}

function draw(){
    background("lavender");
    Engine.update(engine);

    noStroke();
    fill("green");
    textSize(30);
    text("SCORE: " + score, 1000, 50);

    push();
    fill("black");
    textSize(20);
    noStroke();
    text("Drag the Polygon to destroy the objects", 250,100);
    text("Press Space for another chance", 250, 150);

    sling.display();

    imageMode(CENTER);
    image(hex_img, hex.position.x,hex.position.y,80,80);

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();

    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();


    boxx1.display();
    boxx2.display();
    boxx3.display();
    boxx4.display();
    boxx5.display();
    boxx6.display();
    boxx7.display();
    boxx8.display();
    boxx9.display();
    boxx10.display();
    boxx11.display();
    boxx12.display();
    boxx13.display();
    boxx14.display();
    boxx15.display();
    boxx16.display();

    boxx1.score();
    boxx2.score();
    boxx3.score();
    boxx4.score();
    boxx5.score();
    boxx6.score();
    boxx7.score();
    boxx8.score();
    boxx9.score();
    boxx10.score();
    boxx11.score();
    boxx12.score();
    boxx13.score();
    boxx14.score();
    boxx15.score();
    boxx16.score();

    ground.display();

    plank1.display();
    plank2.display();
}

function mouseDragged(){
    Matter.Body.setPosition(hex, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    sling.fly();
}

function keyPressed(){
    if(keyCode === 32){
        sling.attach(hex);
    }
}