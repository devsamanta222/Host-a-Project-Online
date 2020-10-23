
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500,500)
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=4;
  
  console.log(ground.x)
  
  FoodGroup=new Group()
  obstacleGroup=new Group()
  

  
}


function draw() {
background("white")
  if(ground.x>300){
    ground.x=ground.width/2
  }
  
  if(keyDown("space")){
    monkey.velocityY=-12
  }
  monkey.velocityY=monkey.velocityY+1;
  monkey.collide(ground)
  
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score:"+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=survivalTime+1
  text("Survival Time:"+survivalTime,100,50) 
  
  
  
  
  drawSprites()
  createBananas()
  createObstacles()
}

function createBananas(){
   if(frameCount%80===0){
     banana=createSprite(500,(120,200),30,40)
     banana.addImage(bananaImage)
     banana.velocityX=-4
     banana.scale=0.1
    // banana.lifetime=
     FoodGroup.add(banana)
   }
}

function createObstacles(){
  if(frameCount%300===0){
    obstacle=createSprite(500,330,30,50)
    obstacle.addImage(obstacleImage)
    obstacle.velocityX=-4
    obstacle.scale=0.1
    //obstacle.lifetime=
    obstacleGroup.add(obstacle)
    
  }
}





