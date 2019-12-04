var c = ['#ff0000',
        '#fae',
        '#0000FF']
const radius = 100;
var x,y;
var d;
let score = 0;
let index0, index1, index2;

var x=0;
var y=0;

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

    index0=c[int(random(0, 3))];
    index1=c[int(random(0, 3))];
    index2=0;

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
        fill(index1);
        noStroke();
        ellipse(circles[i].cx,circles[i].cy,circles[i].cr*2,circles[i].cr*2);
 }
}
  
 function draw(){
  

 }

  
 function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
  
 }
 