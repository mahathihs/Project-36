class Food{
    constructor(foodStock){
        var options={
            isStatic:true
         }
         this.image=loadImage("Images/Milk(1).png");
    }
    display(){
        var x=80,y=100;
        imageMode(CENTER);
        image(this.image,720,220,70,70);

        if(this.foodStock !== 0){
            for(i=0 ; i<this.foodStock ; i++){
                if(i%10 == 0){
                    x=80;
                    y=y+50;
                }
                image(this.image,x,y,50,50);
                x=x+30;
            }
        }
    }
    updateFoodStock(){
        database.ref('/').update;
      }
    getFoodStock(){
        database.ref('/').update;
      }
    }