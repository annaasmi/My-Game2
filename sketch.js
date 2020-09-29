const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bgImg;
var bg = "images/bluemoon.png";
var form, a1,a2,a3,a4,a1Img,a2Img,a3Img,a4Img;

function preload(){
    //bgImg = loadImage("images/bluemoon.png");
    getBackgroundImg();
    a1Img = loadImage("images/player1.png");
    a2Img = loadImage("images/player2.png");
    a3Img = loadImage("images/player3.png");
    a4Img = loadImage("images/player4.png");
}

function setup(){
createCanvas(displayWidth-10,displayHeight-120);

a1 = createSprite(250,300,10,10);
a1.addImage("player1",a1Img);
a1.scale = 0.8;

a2 = createSprite(600,350,10,10);
a2.addImage("player2",a2Img);
a2.scale = 0.8;

a3 = createSprite(950,370,10,10);
a3.addImage("player3",a3Img);
a3.scale = 0.8;

a4 = createSprite(1250,350,10,10);
a4.addImage("player4",a4Img);
a4.scale = 0.8;

form = new Form();

}

function draw(){
    if(bgImg)
    background(bgImg);
    
    form.display();

    drawSprites();
}
async function getBackgroundImg() { 
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo"); 
    var responseJSON = await response.json(); 
    var dateTime = responseJSON.datetime;
    var hour = dateTime.slice(11,13);
    if(hour >= 06 && hour <= 19){
        bg = "images/bluemoon.png"
    }else{
        bg = "images/graveyard.png"
    }
    bgImg = loadImage(bg);
 }
