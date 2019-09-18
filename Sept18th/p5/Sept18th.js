var x=0;
var y=0;
var px=0;
var py=0;
var easing=.04;
var easing2=0.07;
var circles = [];
var offset=0;
var circle = {
    cx: random(width),
    cy: random(height),
    cr: 40
}
var i = 0; i < circles.length;i++

function setup(){
 
    createCanvas(windowWidth,windowHeight);
    background(random(255),random(255),random(255));

    stroke(0,102);
    for (var i=0; i<25; i++){
      
        var circle = {
           cx: random(width),
           cy: random(height),
           cr: 40
        };
        circles.push(circle);
     }
     for (var i = 0; i < circles.length;i++){
        fill(random(255), random(255), random(255),200);
        noStroke();
        ellipse(circles[i].cx,circles[i].cy,circles[i].cr*2,circles[i].cr*2);
 }
}
  
 function draw(){
  
drawLine();

drawFlashingCircles();

}


 function drawLine(){

    let x1= map(mouseX,0,width,0,255,true);
    let x2= map(mouseY,0,width,0,255,true);
    let x3= map(mouseY,0,width,0,255,true);
    stroke(random(255),random(255),random(255));
 
    if (keyIsPressed){
     var targetX=mouseX;
     x+=(targetX-x)*easing;
     var targetY=mouseY;
     y+=(targetY-y)*easing;
     var weight=dist(x,y,px,py);
     strokeWeight(weight);
     line(x,y,px,py);
     py=y+10;
     px=x+10;

}
 }

 function drawLine2(){

    let x1= map(mouseX,0,width,0,255,true);
    let x2= map(mouseY,0,width,0,255,true);
    let x3= map(mouseY,0,width,0,255,true);
    stroke(x1,x2,x3);
 
    if (mouseIsPressed){
     var targetX=mouseX;
     x+=(targetX-x)*easing;
     var targetY=mouseY;
     y+=(targetY-y)*easing;
     var weight=dist(x,y,px,py);
     strokeWeight(weight);
     line(10,10,px,py);
     py=y+10;
     px=x+10;


 }
}

 function drawFlashingCircles(){

var offset=0
    for (var ex = 0; ex <= width; ex = ex + 50) {
        fill(random(255), 0, random(200));
        ellipse(ex + offset, random, 25, 25);
    
    
     }
 }
  
 function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
  
 }
 