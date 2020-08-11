//Create variables here
var canvas
var dog,happyDog,dogImage;
var database;
var foodS;
var foodStock;
function preload()
{
  dogImage=loadImage("dogImg.png/images");
  happyDog=loadImage("dogImg1.png/images");
	//load images here
}

function setup() {
  canvas=createCanvas(500, 500);
  database=firebase.database();
  dog=createSprite(250,375,5,5);
  dog.addImage(dogImage);
  foodStock=database.ref('Food');
  foodStock.on("value,readStock");
}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW))
{
  writeStock(foodS);
  dog.addImage(happydog);
}
  drawSprites();
  //add styles here
  textSize(15);
}
function writeStock(x){
  if(x<=0)
  {
    x=0;
  }
  else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}

function readStock(data){
  foodS=data.val();
}


