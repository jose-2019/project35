//Create variables here
var dog,dogImage,happyDog,foodS,foodStock,database;

function preload()
{
  //load images here
  dogImage=loadImage("dogImg.png");
  happyDog=loadImage("dogImg1.png");

}

function setup() {

	createCanvas(500, 500);

database = firebase.database();

dog=createSprite(250,250,50,50);
dog.addImage(dogImage);
dog.scale=0.3;

foodStock=database.ref('Food');
foodStock.on("value",readStock,showError)
}


function draw() {  

background(46, 139, 87)

if(keyWentDown(UP_ARROW)){

writeStock(foodS);
dog.addImage(happyDog);

}

  drawSprites();
  //add styles here
  textSize(25);
fill("red")
text("Food Remaining:"+foodS,100,100)

}

function readStock(data){

  foodS=data.val();

}

function writeStock(x){

  if(x<=0){
    x=0
    }else{
      x=x-1;
    }

database.ref('/').update({

  Food:x

})

}
function showError(){
console.log("error");

}