
var url = 'http://api.open-notify.org/iss-now.json';

var lat;
var long;

var issX;
var issY;

var brLat;
var brLong;
var brLAX;
var brLAY;

var laLat;
var laLong;
var laCAX;
var laCAY;

var ukLat;
var ukLong;
var ukX;
var ukY;

var kinLat;
var kinLong;
var kinCONX;
var kinCONY;

var toLat;
var toLong;
var toJPNX;
var toJPNY;

var spLat;
var spLong;
var spCHILEX;
var spCHILEY;

var sydLat;
var sydLong;
var sydAUSX;
var sydAUSY;

a=-90;

function setup(){

  createCanvas(windowWidth, windowHeight);

  setInterval(askISS, 1000);

}

function askISS(){

  loadJSON(url, gotData, 'jsonp');

}

function gotData(data){

  lat = data.iss_position.latitude;
  long = data.iss_position.longitude;
  issX = map(lat, -90, 90, 0, width);
  issY = map(long, -180, 180, 0, height);

}

function draw(){
  background(51);


  fill(255,0,0);
  ellipse(issX, issY, 12, 12);

  //textAlign(CENTER);
  stroke(1);

  fill(255);
  textSize(15);
  text('International Space Station', issX+10, issY+25);
  textSize(10);
  text(lat+'/'+long, issX+10, issY+40);

brLA();
laCA();
ukLONDON();
kinCON();
toJPN();
spCHILE();
sydAUS();

}

function brLA(){

  textSize(15);
  brLat = 30.451468;
  brLong = -91.187149;
  brLAX = map(brLat, -90, 90, 0, width);
  brLAY = map(brLong, -180, 180, 0, height);
  ellipse(brLAX, brLAY, 12, 12);
  text('Baton Rouge, LA', brLAX+10, brLAY+30);
  textSize(10);
  text(brLat+'/'+brLong, brLAX+10, brLAY+45);
 

}

function laCA(){

  textSize(15);
  laLat = 34.052235;
  laLong = -118.243683;
  laCAX = map(laLat, -90, 90, 0, width);
  laCAY = map(laLong, -180, 180, 0, height);
  ellipse(laCAX, laCAY, 12, 12);
  text('Los Angeles, CA', laCAX+15, laCAY+20);
  textSize(10);
  text(laLat+'/'+laLong, laCAX+15, laCAY+35);

}

function ukLONDON(){

  textSize(15);
  ukLat = 51.507351;
  ukLong = -0.127758;
  ukX = map(ukLat, -90, 90, 0, width);
  ukY = map(ukLong, -180, 180, 0, height);
  ellipse(ukX, ukY, 12, 12);
  text('London, UK', ukX+15, ukY+20);
  textSize(10);
  text(ukLat+'/'+ukLong, ukX+15, ukY+35);

}

function kinCON(){

  textSize(15);
  kinLat = -4.321530;
  kinLong = 15.311850;
  kinCONX = map(kinLat, -90, 90, 0, width);
  kinCONY = map(kinLong, -180, 180, 0, height);
  ellipse(kinCONX, kinCONY, 12, 12);
  text('Kinshasa, Congo', kinCONX+15, kinCONY+20);
  textSize(10);
  text(kinLat+'/'+kinLong, kinCONX+15, kinCONY+35);

}

function toJPN(){

  textSize(15);
  toLat = 35.689487;
  toLong = 139.691711;
  toJPNX = map(toLat, -90, 90, 0, width);
  toJPNY = map(toLong, -180, 180, 0, height);
  ellipse(toJPNX, toJPNY, 12, 12);
  text('Tokyo, Japan', toJPNX+15, toJPNY+20);
  textSize(10);
  text(toLat+'/'+toLong, toJPNX+15, toJPNY+35);

}

function spCHILE(){
  
  textSize(15);
  spLat = -53.135130;
  spLong = -70.901320;
  spCHILEX = map(spLat, -90, 90, 0, width);
  spCHILEY = map(spLong, -180, 180, 0, height);
  ellipse(spCHILEX, spCHILEY, 12, 12);
  text('Sandy Point, Chile', spCHILEX+15, spCHILEY+20);
  textSize(10);
  text(spLat+'/'+spLong, spCHILEX+15, spCHILEY+35);

}

function sydAUS(){
  
  textSize(15);
  sydLat = -33.868820;
  sydLong = 151.209290;
  sydAUSX = map(sydLat, -90, 90, 0, width);
  sydAUSY = map(sydLong, -180, 180, 0, height);
  ellipse(sydAUSX, sydAUSY, 12, 12);
  text('Sydney, Australia', sydAUSX+15, sydAUSY+20);
  textSize(10);
  text(sydLat+'/'+sydLong, sydAUSX+15, sydAUSY+35);

}