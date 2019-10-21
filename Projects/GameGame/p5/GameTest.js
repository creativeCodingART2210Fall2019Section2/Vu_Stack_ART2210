var ball ={
    x: 300,
    y: 200,
    xspeed: 4,
    yspeed: -3
}
var radius = 40;
var x = -radius;
var speed = 1;
var speed2 = 0.05;

var angle=0.0;
var offset=400;
var offset2=200;
var scalar=40;
var scalar2=100;
var a = 0;

var direction = 1;
var x3 = 100;

var star = [];

var num = 60;
var xto = [];
var yto = [];



function setup(){

    createCanvas(windowWidth, windowHeight);
    ellipseMode(RADIUS);
    //background(0);
   /* for(var i = 0; i < 3000; i++){
        star[i] = random(-1000,200);
    }*/
    for(var i=0;i<num;i++){
        xto[i]=0;
        yto[i]=0;
    }
   

}

function draw(){

    background(0);

    

    //drawRace();

    drawRace2();

    drawSpirals();
    
    //drawRandoLines();

    //drawDots();
    drawStars();



    drawWave();
    
    

}

function drawRace(){
    
    x+=speed;
    if(x>width+radius){ //If the shape is off the screen,
        x=radius; //move to the left edge
    }

    
    ellipse(x,60, radius, radius, 360, 0);

    

    x3+= speed*direction;
    if((x3<width-radius) || (x3>radius)){
        direction=-direction; //flip flop
    }
    if(direction == 1){
        arc(x, windowWidth/2, radius, radius, 0.52, 5.76); //Face right
    } else{
        arc(x,windowWidth/2,radius, radius, 3.67, 8.9); // Face left
    }

}

function drawRace2(){

    x+=speed;

    if(x>width+x/2){ //If the shape is off the screen,
        x=-x/2; //move to the left edge
    }

    strokeWeight(3);
    stroke(255);
    line(x-200,60,x,60);





}

function drawRandoLines(){

    for(var x2 =20; x2<width; x2+=20){
        //var mx = mouseX/10;
        var offsetA = random(900,1000);
        var offsetB = random(980,1000);
        stroke(0);
        line(0,x2+offsetA,1000,x2-offsetB);
    }
}

function drawWave(){

    if(keyIsPressed){
        var y1=y1+1;
        var y2=y2+1;
        var y3=y3+1;
        var y4=y4+1;
        var y5=y5+1;
        var y6=y6+1;
        var y7=y7+1;
        var y8=y8+1;
        var y9=y9+1;
        var y10=y10+1;

    }
    var y1 = offset+sin(angle)*scalar;
    var y2 = offset+sin(angle+0.4)*scalar;
    var y3 = offset+sin(angle+0.8)*scalar;
    var y4 = offset+sin(angle+1.2)*scalar;
    var y5 = offset+sin(angle+1.6)*scalar;
    var y6 = offset+sin(angle+2.0)*scalar;
    var y7 = offset+sin(angle+2.4)*scalar;
    var y8 = offset+sin(angle+2.8)*scalar;
    var y9 = offset+sin(angle+3.2)*scalar;
    var y10 = offset+sin(angle+3.6)*scalar;
    stroke(0);
    strokeWeight(1);
    ellipse(80,y1,40,40);
    ellipse(120,y2,40,40);
    ellipse(160,y3,40,40);
    ellipse(200,y4,40,40);
    ellipse(240,y5,40,40);
    ellipse(280,y6,40,40);
    ellipse(320,y7,40,40);
    ellipse(360,y8,40,40);
    ellipse(400,y9,40,40);
    arc(440,y10,40,40,0.52,5.76);
    angle+=speed2;


}

function drawBouncer(){

    ellipse(ball.x,ball.y,40,40);

}

function drawSpirals(){

    var x = offset2+cos(angle)*scalar2;
    var y = offset2+sin(angle)*scalar2;
    ellipse(x,y,20,20);
    angle+-speed2;
}

function drawStars(){
    
   noStroke();
   fill(255);
   /* for(var i = 0; i < star.length; i++){
        star[i]+=0.5;
        var starry = i*0.4;
        fill(255);
        noStroke();
        ellipse(star[i],starry,4,4);
    }*/
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

function drawDots(){
    for(var i=num-1;i>0;i--){
        xto[i]=xto[i-1];
        yto[i]=yto[i-1];
    }
}
xto[0]=mouseX;
yto[0]=mouseY;
for(var i=0;i<num;i++){
    fill(i*4);
    ellipse(xto[i],yto[i],40,40);
}

function windowResized(){

    resizeCanvas(windowWidth,windowHeight);

} 