/*let img;
function preload(){

    img=loadImage("file:///Users/StackVu/Downloads/School/Fall_2019/ART_2210/Project_1 _ Abstract_Portrait/p5/Canvas2.jpg");

}
*/
function setup(){
 
    createCanvas(1200,1000);
    //Image(img,0,0);
}
 
function draw(){
    //<body background="Canvas2.jpg"></body>
    //background(180,196,211);
    //background(246,245,239); 
   background(238,215,192)
    

    translate(0,100)
  
    //drawBackGround();
    //drawBackGround2();
    
    //drawColorThis();

    drawLine1(); //Neck
   
    strokeWeight(1); //

    drawLine2(); //Cheek(R)
    drawLine3(); //Chin(R)
    //drawLine4(); //Chin(L1)
    //drawLine5(); //Chin(L2)
    //drawLine6(); //Cheeks
    //drawLine7(); //CheekArc
    
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

    drawShoulders();

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

    drawWhatIsThis();    
    drawBauhaus1();
    drawAddOn();

    drawLinesPlease();

   
   

}

function drawLine1(){ //Neck

    stroke(0,0,0);
    strokeWeight(3);
    line(330,385,330,660);
    fill(0,0,0);
    //quad(250,350,250,340,585,50,585,85);
}

function drawLine2(){ //Cheek(R)

    
    stroke(0,0,0);
    line(330,385,400,525);

}

function drawLine3(){ //Chin(R)
    
    line(400,525,530,585)

}

function drawChin1(){ //Chin1

    noFill();
    stroke(0,0,0);
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

    noFill();
    stroke(255, 102, 0);
    //line(645, 350, 680, 425);
    //line(590, 545, 530, 585);

    stroke(0, 0, 0);
    bezier(645, 350, 680, 425, 590, 545, 530, 585);
    

/*
    curveVertex(590,530);
    curveVertex(680,380);
    curveVertex(650,290);
*/

}

function drawLine8(){ //By the Eye

    line(645,350,670,300)

}

function drawForehead(){ //Forehead

    line(670,300,670,250)

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

    line(565,570,750,570);
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

    stroke(0);
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

    stroke(0,0,0);
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
   fill(0,0,0,25);
   textFont('Helvetica');
   text('THE',722,250);

   textSize(40);
   noStroke();
   fill(0,0,0,50);
   textFont('Helvetica');
   text('ONE',722,300);   

   textSize(40);
   noStroke();
   fill(0,0,0,75);
   textFont('Helvetica');
   text('&',722,400);

   textSize(40);
   noStroke();
   fill(0,0,0,100);
   textFont('Helvetica');
   text('ONLY',722,500);

   textSize(40);
   noStroke();
   fill(0,0,0);
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
    fill(0,0,0);
   triangle(400,900,1200,148,1200,1000);

}

function drawBauhaus1(){
    
    noStroke();
    fill(250,250,250,200);
    quad(698,620,720,600,1000,600,1000,620);

    fill(250,250,250,300);
    quad(677-3,640+3,698-3,620+3,950,620+3,950,640+3);

    fill(250,250,250,200);
    quad(657-6,660+6,679-6,640+6,900,640+6,900,660+6);

    fill(250,250,250,300);
    quad(636-9,680+9,658-9,660+9,850,660+9,850,680+9);
}

function drawWhatIsThis(){

    noStroke();
    fill(0,0,0,200);
    rect(758.5,550,4.5,200);
    
    fill('yellow');
    ellipse(880,400,40,40);

    fill(0,0,0,200);
    quad(848,300,845,300,1000,700,1000,710);

    
}

function drawLinesPlease(){

rect(150,200,30,1000);

}


function windowResized(){

    resizeCanvas(windowWidth,windowHeight);

} 