var PLAY=1
var END= 0
var gameState= 1

var bow
var background1
var score=0
function preload(){
 //load your images here 
 bow0= loadImage("bow0.png")
arrow0= loadImage("arrow0.png")
reds= loadImage("red_balloon0.png")
hi= loadImage("background0.png")
pinks= loadImage("pink_balloon0.png")
greens= loadImage("green_balloon0.png")
  blues= loadImage("blue_balloon0.png")
}

function setup() {
  createCanvas(600, 600);
   background1 = createSprite(50,50,600,600);
   background1.addImage("hi",hi)
  background1.scale=3
  bow = createSprite(500,300,30,30);
  background1.velocityX= -4
  //add code here
  bow.addImage("bow0",bow0);
  redB= new Group();
  pinkB= new Group();
  blueB= new Group();
  greenB= new Group();
  ArrowGroup= new Group();
  bow.scale= 2
}

function draw(){
if (background1.x < 0) {
  background1.x = background1.width / 2;
}
  
 if (gameState=== PLAY){
   bow.y=World.mouseY
  var select_balloon = Math.round(random(1,4))
  if (World.frameCount%80==0){
    if (select_balloon == 1){
      spawnreds()
    }else if (select_balloon == 2){
     spawnpink()
    }else if (select_balloon == 3){
     spawnblue()
    }else if (select_balloon == 4){
    spawngreen()
    }
   }
   if (ArrowGroup.isTouching(redB)){
   redB.destroyEach();
   ArrowGroup.destroyEach();
   score=score+ 3
 }
   if (ArrowGroup.isTouching(pinkB)){
   pinkB.destroyEach();
   ArrowGroup.destroyEach();
   score=score+ 2
 }
   if (ArrowGroup.isTouching(blueB)){
   blueB.destroyEach();
   ArrowGroup.destroyEach();
   score=score+ 1
 }
   if (ArrowGroup.isTouching(greenB)){
   greenB.destroyEach();
   ArrowGroup.destroyEach();
   score=score+ 4
 }  
   if (keyDown("space")){   
   createarrow();
     } 
   if (keyDown("r")){
     gameState = END;
   }
 } 
  else if (gameState === END) {
     arrowGroup.setLifetimeEach(-1)
     redB.setLifetimeEach(-1)
     blueB.setLifetimeEach(-1)
     pinkB.setLifetimeEach(-1)
     greenB.setLifetimeEach(-1)
    if (keyDown("y")){
      gameState = PLAY;
    }
  }

drawSprites();
   text("score= " + score,300,50)
  //add code here
 
}
function createarrow(){
  arrow2= createSprite(470,300,30,30)
  arrow2.addImage("arrow0",arrow0)
  arrow2.y= bow.y
  arrow2.velocityX=-6
  arrow2.scale=0.6
  arrow2.lifetime=620
  //return arrow2
  ArrowGroup.add(arrow2);
  }
function spawnreds(){
  reddie = createSprite(50,50,60,60);
  reddie.velocityX=3
  reddie.addImage("reds",reds)
  reddie.scale=0.2
  reddie.y= Math.round(random(100,600))
  reddie.lifetime= 620
  redB.add(reddie);
}
function spawnblue(){
  bloo = createSprite(50,50,60,60);
  bloo.velocityX=3
  bloo.addImage("blues",blues)
  bloo.scale=0.25
  bloo.y= Math.round(random(100,600))
  bloo.lifetime=620
  blueB.add(bloo);
}
function spawngreen(){
  greenie = createSprite(50,50,60,60);
  greenie.velocityX=3
  greenie.addImage("greens",greens)
  greenie.scale=0.2
  greenie.y= Math.round(random(100,600))
  greenie.lifetime= 620
  greenB.add(greenie);
}
function spawnpink(){
  pinkie = createSprite(50,50,60,60);
  pinkie.velocityX=3
  pinkie.addImage("pinks",pinks)
  pinkie.scale=2.8
  pinkie.y= Math.round(random(100,600))
  pinkie.lifetime= 620
  pinkB.add(pinkie);
}