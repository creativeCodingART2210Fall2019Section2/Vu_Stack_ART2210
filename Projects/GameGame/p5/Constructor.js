this.y=height/2;
this.x=64;

function Character(){
    this.x = height/2;

    this.gravity=1;
    this.velocity=0;

    this.show = function(){
        fill(255);
        ellipse(this.x,this.y,32,32);
    }
  this.update=function(){
      this.velocity+=this.gravity;
      this.y+=this.velocity;
  }
    if (this.y>height){
        this.y=height;
        this.velocity=0;
    }

}

function Pipe(){
    this.top=random(height/2);
    this.bottom=random(height/2);
    this.x=width;
    this.w=20;

    this.show=function(){
        fill(255);
        rect(this.x,0,this.w,this.top);
        rect(this.x,height-this.bottom,this.w,this.bottom);

    }
}