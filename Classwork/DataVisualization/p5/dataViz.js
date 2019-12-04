var minorPlanets;
let theta;

angleMODE(DEGREES);

function preload(){

  minorPlanets = loadJSON("minorPlanets.json");
}

function setup(){

  createCanvas(1080, 720);

  
  theta = 100.0000001;
}

function draw(){

  background(0);
  

  for(var i=0; i<minorPlanets.minor_planets.length; i++){
    var a = i * .88;
    var x = 180+0.03;
  
    
    fill(255);
    textFont('Helvetica');
    textAlign(CENTER);
    rotate(sin(theta)*28);
    text(minorPlanets.minor_planets[i], 0, height/2.89+a);
    
    
  }
}
