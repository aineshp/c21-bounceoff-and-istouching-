var fixedrect,movingrect;
var gameobject1,gameobject2,gameobject3,gameobject4;
function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400,200,50,20);
  fixedrect.shapeColor="orange";
  movingrect=createSprite(150,250,50,20);
  movingrect.shapeColor="orange";
  gameobject1=createSprite(50,200,20,20);
  gameobject1.shapeColor="white";
  gameobject2=createSprite(100,200,20,20);
  gameobject2.shapeColor="white";
  gameobject3=createSprite(150,200,20,20);
  gameobject3.shapeColor="white";
  gameobject4=createSprite(200,200,20,20);
  gameobject4.shapeColor="white";
}

function draw() {

  background("black");  
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;

  if (isTouching(movingrect,gameobject1)){
    gameobject1.shapeColor="blue";
   movingrect.shapeColor="red";
 }
 else{
   movingrect.shapeColor="orange";
   gameobject1.shapeColor="white";
 }
  
  drawSprites();
  
}

function isTouching(object1,object2){
  if(object1.x-object2.x<object1.width/2+object2.width/2
    && object2.x-object1.x<object1.width/2+object2.width/2
    &&object1.y-object2.y<object1.height/2+object2.height/2
    &&object2.y-object1.y<object1.height/2+object2.height/2){
 return true;
    }
 else{
   return false;
 }
}