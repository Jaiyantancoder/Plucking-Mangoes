class Mango{

    constructor(x,y,radius){
    
    var options = {
    
    'isStatic' : true,
    'restitution' : 0,
    'friction' : 1
    
    }
    
    this.body = Matter.Bodies.circle(x,y,radius/2,options);
    this.mangoimage = loadImage("mango.png");
    this.radius = radius;
    World.add (world,this.body);
    
    }
    
    
    
    display(){
    
  if(this.body.speed<2){      
    var pos = this.body.position;
    ellipse(pos.x,pos.y,this.radius,this.radius);    
    imageMode(CENTER);    
    image(this.mangoimage,pos.x,pos.y,45,45);
  }
     
    
    
    }
    
    
    
    } 