var star = [];
var trees = [];
var Character;
var sc = second();
var mn = minute();
var hr = hour();
var move = 0;
var jump=5;

var ballX=0;
var ballY=600;
var easing=5;
var move=5;

function setup(){

    createCanvas(1000,700);
    
    //trees.push(new Tree());
    
}

function draw(){

background(0);

drawStars();

drawGround();

drawCharacter();


}

function drawGround(){

  noStroke();
  fill(250);
  rect(0,600,windowWidth,100);

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
         //let w = 10; // angular speed
         if (sc = 15 || 30 || 45 || 60)
         w=100;
         else
         w=10;
         
         let angle = w * time + this.initialangle;
         this.posX = width / 2 + this.radius * sin(angle);
      // different size stars fall at slightly different x speeds
      this.posY += pow(this.size, .5);
 
      // delete star if past end of screen
      if(this.posY > height) {
        let index = star.indexOf(this);
        star.splice(index, 1);
      };
     }
  
    this.display = function() {
     
      ellipse(this.posX, this.posY, this.size);
    };
}

function drawCharacter(){

//ballX=3;
ballY=600;
move=5;
ballX += move;

noStroke();
fill('red');
ellipse(ballX,ballY,60,60);


}


function keyPressed(){

ballX=3;
ballY=600;
var move=5;
var jump=5;

  if (keyCode === RIGHT_ARROW && keyIsPressed){
    ballX = ballX + move;
  }
  else if (keyCode === UP_ARROW && keyIsPressed){
    ballY = ballY - jump;
  }
}
