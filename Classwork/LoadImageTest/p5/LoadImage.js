var img;
x=0;
y=0;
a=0;



function preload(){

    img=loadImage("https://github.com/TheOneAndOnlyStack/Vu_Stack_ART2210/raw/master/Classwork/LoadImageTest/p5/Image/IMG_3184.JPG");
    arcMode(CENTER);
    angleMode(DEGREES);

}

function setup(){

    createCanvas(windowWidth,windowHeight);


}

function draw(){
    
    //frameRate(3);

    let sc = second;
    let mn = minute;
    let hr = hour;
    
    //background(random(100,200),random(0,50),random(100,200));
    background('#fae');
    
    push();
    a=a+0.01;
    translate(a);
    image(img,a,0);
    pop();

    push();
    noStroke();
    //fill(random(100,200),random(0,50),random(100,200));
    rotate(a);
    translate(500,-500);
    strokeWeight(20);
    noFill();
    stroke('#36E7FF');
    ellipse(0,0,100,100);
    pop();

}

function windowResized(){

    windowResized(windowWidth,windowHeight);

}