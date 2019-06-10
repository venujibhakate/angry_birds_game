let ground;
let  angry;
let enemy
let box;
let bkgImg;
let sling
let sling2;


function preload(){
  angry = loadImage('bird.png');
  enemy = loadImage('enemy.png');
  bkgImg = loadImage('bg1.jpg');
  sling = loadImage('sling1.png');
  sling2 = loadImage('sling2.png');
}

function setup(){
  createCanvas(700,445);
    // ground = new Ground(0,height-20,width,20);
    // fill(3);
    box = new Box(550,260,30,95);
  
    box2 = new Box(450,260,30,95);
    box3 = new Box(480,200,80,75);
    box4 = new Box(60,305,80,50);
}
function draw(){
    background(bkgImg);
    // fill(130);
    // ground.show();
    box.show();
    box2.show();
    box3.show();
    box4.show();
    // bird.show();
    image(angry,65,95);
    image(enemy,x,y);
    image(sling,90,110);
    image(sling2,60,105);
}

// let circleSize = 25;
// let x = 50;
// let y = 300;

// function setup() {
//   createCanvas(640, 480);
// }

// function draw() {
//   background(123);
//   circle(x, y, circleSize);
//   x+= 1
//   y-=1
// }