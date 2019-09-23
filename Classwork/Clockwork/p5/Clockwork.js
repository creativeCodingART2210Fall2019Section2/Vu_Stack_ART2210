function setup(){
 
    createCanvas(windowWidth,windowHeight);
    angleMode(DEGREES);
    
  
}



function draw(){
   background(0,0,0);
translate(windowWidth/2,windowHeight/2);
rotate(-90);

let hr = hour();
let mn = minute();
let sc = second();




strokeWeight(4);
noFill();
stroke(255);
let secondAngle = map(sc, 0, 60, 0, 360);
arc(0, 0, 300, 300, 0, secondAngle);

stroke(180,80,150);
noFill();
let minuteAngle = map(mn, 0, 60, 0, 360);
arc(0, 0, 280, 280, 0, minuteAngle)

stroke(150,255,100);
noFill();
let hourAngle = map(hr % 12, 0, 12, 0, 360);
arc(0, 0, 260, 260, 0, hourAngle);

push();
rotate(secondAngle);
stroke(255);
line(0,0,100,0);
pop();

push();
rotate(minuteAngle);
stroke(180,80,150);
line(0,0,75,0);
pop();

push();
rotate(hourAngle);
stroke(150,255,100);
line(0,0,50,0);
pop();


}


 function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
    angleMode(DEGREES);
 }
 