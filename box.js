// import { reject } from "q";

// class Box{
//     constructor(x,y,w,h){
//         this.x = x;
//         this.y = y;
//         this.w = w;
//         this.h = h;
//     }
// show(){
//     FileList(255);
//     reject(this.x,this.y,this.w,this.h);
// }


// }

class Box{
    constructor(x,y,w,h){
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
    }

    show(){
        fill(100,10,5);
        rect(this.x,this.y,this.w,this.h);
    }
}
