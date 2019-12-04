var stars = [];
var n = 0;
var c = 8; //higher number = spaced out more
var an = 135.7;
var zoomout = 1000;
let theta = 0.0;
let r = (0,255);
let g = (0,255);
let b = (0,255);


function setup() {
  createCanvas(windowWidth, windowHeight);
  //angleMode(DEGREES);

for (i=0; i<5000; i++){
  angle = -0.1*i;
  var col = (10,255);
  size = cos(n)*1.5+2.5;
  var x = (1+angle)*Math.cos(angle)+width/2;
  var y = (1+angle)*Math.sin(angle)+height/2;
  

  stars.push(new Star(x,y,col,size));
  n++;

  //console.log(stars);
}

/*while(n<5000){
  
  var a = n*an;

  var r = c*sqrt(n)*n/zoomout;
  var col = random(10,255);
  size = cos(n)*1.5+2.5;
  var x = r*sin(a)+width/2;
  var y = r*cos(a)+height/2;

  stars.push(new Star(x,y,col,size));
  n++;
}*/
}



function draw() {
  background(0); // translucent background (creates trails), but slow

  
  for(var i = 0; i<stars.length; i++)
    {var b = stars[i];
      b.behaviors();
      b.update();
      b.show();
      }
  if(keyIsPressed && key =='m')
    {for(var i = 0; i<stars.length; i++)
      {var b = stars[i];
        b.pos = createVector(random(width)*2, random(height)*2)}
        }


if(keyIsPressed)
{if(key =='-') 
  zoomout -= 1000; //x = x-y
else if(key == 'p')
  zoomout *= -1; //x = x*y
else if(key == 'o')
  zoomout *= 1.07; //x = x*y
else if (key == '=')
  zoomout += 1000; //x = x+y
else if(key == 'e')
  zoomout *=0; //x = x*y ; also makes everything stop moving.
else if(key == 'f')
  zoomout *=50;
else if(key == 'n')
  zoomout +=1;
else if(key == 'm')
  zoomout -=1;

  an = 137.5;

  for(var i= 0; i<stars.length; i++)
  {var b = stars[i];
  an -= 0.001;

  var a = i*an;

  var r = c*sqrt(i)*i/(zoomout/900);
  var x = r*sin(a)+width/2;
  var y = r*cos(a)+height/2;
  
  b.target = createVector(x,y);
    }
  }
}
  
        

function Star(x,y,col,radius){
  this.pos = createVector(random(width)*1, random(height)*1);
  this.acc = createVector();
  this.vel = createVector();
  this.target = createVector(x,y);
  this.maxspeed = 20;
  this.maxforce = 20.5;
  this.col = col;
  this.radius = radius;
}

  

Star.prototype.behaviors = function(){
  var arrive = this.arrive(this.target);

  var mouse = createVector(mouseX, mouseY);
    
  var flee = this.flee(mouse);

  flee.mult(1.5);
  this.applyForce(flee);
  this.applyForce(arrive);
}

Star.prototype.flee = function(target){
  var distance = p5.Vector.sub(target,this.pos);
  var d = distance.mag();

  if(d<75){ //inc for more range on mouse
    distance.setMag(this.maxspeed);
    distance.mult(-1);
    var move = p5.Vector.sub(distance, this.vel)
    move.limit(this.maxforce);

    return move;
  }
  else return createVector(0,0);

  
}

Star.prototype.arrive = function(target){
  var distance = p5.Vector.sub(target, this.pos);
  var d = distance.mag();
  var speed = this.maxspeed;
  if(d<75){
    speed = map(d, 0, 75, 0.2, this.maxspeed);
  }
  distance.setMag(speed);
  var move = p5.Vector.sub(distance, this.vel);
  move.limit(this.maxforce);
  return move;
}

Star.prototype.applyForce = function(f){
  this.acc.add(f);
}

Star.prototype.update = function(){
  //t = t + 0.01; // update time
  this.pos.add(this.vel);
  this.vel.add(this.acc);
  this.acc.mult(0);
}

Star.prototype.show = function(){
  fill(this.col,this.col,this.col);
  noStroke();
  push();
  ellipse(this.pos.x,this.pos.y,this.radius,this.radius);
  pop();
}



