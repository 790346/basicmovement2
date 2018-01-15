function move(obj){
  if(obj.keyCode = 39){
    obj.setDirection(0);
    obj.vel.x += 2;
  }
  if(obj.keyCode = 37){
    obj.setDirection(180);
    obj.vel.y -= 2;
  }
  if(obj.keyCode = 38){
    obj.setDirection(90);
    obj.vel.y += 2;
  }
  if(obj.keyCode = 40){
    obj.setDirection(270);
    obj.vel.y += 2;
  }

}
