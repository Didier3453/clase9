var jaimito;
function setup() {//funcion principal
  createCanvas(400,400);
  jaimito  = createSprite (20,20,20,20);
}

function draw() 
{
  background('cyan');
  if(keyDown('D')){
    jaimito.position.x = jaimito.position.x + 3;

}

if(keyDown('A')){
  jaimito.position.x = jaimito.position.x -3;
}
  if(keyDown('W')){
    jaimito.position.y = jaimito.position.y - 3;
  }
 if(keyDown('S')){
   jaimito.position.y = jaimito.position.y  +3;
  }






drawSprites();
}




