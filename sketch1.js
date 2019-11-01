var fixedrect,movingrect;

function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400,200,50,20);
  fixedrect.shapeColor="orange";
  fixedrect.debug=true;
  movingrect=createSprite(400,100,50,20);
  movingrect.shapeColor="orange";
  movingrect.debug=true;
  movingrect.velocityY=1;
  fixedrect.velocityY=-1;
}

function draw() {

  background("black");  


   bounceOff(fixedrect,movingrect);
  drawSprites();
}
function bounceOff(object1,object2){
  if(object1.x-object2.x<object1.width/2+object2.width/2
    && object2.x-object1.x<object1.width/2+object2.width/2){
    object1.velocityX=object1.velocityX*(-1);
    object2.velocityX=object2.velocityX*(-1);       
 
    }
    if(object1.y-object2.y<object1.height/2+object2.height/2
    &&object2.y-object1.y<object1.height/2+object2.height/2){
    object1.velocityY=object1.velocityY*(-1);
    object2.velocityY=object2.velocityY*(-1);
 
    }
}