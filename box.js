class Box{
    constructor(x,y,w,h){
        this.x=x;
        this.y=y;
        this.width= w;
        this.height=h;
    }

    show(){
        fill(100,10,5);
        rect(this.x,this.y,this.w,this.h);
    }
}