// I started by grabbing the canvas and then Telling the code to make it two dimensions
var playAreaCanvas = document.getElementById("playArea");
var drawingspace = playAreaCanvas.getContext("2d");
var xMove = 3;
var yMove = 3;

 var stopMotion = false;
var playMotion = true;

//I created a object that can be use to create different types of moving objects for screen. as well as setting the height,width, and speed of the sprite
var imageObject = {
    x: 0,
    y: 0,
    width: 50,
    height: 50

};

//I then created what is soonb to be the mouse that run around the screen
var mouse = Object.create(imageObject);
mouse.x = 60;
mouse.y = 60;
//Made a new image i use to make the mouse visible
var image = new Image();

//I created a listen event or more Handler to handle what code to run and what to load
image.addEventListener("load", loadHandler, false);
//getting the image from my computer
image.src = "mouse.png";


//Made a function for loading my picture
function loadHandler() {
    updateMovement();
}


// This is the event that will be moving my picture
function updateMovement() {
    //This makes it so I have s smooth animation for my image while it does the code below, it runs every frame basically
    window.requestAnimationFrame(updateMovement, playAreaCanvas);
    //set the movement to be the Xmove and Ymoves i made above
    mouse.x += xMove;
    mouse.y += yMove;

  
    //This code is basically saying if The image hits the sides of the canvas it will change the direction accordingly
            if (mouse.width + mouse.x > 500 && playMotion == true) {
                xMove = -2;
            }
            else if (mouse.x < 1 && playMotion == true) {
                xMove = 2;
            }
            else if (mouse.height + mouse.y > 500 && playMotion == true) {
                yMove = -2;
            }
            else if (mouse.y < 1 && playMotion == true) {
                    yMove = 2;
            }
//This stop the image.
    else if (playMotion == false && stopMotion == true) {
        xMove = 0;
        yMove = 0;   
    }
    //cause a varaible that is in charge of the canvas and picture being seen
    renderImage();
}



function renderImage() {
    //This first code clears the canvas and picture every frame
    drawingspace.clearRect(0, 0, playAreaCanvas.width, playAreaCanvas.height);
    //This code draws the image every frame
    drawingspace.drawImage(image,
        Math.floor(mouse.x),Math.floor(mouse.y),
        mouse.width, mouse.height
    );
}

// this code is place on my button to make it move asgain after it is stopped
function movePicture() {
    console.log("Picture is moving");
    stopMotion = false;
    playMotion = true;
        xMove = Math.floor(Math.random() * 3 + 1);
        yMove = Math.floor(Math.random() * 3 + 1);
}

//This stops the image right where it is drawn on the frame
function stopPicture() {
    console.log("Picture is stop");
    stopMotion = true;
    playMotion = false;
}





// JavaScript source code
