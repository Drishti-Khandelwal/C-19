var ghostImage;
var doorImage;
var climberImage;
var towerImage;
var spookySound;
var ghost;
var tower;
var door;
var doorGroup;
var climberGroup;
var blockGroup;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
function preload(){
ghostImage = loadImage("ghost-standing.png") ; 
doorImage = loadImage("door.png") ; 
towerImage = loadImage("tower.png");
climberImage = loadImage("climber.png");
spookySound = loadSound("spooky.wav");
}







function setup(){
createCanvas(600,600);
doorGroup = new Group();
climberGroup = new Group();
blockGroup = new Group();
 spookySound.loop();
tower = createSprite(300,300,10,10);
tower.addImage(towerImage);

ghost = createSprite(300,200,20,20);
ghost.addImage(ghostImage);
ghost.scale = 0.3;
  
  
textSize(30);
stroke("red");
fill("white");

}





function draw(){
  background("black");
 if(gameState===PLAY) {
   
 tower.velocityY = 3; 
 if(tower.y>600){
  tower.y = 300;   
 }
   
   if(keyDown("left")){
  ghost.x = ghost.x-5;  
    }
   if(keyDown("right")){
  ghost.x = ghost.x+5;  
    }
   
 if(keyDown("space")){
 ghost.velocityY = -4; 
 } 
   
   ghost.velocityY = ghost.velocityY+0.2;
   door() ;
   
   if(ghost.isTouching(blockGroup)||(ghost.y>600)){
    gameState = END; 
     
   }
   
   if(ghost.isTouching(climberGroup)){
    ghost.velocityY = 0; 
     
   }
 }
   

  if(gameState===END){
   text('GAME OVER',300,300);
    
    
  
 
   
 } 
  
  

  

drawSprites() ; 
}
function door(){
 if(frameCount%100===0){
var door = createSprite(140,0,10,10);  
door.addImage(doorImage) ; 
door.scale = 1;  
 door.velocityY = 2;
door.x = Math.round(random(100,500));

 var climber = createSprite(140,60,10,10);
 climber.addImage(climberImage);
  climber.scale = 0.8;
   climber.velocityY = 2;
climber.x = door.x;
var block = createSprite(140,70,70,10);
 block.visible = false; 
 block.velocityY = 2;
  block.x = door.x;
  doorGroup.add(door);
  climberGroup.add(climber);
  blockGroup.add(block);
}
}
  
