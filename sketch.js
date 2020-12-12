var movingRect, fixedRect ;
function setup() {
  createCanvas(400,400);
  movingRect = createSprite(200, 200, 50, 80);
  fixedRect=createSprite(100,100,80,50); 
  fixedRect.shapeColor="green"; 
  movingRect.shapeColor="green"; 
  movingRect.debug = true;
  fixedRect.debug = true;
}
//sum of half of two rect width - x
//

function draw() {
  background(0);  
  movingRect.x=mouseX; 
  movingRect.y=mouseY; 
  console.log(movingRect.x-fixedRect.x); 
  if(movingRect.x-fixedRect.x < (movingRect.width + fixedRect.width)/2 &&
    fixedRect.x-movingRect.x<(movingRect.width+fixedRect.width)/2 && 
    fixedRect.y-movingRect.y<(movingRect.height+fixedRect.height)/2 &&
    movingRect.y-fixedRect.y<(movingRect.height+fixedRect.height)/2)
  {
    fixedRect.shapeColor="red"; 
  movingRect.shapeColor="red"; 
  }
  else
  {
  fixedRect.shapeColor="green"; 
  movingRect.shapeColor="green"; 
  }
  
  drawSprites();
}

