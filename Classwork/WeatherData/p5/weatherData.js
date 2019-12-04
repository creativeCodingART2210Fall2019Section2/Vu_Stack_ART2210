var weather;
var api = 'http://api.openweathermap.org/data/2.5/weather?q='
var apiKey = '&APPID=f1eb3e3afec077ffe7ed5a909b9b5b75';
var units = '&units=kelvin';

var input;

function setup(){

  createCanvas(600,600);

 var button = select('#submit');
 button.mousePressed(weatherAsk);

 input = select('#city');

  weatherAsk();

  

}

function weatherAsk(){
  var url = api + input.value() + apiKey + units;
  loadJSON(url, gotData);
}

function gotData(data){
  weather = data;
}

function draw(){

  background(0);

  if(weather){

    noFill();
    stroke(255);
    rect(190,70,220,50);

    textAlign(CENTER);
    fill(255);
    textSize(24);
    text("City Temperatures", width/2, 100);
    

    textSize(12);
    /*fill(150,100,200);
    text(weather.main.humidity, width/2 + 15, 500);
    ellipse(width/2 - 7, height/2 + 125, weather.main.humidity, weather.main.humidity);
    text("Humidty:", width/2 - 20, 500);*/

    noStroke();
    fill('red');
    //text(weather.main.temp_max, width/1.3 + 30, 525);
    text(weather.main.temp_max, width/2 + 30, 525);
    noStroke();
    //ellipse(width/1.3, height/2, weather.main.temp_max, weather.main.temp_max);
    ellipse(width/2, height/2, weather.main.temp_max, weather.main.temp_max);
    //text("Max Temperature :", width/1.3 - 42, 525);
    text("Max Temperature :", width/2 - 43, 525);

    fill('orange');
    //text(weather.main.temp, width/1.3 + 30, 500);
    text(weather.main.temp, width/2 + 30, 500);
    noStroke();
    //ellipse(width/1.3, height/2, weather.main.temp, weather.main.temp);
    ellipse(width/2, height/2, weather.main.temp, weather.main.temp);
    //text("Temperature :", width/1.3 - 30, 500);
    text("Avg Temperature :", width/2 - 42, 500);

    fill('yellow');
    //text(weather.main.temp_min, width/1.3 + 30, 475);
    text(weather.main.temp_min, width/2 + 30, 475);
    noStroke();
    //ellipse(width/1.3, height/2, weather.main.temp_min, weather.main.temp_min);
    ellipse(width/2, height/2, weather.main.temp_min, weather.main.temp_min);
    //text("Min Temperature :", width/1.3 - 40, 475);
    text("Min Temperature :", width/2 - 40, 475);
    
    

    
    

    

  }
  
 
 

}