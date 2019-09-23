var c ={
    x: 0,
    y: 200,
    diameter: 50
};

var r = 218;
var g = 160;
var b = 221;

function setup(){

createCanvas(windowWidth,windowHeight);

}

function draw(){

    background(r, g, b);

    fill(178,56,210);
    ellipse(c.x,c.y,c.diameter,c.diameter);

    c.x = c.x + 3;
    c.y = c.y + 1;

}
