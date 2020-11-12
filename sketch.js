var ball,loc,db,pos;

function setup(){
    createCanvas(500,500);
   db = firebase.database();
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
   loc = db.ref("ball/position");
loc.on("value",readdata,showerror);



}

function draw(){
    background("white");
   
   if(pos !==undefined){
    
   if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}
}

function writePosition(x,y){
   loc.set({x:pos.x+x,y:pos.y+y});
}

function readdata(data){
pos = data.val();
ball.x = pos.x
ball.y = pos.y

}

function showerror(){

console.log("this is an error");


}