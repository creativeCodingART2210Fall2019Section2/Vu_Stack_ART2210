a=0;
b=0;

function setup(){
 
    createCanvas(windowWidth,windowHeight);
    angleMode(DEGREES);
    
  
}

function draw(){

    translate(windowWidth/2,windowHeight/2)
    //background('#265880');
    //background('#293BFF');
    //background('#3E90FA');
    //background('#2BDDE3');
    background(0);

    //drawFish();

    //drawSquuu();

    drawCircle1();
   
    drawCircle2();

    drawTimeCircle2();

    drawCircle3();

    drawCircle4();
    
    drawCircle5();

    drawCircle6();

    drawCircle7();

    drawCircle8();

    drawCircle9();
    


}

function drawFish(){


let fish = rect(0,-200,150,1000);

    let hr = hour();
    let mn = minute();
    let sc = second();


    


}

function drawCircle1(){

    

    let hr = hour();
    let mn = minute();
    let sc = second();

    rotate(-90);
}

function drawCircle2(){
    
    translate(-100,-200);
    
    strokeWeight(20);
    //stroke('#28ADEB');
    stroke(0);
    //fill('#2E66F5');
    //fill('#FA3035');
    fill(0);
    ellipse(0,0,300,300);

    push();
    a=a+0.05;
    rotate(a);
    strokeWeight(20);
    stroke('#36E7FF');
    noFill();
    arc(0,0,300,300,-180,-80);
    pop();

}

function drawTimeCircle2(){

    //translate(-100,-200);

    let hr = hour();
    let mn = minute();
    let sc = second();
    
    strokeWeight(5);
    noFill();
    //stroke('#3697FF');
    //stroke('#FFB145');
    stroke(255);
    let secondAngle = map(sc, 0, 60, 0, 360);
    arc(0, 0, 225, 225, 0, secondAngle);

    stroke(255);
    noFill();
    let minuteAngle = map(mn, 0, 60, 0, 360);
    arc(0, 0, 150, 150, 0, minuteAngle);

    stroke(255);
    noFill();
    let hourAngle = map(hr % 12, 0, 12, 0, 360);
    arc(0, 0, 75, 75, 0, hourAngle);


    push();
    rotate(secondAngle);
    stroke(255);
    line(0,0,110,0);
    pop();

    push();
    rotate(minuteAngle);
    stroke(255);
    line(0,0,75,0);
    pop();

    push();
    rotate(hourAngle);
    stroke(255);
    line(0,0,36,0);
    pop();

    fill(255);
    stroke(255);
    ellipse(0, 0, 30, 30);


}

function drawCircle3(){

    translate(-200,200);

    
    strokeWeight(20);
    stroke(0);
    fill(0);
    ellipse(0,0,300,300);

    push();
    a=a+0.05;
    rotate(a);
    strokeWeight(20);
    //#1CBDFF
    stroke('#36E7FF');
    noFill();
    arc(0,0,300,300,50,-120);
    pop();

    
    let hr = hour();
    let mn = minute();
    let sc = second();
    
    strokeWeight(5);
    noFill();
    stroke(255);
    let secondAngle = map(sc, 0, 60, 0, 360);
    arc(0, 0, 225, 225, 0, secondAngle);

    stroke(255);
    noFill();
    let minuteAngle = map(mn, 0, 60, 0, 360);
    arc(0, 0, 150, 150, 0, minuteAngle);

    stroke(255);
    noFill();
    let hourAngle = map(hr % 12, 0, 12, 0, 360);
    arc(0, 0, 75, 75, 0, hourAngle);


    push();
    rotate(secondAngle);
    stroke(255);
    line(0,0,110,0);
    pop();

    push();
    rotate(minuteAngle);
    stroke(255);
    line(0,0,75,0);
    pop();

    push();
    rotate(hourAngle);
    stroke(255);
    line(0,0,36,0);
    pop();

    fill(255);
    noStroke();
    ellipse(0, 0, 30, 30);


}

function drawCircle4(){

    translate(100,300);

    strokeWeight(20);
    stroke(0);
    fill(0);
    ellipse(0,0,400,400);

    push();
    a=a+0.08;
    rotate(a);
    strokeWeight(20);
    stroke('#36E7FF');
    noFill();
    arc(0,0,400,400,-40,120); //fix the end maybe
    pop();


    let hr = hour();
    let mn = minute();
    let sc = second();
    
    strokeWeight(5);
    noFill();
    stroke(255);
    let secondAngle = map(sc, 0, 60, 0, 360);
    arc(0, 0, 300, 300, 0, secondAngle);

    stroke(255);
    noFill();
    let minuteAngle = map(mn, 0, 60, 0, 360);
    arc(0, 0, 200, 200, 0, minuteAngle);

    stroke(255);
    noFill();
    let hourAngle = map(hr % 12, 0, 12, 0, 360);
    arc(0, 0, 100, 100, 0, hourAngle);


    push();
    rotate(secondAngle);
    stroke(255);
    line(0,0,150,0);
    pop();

    push();
    rotate(minuteAngle);
    stroke(255);
    line(0,0,100,0);
    pop();

    push();
    rotate(hourAngle);
    stroke(255);
    line(0,0,50,0);
    pop();

    fill(255);
    noStroke();
    ellipse(0, 0, 30, 30);

}

function drawCircle5(){

    translate(100,-800);

    strokeWeight(20);
    stroke(0);
    fill(0);
    ellipse(0,0,400,400);
    
    push();
    a=a+0.1;
    rotate(a);
    strokeWeight(20);
    stroke('#36E7FF');
    noFill();
    arc(0,0,400,400,-90,20);
    pop();

    let hr = hour();
    let mn = minute();
    let sc = second();
    
    strokeWeight(5);
    noFill();
    stroke(255);
    let secondAngle = map(sc, 0, 60, 0, 360);
    arc(0, 0, 300, 300, 0, secondAngle);

    stroke(255);
    noFill();
    let minuteAngle = map(mn, 0, 60, 0, 360);
    arc(0, 0, 200, 200, 0, minuteAngle);

    stroke(255);
    noFill();
    let hourAngle = map(hr % 12, 0, 12, 0, 360);
    arc(0, 0, 100, 100, 0, hourAngle);


    push();
    rotate(secondAngle);
    stroke(255);
    line(0,0,150,0);
    pop();

    push();
    rotate(minuteAngle);
    stroke(255);
    line(0,0,100,0);
    pop();

    push();
    rotate(hourAngle);
    stroke(255);
    line(0,0,50,0);
    pop();

    fill(255);
    noStroke();
    ellipse(0, 0, 30, 30);

}

function drawCircle6(){

    translate(-200,150);

    strokeWeight(20);
    stroke(0);
    fill(0);
    ellipse(0,0,400,400);
    

    push();
    a=a+0.1;
    rotate(a);
    strokeWeight(20);
    stroke('#36E7FF');
    noFill();
    arc(0,0,400,400,-140,20);
    pop();

    let hr = hour();
    let mn = minute();
    let sc = second();
    
    strokeWeight(5);
    noFill();
    stroke(255);
    let secondAngle = map(sc, 0, 60, 0, 360);
    arc(0, 0, 300, 300, 0, secondAngle);

    stroke(255);
    noFill();
    let minuteAngle = map(mn, 0, 60, 0, 360);
    arc(0, 0, 200, 200, 0, minuteAngle);

    stroke(255);
    noFill();
    let hourAngle = map(hr % 12, 0, 12, 0, 360);
    arc(0, 0, 100, 100, 0, hourAngle);


    push();
    rotate(secondAngle);
    stroke(255);
    line(0,0,150,0);
    pop();

    push();
    rotate(minuteAngle);
    stroke(255);
    line(0,0,100,0);
    pop();

    push();
    rotate(hourAngle);
    stroke(255);
    line(0,0,50,0);
    pop();

    fill(255);
    noStroke();
    ellipse(0, 0, 30, 30);

}

function drawCircle7(){

    translate(250,950);

    strokeWeight(20);
    stroke(0);
    fill(0);
    ellipse(0,0,400,400);

    push();
    a=a+0.1;
    rotate(a);
    strokeWeight(20);
    stroke('#36E7FF');
    noFill();
    arc(0,0,400,400,-150,0);
    pop();

    let hr = hour();
    let mn = minute();
    let sc = second();
    
    strokeWeight(5);
    noFill();
    stroke(255);
    let secondAngle = map(sc, 0, 60, 0, 360);
    arc(0, 0, 300, 300, 0, secondAngle);

    stroke(255);
    noFill();
    let minuteAngle = map(mn, 0, 60, 0, 360);
    arc(0, 0, 200, 200, 0, minuteAngle);

    stroke(255);
    noFill();
    let hourAngle = map(hr % 12, 0, 12, 0, 360);
    arc(0, 0, 100, 100, 0, hourAngle);


    push();
    rotate(secondAngle);
    stroke(255);
    line(0,0,150,0);
    pop();

    push();
    rotate(minuteAngle);
    stroke(255);
    line(0,0,100,0);
    pop();

    push();
    rotate(hourAngle);
    stroke(255);
    line(0,0,50,0);
    pop();

    fill(255);
    noStroke();
    ellipse(0, 0, 30, 30);

}

function drawCircle8(){

    translate(-300,-50);

    strokeWeight(20);
    stroke(0);
    fill(0);
    ellipse(0,0,300,300);

    push();
    a=a+0.1;
    rotate(a);
    strokeWeight(20);
    stroke('#36E7FF');
    noFill();
    arc(0,0,300,300,-50,120);
    pop();


    let hr = hour();
    let mn = minute();
    let sc = second();
    
    strokeWeight(5);
    noFill();
    stroke(255);
    let secondAngle = map(sc, 0, 60, 0, 360);
    arc(0, 0, 225, 225, 0, secondAngle);

    stroke(255);
    noFill();
    let minuteAngle = map(mn, 0, 60, 0, 360);
    arc(0, 0, 150, 150, 0, minuteAngle);

    stroke(255);
    noFill();
    let hourAngle = map(hr % 12, 0, 12, 0, 360);
    arc(0, 0, 75, 75, 0, hourAngle);


    push();
    rotate(secondAngle);
    stroke(255);
    line(0,0,110,0);
    pop();

    push();
    rotate(minuteAngle);
    stroke(255);
    line(0,0,75,0);
    pop();

    push();
    rotate(hourAngle);
    stroke(255);
    line(0,0,36,0);
    pop();

    fill(255);
    noStroke();
    ellipse(0, 0, 30, 30);

}

function drawCircle9(){

    translate(-30,-1200);

    strokeWeight(20);
    stroke(0);
    fill(0);
    ellipse(0,0,300,300);

    push();
    a=a+0.05;
    rotate(a);
    strokeWeight(20);
    stroke('#36E7FF');
    noFill();
    arc(0,0,300,300,-90,0);
    pop();

    let hr = hour();
    let mn = minute();
    let sc = second();
    
    strokeWeight(5);
    noFill();
    stroke(255);
    let secondAngle = map(sc, 0, 60, 0, 360);
    arc(0, 0, 225, 225, 0, secondAngle);

    stroke(255);
    noFill();
    let minuteAngle = map(mn, 0, 60, 0, 360);
    arc(0, 0, 150, 150, 0, minuteAngle);

    stroke(255);
    noFill();
    let hourAngle = map(hr % 12, 0, 12, 0, 360);
    arc(0, 0, 75, 75, 0, hourAngle);


    push();
    rotate(secondAngle);
    stroke(255);
    line(0,0,110,0);
    pop();

    push();
    rotate(minuteAngle);
    stroke(255);
    line(0,0,75,0);
    pop();

    push();
    rotate(hourAngle);
    stroke(255);
    line(0,0,36,0);
    pop();

    fill(255);
    noStroke();
    ellipse(0, 0, 30, 30);


}

function drawSquuu(){

    
    strokeWeight(10);
    stroke(0);
    noFill();
    triangle(-100,100,0,-200,100,100);
    triangle(-100,100,-100,-100,100,100);
    triangle(-100,100,100,-100,100,100);

}


function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
    angleMode(DEGREES);
 }
 