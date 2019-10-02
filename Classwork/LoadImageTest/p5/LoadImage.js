var img;

function preload(){

    img=loadImage("https://github.com/TheOneAndOnlyStack/Vu_Stack_ART2210/raw/master/Classwork/LoadImageTest/p5/Image/IMG_3184.JPG");
    
}

function setup(){

    createCanvas(windowWidth,windowHeight);


}

function draw(){

    //background('#fae');

    image(img,0,0);

    noStroke();
    fill(0);
    rect(windowWidth/2,windowHeight/2,100,100);


}

function windowResized(){

    windowResized(windowWidth,windowHeight);

}