const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var plinkos=[]
var particle;
var divisions=[]
var score=0
var count=0
var gameState="play";


function setup(){
    createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;
    ground=new Ground(400,800,800,20);

    for(var x=0;x<=800;x=x+80){
       division =new Division(x,650,10,300) 
       divisions.push(division);
    } 

    for(var x=75;x<=800;x=x+50){
        plinko =new Plinko(x,75,10) 
        plinkos.push(plinko);
    } 

    for(var x=50;x<=790;x=x+50){
        plinko =new Plinko(x,175,10) 
        plinkos.push(plinko);
    } 

    for(var x=75;x<=800;x=x+50){
        plinko =new Plinko(x,275,10) 
        plinkos.push(plinko);
    } 

    for(var x=50;x<=790;x=x+50){
        plinko =new Plinko(x,375,10) 
        plinkos.push(plinko);
    } 


}


function draw(){
    background("black");

    textSize(35);
    text("Score : "+score,20,40);
    fill("white");
    text('100',10,550);
    text('100',90,550);
    text('100',170,550);
    text('100',250,550);
    text('250',330,550);
    text('250',410,550);
    text('250',490,550);
    text('350',570,550);
    text('350',650,550);
    text('500',730,550);

    Engine.update(engine);
   
  if ( gameState === "end") {
    textSize(100);
    text("GameOver", 150, 250);
  }
    
    ground.display();

    for(var i in divisions){
        divisions[i].display();
    }

    for(var i in plinkos){
        plinkos[i].display();
    }

    if(particle!=null){
        particle.display();
        if(particle.body.position.y>760){
            if(particle.body.position.x<300){
                score=score+100
                particle = null
                if ( count>= 5) gameState ="end"; 
            }
            else if(particle.body.position.x>=301 && particle.body.position.x<600){
                score=score+250
                particle = null
                if ( count>= 5) gameState ="end"; 
            }
            else if(particle.body.position.x>=601 && particle.body.position.x<800){
                score=score+350
                particle = null
                if ( count>= 5) gameState ="end"; 
            }
        }
    }

}

function keyPressed()
{
    if(keyCode===DOWN_ARROW){
  if(gameState!=="end")
  {
      count++;
     particle=new Particle(random(100,700), 0, 10); 
  }   
}
}