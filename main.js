captain_x=10;
captain_y=10;

function captain_update(){
    fabric.Image.fromURL("captain.jpg",function(Img){
    captain_object=Img;
    captain_object.scaleToWidth(150);
    captain_object.scaleToHeight(140);
    captain_object.set({
        top:captain_y,
        left:captain_x
    });
    canvas.add(captain_object);
});
}

if(keypressed == '38'){
    up();
    console.log("up");
}

if(keypressed == '40'){
    down();
    console.log("down");
}

if(keypressed == '37'){
    left();
    console.log("left");
}

if(keypressed == '39'){
    right();
    console.log("right");
}

function up(){
    if(captain_y>=0){
        console.log("when up arrow key is pressed ,X="+captain_x+" , Y="+captain_y);
        canvas.remove(captain_object);
        captain_update();
    }
}

function down(){
    if(captain_y<=500){
        console.log("when down arrow key is pressed ,X="+captain_x+" , Y="+captain_y);
        canvas.remove(captain_object);
        captain_update();
    }
}

function left(){
    if(captain_y>0){
        console.log("when left arrow key is pressed ,X="+captain_x+" , Y="+captain_y);
        canvas.remove(captain_object);
        captain_update();
    }
}

function right(){
    if(captain_y<=850){
        console.log("when right arrow key is pressed ,X="+captain_x+" , Y="+captain_y);
        canvas.remove(captain_object);
        captain_update();
    }
}