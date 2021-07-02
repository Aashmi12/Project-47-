var bg, bgImg;
var bg1, bg1Img;
function preload(){
bgImg = loadImage("bg.png");
bg1Img = loadImage("bg1.png");
}

function setup() {
  createCanvas(1536,722);
  bg = createSprite(768, 426, 50, 50);
  bg.addImage(bgImg);
  bg.scale = 0.80;

 
}

function draw() {
  background("white"); 
  if(keyDown("space"))
  {
    bg.destroy();

  bg1 = createSprite(768, 426, 50, 50);
  bg1.addImage(bg1Img);
  bg1.scale = 0.80;
  } 
  drawSprites();
}

