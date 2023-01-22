var g,rs,ls,pb

const Engine = Matter.Engine;
const World = Matter.World;
const bodies = Matter.Bodies;
const body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;
    g=bodies.rectangle(600,590,1200,20,{isStatic:true})
	//Create the Bodies Here.
    rs=bodies.rectangle(1150,525,10,100,{isStatic:true})
	ls=bodies.rectangle(900,525,10,100,{isStatic:true})
	pb=bodies.circle(100,-100,25)
	
	
	
	
	World.add(world,[g,rs,ls,pb])
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rect(g.position.x,g.position.y,1200,40)
  rect(rs.position.x,rs.position.y,20,100)
  rect(ls.position.x,ls.position.y,20,100)
  ellipseMode(RADIUS)
  ellipse(pb.position.x,pb.position.y,25)
  drawSprites();
 
}
function keyPressed(){
if(keyCode==32){
body.applyForce(pb,pb.position,{x:0.15,y:-0.07})
}
}



