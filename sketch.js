function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  fixedRect= createSprite(200, 200, 50, 80); 
  fixedRect.shapeColor = "olive"; 
  movingRect= createSprite(400, 200, 80, 30);
   movingRect.shapeColor = "olive";
}

function draw() {
  background(255,255,255);  
  movingRect.x=mouseX;
   movingRect.y=mouseY;
    var disx = movingRect.width/2+fixedRect.width/2;
    var disy = movingRect.height/2+fixedRect.height/2;
   if(movingRect.x-fixedRect.x<disx && fixedRect.x-movingRect.x<disx 
    && movingRect.y-fixedRect.y<disy && fixedRect.y-movingRect.y<disy)
   { 
     fixedRect.shapeColor = "red"; 
     movingRect.shapeColor = "red"; 
    }
     else { 
       fixedRect.shapeColor = "olive";
      movingRect.shapeColor = "olive"; 
    }
  drawSprites();
}