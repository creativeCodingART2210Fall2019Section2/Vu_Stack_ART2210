/*let dots = []
let pressed = false;
let noOfDots = 50;
*/
function setup(){
 
    createCanvas(1200,1000);
   /* frameRate(19);
    for (let i=0; i < noOfDots; i++){
        dots[i]= new dots();
    }*/

}
 
function draw(){
    
    //background(238,215,192);
    background(0,0,0);

    

    translate(0,50)
  
    drawLine1(); //Neck
   
    strokeWeight(1); //

    drawLine2(); //Cheek(R)
    drawLine3(); //Chin(R)
    
    strokeWeight(3); //

    drawLine8(); //By the Eye
    drawForehead();

    strokeWeight(2);//

    drawHair1();
    drawHair2();

    strokeWeight(3);
    
    drawCheekCurve();
    drawChin1();

    strokeWeight(6); //


    strokeWeight(1); //

    drawShirt();

    strokeWeight(3); //

    drawNeck();

    strokeWeight(5); //

    drawTopHair();

    strokeWeight(3.5); //

    drawBackHair();

    strokeWeight(2); //

    drawEar();
    
    strokeWeight(3); //

    drawInsideFace();

    strokeWeight(1); //

   /* drawGlasses();

    drawColorThis2();
    drawGlasssesLines();

    drawText4fun();
*/
    //drawLoopTest();

    drawAddOn();

    
    
    strokeWeight(3);
    drawLinesPlease();

    //noStroke();
    drawQuadCoverUp();

    strokeWeight(3);
    drawLinesPlease2();
    
    
    //drawWhatIsThis();

    noStroke();

    drawCoverUp();

    drawBauhaus1();
    strokeWeight(5);
    drawMoreMountainLines();

    //noStroke();
    //drawBIV();
   
    drawStars();
    drawGlassesFinal();

    drawShoulders();

    //drawfloatingCircles();
}

function drawLine1(){ //Neck

    stroke('0,0,0');
    strokeWeight(3);
    line(330,385,330,660);
    fill(0,0,0);
    //quad(250,350,250,340,585,50,585,85);
}

function drawLine2(){ //Cheek(R)

    
    stroke('0,0,0');
    line(330,385,400,525);

}

function drawLine3(){ //Chin(R)
    
    stroke('0,0,0');
    line(400,525,530,585)

}

function drawChin1(){ //Chin1

    noFill();
    stroke('0,0,0');
    var x1=355
    var y1=-70
    var x2=330
    var y2=430
    var x3=530
    var y3=585
    var x4=400
    var y4=415
    curve(x1,y1,x2,y2,x3,y3,x4,y4);

/*
x1	Number: x-coordinate for the beginning control point
y1	Number: y-coordinate for the beginning control point
x2	Number: x-coordinate for the first point
y2	Number: y-coordinate for the first point
x3	Number: x-coordinate for the second point
y3	Number: y-coordinate for the second point
x4	Number: x-coordinate for the ending control point
y4	Number: y-coordinate for the ending control point
    
point(330,432.5);
point(412,515);
*/
}


function drawLine4(){ //Chin(L1)

    
    line(530,585,570,560);

}
function drawLine5(){ //Chin(L2)

    line(570,560,590,530);

}

function drawLine6(){ //Cheeks

    stroke('0,0,0');
    strokeJoin(ROUND);
    line(590,530,680,380);
    line(680,380,650,290)
}

function drawLine7(){ //CheekArc

    var x1=200
    var y1=75
    var x2=650
    var y2=290
    var x3=400
    var y3=525
    var x4=75
    var y4=75
    noFill();
    curve(x1,y1,x2,y2,x3,y3,x4,y4);

}

function drawCheekCurve(){ //drawCheekCurve

    stroke('0,0,0');
    //line(645, 350, 680, 425);
    //line(590, 545, 530, 585);

    bezier(645, 350, 680, 425, 590, 545, 530, 585);
    

/*
    curveVertex(590,530);
    curveVertex(680,380);
    curveVertex(650,290);
*/

}

function drawLine8(){ //By the Eye

    line(645,350,670,300);

}

function drawForehead(){ //Forehead

    line(670,300,670,250);

}

function drawHair1(){ //drawHair1

    line(670,240,550,150);

}
function drawHair2(){ //drawHair2

    line(550,150,380,290);
    noFill();
    triangle(364,250,384,250,374,350);

}

function drawShoulders(){  //Shoulders

    line(552,570,750,570);
    line(200,590,328,590);


}

function drawShirt(){ //Shirt

    line(200,590,400,900);
    line(400,900,750,570);


}

function drawNeck(){ //Neck

    line(530,585,320,670);

}

function drawTopHair(){ //TopHair

    curve(-2500,1000,290,50,670,240,-180,400);
   
}

function drawBackHair(){ //BackHair

    line(290,50,290,250);

}

function drawEar(){

    stroke('0,0,0');
    var x1=500
    var y1=200
    var x2=350
    var y2=250
    var x3=330
    var y3=385
    var x4=800
    var y4=1500

    curve(x1,y1,x2,y2,x3,y3,x4,y4);

}

function drawInsideFace(){

    var x1=1500
    var y1=100
    var x2=670
    var y2=240
    var x3=412
    var y3=530
    var x4=100
    var y4=100
    curve(x1,y1,x2,y2,x3,y3,x4,y4);

}

function drawGlasses(){

    noStroke();
    fill(38,53,239);
    quad(412,350,412,300,515,270,515,370);

}

function drawColorThis(){ //Color Triangle
    
    
    noStroke();
    fill('yellow');
    triangle(500,600,550,600,525,750);

    fill('red')
    ellipse(660,80,100,100);
/*
    noStroke();
    fill(7,0,126);
    quad(515,270,515,370,650,350,650,340);
*/
    noStroke();
    fill(0,0,255,160);
    quad(515,270,515,370,650,350,650,340);



}

function drawColorThis2(){

    noStroke();
    fill('red');
    rect(290,380,30,500);

    fill(0,0,0);
    rect(320,425,10,400);

    fill(131,9,0);
    rect(300,425,20,400);
    
}

function drawGlasssesLines(){

    stroke('0,0,0');
    strokeWeight(3);
    line(450,280,510,380);

}

function drawText4fun(){



}

function drawLoopTest(){

    strokeWeight(1);
   for (var i=20; i<400; i += 60) {
       line(i,40,i+60,80);
   }
}

function drawAddOn(){
 
 /*  textSize(40);
   noStroke();
   fill(134,133,120,100);
   textFont('Helvetica');
   text('s',600,400);

   textSize(40);
   noStroke();
   fill(134,133,120,100);
   textFont('Helvetica');
   text('t',700,400);

   textSize(40);
   noStroke();
   fill(134,133,120,100);
   textFont('Helvetica');
   text('a',800,400);

   textSize(40);
   noStroke();
   fill(134,133,120,100);
   textFont('Helvetica');
   text('c',600,550);

   textSize(40);
   noStroke();
   fill(134,133,120,100);
   textFont('Helvetica');
   text('k',850,550);
*/

   textSize(40);
   noStroke();
   fill(250,250,250,50);
   textFont('Helvetica');
   text('THE',722,250);

   textSize(40);
   noStroke();
   fill(250,250,250,75);
   textFont('Helvetica');
   text('ONE',722,300);   

   textSize(40);
   noStroke();
   fill(250,250,250,100);
   textFont('Helvetica');
   text('&',722,400);

   textSize(40);
   noStroke();
   fill(250,250,250,125);
   textFont('Helvetica');
   text('ONLY',722,500);

   textSize(40);
   fill(250,250,250);
   textFont('Helvetica');
   text('STACK',722,550);

}

function drawBackGround(){
noStroke();
    for (var y=0; y<height + 85; y += 80) {
        fill(41,109,213,50);
        rect(150,y,250,30);
    }

    for (var y=30; y<height + 85; y += 80) {
        fill(219,148,187,100);
        rect(100,y,50,50);
    }
}

function drawBackGround2(){

    noStroke();
    stroke('0,0,0');
   triangle(400,900,1200,148,1200,1000);

}

function drawBauhaus1(){
    
    noStroke();
    //fill(164,5,8,200);
    fill(250,250,250,200);
    quad(698,620,720,600,1000,600,1000,620);

    //fill(230,149,31,300);
    fill(250,250,250,300);
    quad(677-3,640+3,698-3,620+3,950,620+3,950,640+3);

    //fill(237,220,56,200);
    fill(250,250,250,200);
    quad(657-6,660+6,679-6,640+6,900,640+6,900,660+6);

    //fill(8,145,31,300);
    fill(250,250,250,300);
    quad(636-9,680+9,658-9,660+9,850,660+9,850,680+9);

    
}

function drawBIV(){

    fill(5,98,157,200);
    quad(593,720,620,695,850,695,850,720);


}

function drawWhatIsThis(){

    noStroke();
    fill('0,0,0');
    rect(758.5,550,4.5,200);
    
    fill('yellow');
    ellipse(880,400,40,40);

    fill('0,0,0');
    quad(848,300,845,300,1000,700,1000,710);

    
}

function drawMoreMountainLines(){

strokeWeight(5);
stroke(255,200,122);
line(600,600,304,748);
line(600,600,678,635);

}

function drawLinesPlease(){
    strokeWeight(3);
    for (var i=140; i<500; i += 20) {
        //no loop here :c
        stroke(255,200,122);
        line(200,590,i+i*2,900)
    }
    
    stroke(255,200,122);
    line(200,590,650,700);

}


function drawLinesPlease2(){

    strokeWeight(3);
    for (var i=50; i<2500; i += 60) {
        line(600,600,i-i/2,900);


    }


}

function drawStars(){

    fill(33,144,250);
    strokeWeight(1);
    stroke(250,250,250,200);
   
        ellipse(150,300,7,7);
        ellipse(180,285,9,9);
        ellipse(200,265,6,6);

    fill(232,190,61);
        ellipse(50,50,11,11);
    fill(33,144,250);
        ellipse(350,80,10,10);

        ellipse(180,380,5,5);
    fill(184,47,253);
        ellipse(183,400,7,7);
    fill(33,144,250);
        ellipse(180,420,4,4);

        ellipse(90,550,7,7);
        ellipse(380,500,7,7);
 
}

function drawCoverUp(){

fill(0,0,0);

    quad(400,900,624,689,1200,689,1200,950);

    triangle(331.5,500,331.5,664,400,635.5); 

    quad(0,850,303,750,407,910,0,950);
}

function drawQuadCoverUp(){

fill(0,0,0);
    strokeWeight(.5);
    quad(500,650,304,750,400,898,665.5,650);
    strokeWeight(3);
    quad()
}

function drawGlassesFinal(){

    strokeWeight(5);
    stroke(250,250,250);
    noFill();
        line(450,310,700,310);
        line(700,310,700,360);
        line(700,360,650,360);

}

function drawfloatingCircles(){

for(let i=0; i<noOfDots; i++){
    dots[i].display();
}

class Dot{
    constructor(){
        this.reset();
    }
    grow(){
        this.CurrStroke+=this.speed;
        if(this.CurrStroke > this.GoalStroke){
            this.reset()
        }
    }
    reset(){
        this.x = this.getRandomInt(windowWidth)
        this.y = this.getRandomInt(windowHeight)
        this.GoalStroke = this.getRandomInt(50,150)
        this.CurrStroke = 0;
        this.r = this.getRandomInt(255)
        this.g = this.getRandomInt(255)
        this.b = this.getRandomInt(255)
        this.a = 0.4
    this.speed = this.getRandomInt(0,3)
    console.log(this.speed);
    }
    display(){
        let dotColor = 'rgba('+this.r+','+this.g+','+this.b+','+this.a+')';
        strokeWeight(this.CurrStroke);
    stroke(dotColor);
    if(pressed) this.moveToMouse();
        PointerEvent(this.x,this.y);
        this.grow();
    }
    getRandomInt(i,j=null){
        if(j===null) return Math.ceil(random(i))
        else return Math.ceil(random(i,j))
    }
    moveToMouse(){
        console.log("mouse",mouseX,mouseY)
        console.log("this",this.x,this.y)

        if(this.x-speed > mouseX) this.x -= this.speed;
        else if(this.x+this.speed < mouseX) this.x += this.speed;

        if(this.y-speed > mouseY) this.y -= this.speed;
        else if(this.y+this.speed < mouseY) this.y += this.speed;
    }
}
}

function windowResized(){

    resizeCanvas(windowWidth,windowHeight);

} 