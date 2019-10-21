var ballDiameter = 30;
var bomb_diameter = 30;
var xpoint;
var ypoint;
var mouseX;
var mouseY;
var zapper = 6;
var numofbombs = 40;
var numofbombs2 = 20;
var bomb = [];
var bombposX =[];
var bombposY = [];
var bombposX2 = [];
var bombposY2 = [];
var bombacceleration = [];
var bombacceleration2 = [];
var bombvelocity = [];
var bombvelocity2 = [];
var time = 0;
var time2 = 0;
var timeperiod = 0;
var timeperiod2 = 0;
var score = 0;
var posX;
var star = [];
var sc = second();

function setup() {

    createCanvas(1080,720);
  
  var temp00 =0, temp01 = -20;
  while(temp01 < height){
    temp00 += 0.02;
    temp01 += temp00;
    timeperiod++;
  }

  var temp000 = 0, temp001 = -20;
  while(temp001 < height){
    temp000 += 0.02;
    temp001 += temp000;
    timeperiod2++;
  }
  
  posX = zapper + 0.5*ballDiameter - 2;
  xpoint = 0.5 * width;
  ypoint = height - 0.5*ballDiameter + 1;
  

  initbombpos();
  initbomber2();

}

function draw() {

  background(0);

  drawStars();

  fill(255,0,0);
  rect(0, 0, zapper, height);
  rect(1074,0,6,720);
  
  scoreUpdate();
  
  //drawBomb2();

  fill(255, 0 ,0);

  for(var i=0; i<numofbombs; i++){
    ellipse(bombposX[i], bombposY[i], bomb_diameter, bomb_diameter);
    //arc(bombposX[i],bombposY[i],30,-45,45,clockwise);
    //rect(bombpoX[i],bombposY[i],10,20);
  }
  
  for(var i=0; i<numofbombs2; i++){
    ellipse(bombposX2[i], bombposY2[i], bomb_diameter, bomb_diameter);
  }
  updatebombpos();
  updatebomber2();
  
    ballX = 400;
    fill(255)
    //ellipse(xpoint, ypoint, ball_diameter, ball_diameter);
    ellipse(mouseX,mouseY,ballDiameter,ballDiameter);
    
    
    
  /*xpoint -=3;
  
  if(keyCode === RIGHT_ARROW && (xpoint + 0.5 *ball_diameter) <width){
    xpoint +=8;
  }
  else if(keyCode === LEFT_ARROW &&(xpoint + 0.5 * ball_diameter) <width){
      xpoint -=3;
  }*/
  



  if (mouseX == posX || mouseX > width-20 || bombCollisionTest() || bombCollisionTest2()){
    gameover();
  }

  
  time++;
  time2++;

  

}

function drawStars(){
    
    noStroke();
    fill(255);
  
     let t = frameCount / 1000000;
     // create a random number of stars each frame
   for (let i = 0; i < .025; i++) {
     star.push(new stars()); // append star object
   }
 
   // loop through stars with a for..of loop
   for (let ball of star) {
     ball.update(t*2); // update star position
     ball.display(); // draw star
   };
 }
 
   function stars() {
     this.posX = 0;
     this.posY = random(-50, 0);
     this.initialangle = random(0,2*PI);
     //random(0, 2 * PI);
     this.size = random(2, 5);
     this.radius = sqrt(random(pow(width / 2, 2)));
 
     this.update = function(time) {
         // x position follows a circle
         let w = 10; // angular speed
         let angle = w * time + this.initialangle;
         this.posY = width / 2 + this.radius * sin(angle);
      // different size stars fall at slightly different x speeds
      this.posX += pow(this.size, .5);
 
      // delete star if past end of screen
      if(this.posX > width) {
        let index = star.indexOf(this);
        star.splice(index, 1);
      };
     }
  
    this.display = function() {
     
      ellipse(this.posX, this.posY, this.size);
    };
   }
 

function initbombpos(){
  for(var i=0; i<numofbombs; i++){
    bombacceleration[i] = random(0.06, 0.09);
    bombvelocity[i] = random(0, 13);
    bombposX[i] = random(zapper+(.05*ballDiameter), width);
    bombposY[i] = random(0, -120);
  } 
}
function updatebombpos(){
  
  for(var i=10; i<numofbombs; i++){
    bombvelocity[i] += bombacceleration[i];
    bombposY[i] += bombvelocity[i];
  }
  
  if(time > timeperiod){
    initbombpos();
    time = 0;
  }
  
}

function initbomber2(){
  for(var i=0; i<numofbombs2; i++){
    bombacceleration2[i] = random(0.06, 0.09);
    bombvelocity2[i] = random(0, 13);
    bombposX2[i] = random(0,-120);
    //bombposX2[i] = random(height);
    bombposY2[i] = random(width)//random(0, 120);
    //bombposY2[i] = width / 2 + sqrt(random(pow(width / 2, 2))) * sin(angle);
  }
}
function updatebomber2(){
  for(var i=10; i<numofbombs2; i++){
    bombvelocity2[i] += bombacceleration2[i];
    bombposX2[i] += bombvelocity2[i];
  }
  
  if(time2 > timeperiod2){
    initbomber2();
    time2 = 0;
  }

}


function bombCollisionTest(){
  var temp = 0.5*(ballDiameter+bomb_diameter)-2;
  var distance;
  
  for(var i=0; i<numofbombs; i++){
    distance = dist(mouseX, mouseY, bombposX[i], bombposY[i]);
    
    if(distance < temp){
      return true;
    }
  }
  return false;
  
}

function bombCollisionTest2(){
  var temp2 = 0.5*(ballDiameter+bomb_diameter)-2;
  var distance2;
  
  for(var i=0; i<numofbombs; i++){
    distance2 = dist(mouseX, mouseY, bombposX2[i], bombposY2[i]);
    
    if(distance2 < temp2){
      return true;
    }
  }
  return false;
  
}


function gameover(){
  fill(225,0,0);
  textSize(100);
  text("YOU DIED", 245, 360);
  noLoop(); 
  
}

function scoreUpdate(){
  score += 5;
  textSize(20);
  fill(225);
  text("TIME: " + int(score/timeperiod), 540, 40);
}

/*
function drawBomb2(){
    
    let t = frameCount / 1000000;

    noStroke();
    fill(255,0,0);
    //create random number each frame
    for(var i=0; i<numofbombs; i++){
        bomb.push(new bombs()); //append new bombs
    }
    //loop with a for loop
    for (let boom of bomb){
        boom.update(t*2); //update bomb pos
        boom.display(); //draw bomb
    };
}

function bombs() {

    this.posX2 = 0;
    this.posY2 = random(-50, 0);
    this.size2 = 30;

    this.update = function(time) {
        // x position follows a circle
        let w = 10; // angular speed
        let angle = w * time + this.initialangle;
        this.posY = width / 2 + this.radius * sin(angle);
     // different size stars fall at slightly different x speeds
     this.posX += pow(this.size, .5);
    }
    if(this.posX > width) {
        let index = boom.indexOf(this);
        boom.splice(index, 1);
      };

    this.display = function() {

     ellipse(this.posX2, this.posY2, this.size2);
    };
}
*/

