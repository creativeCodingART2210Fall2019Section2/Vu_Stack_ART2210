class Trees {
    constructor(){
        this.spacing = random(100,125);
        this.top=random(height/6,3/4*height);
        this.bottom=this.top+this.spacing;

        this.x=width;
        this.w=80;
        this.speed=3;
    }
}

