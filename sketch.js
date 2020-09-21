var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var particle;
var divisionHeight=300;
var score =0;
var turn = 0;
var gameState = "play";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
  Engine.update(engine);
   
  if(particle.x < 150 &&  particle.y > 500) {
  
    score = score + 500;
  }

  if(particle.x > 150, particle.x < 350 && particle.y > 500) {

    score = score + 100;
  }

  if(particle.x > 350 && particle.y > 500) {

    score = score + 200;
  }

 if(particle.y > 500) {

   turn = turn + 1;
 }

if(turn === 5) {

  gameState = "end";
}

   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }


   if(gameState === "end") {
   Matter.body.setStatic(particle.body, true);
  textSize(35);
  text("Game Over", 240, 400); 
   }
}

function mousePressed() {
if(gameState !== end) {
 count++;

 particle = new Particle(mouseX, 10, 10, 10);
  }
}