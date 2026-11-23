var img;
var initials ='jm'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  img = loadImage('https://dma-git.github.io/images/74.png');
   img2 = loadImage('https://Androo27.github.io/plant4.png');
   img3 = loadImage('https://Androo27.github.io/plant2.png');
   img4 = loadImage('https://Androo27.github.io/rockmoss.png');
   img5 = loadImage('https://Androo27.github.io/moss1.jpeg');
   img6 = loadImage('https://Androo27.github.io/moss2.png');
   img7 = loadImage('https://Androo27.github.io/log.png');
   img8 = loadImage('https://Androo27.github.io/treevine.png');
   img9 = loadImage('https://Androo27.github.io/tree.png');
   img10 = loadImage('https://Androo27.github.io/vine2.png');
   img11 = loadImage('https://Androo27.github.io/dragonfly.png');
}

function setup() {
createCanvas(600, 600);  // canvas size
background(screenbg);   // use our background screen color

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' || toolChoice == '1') { // foliage
    image(img2, mouseX, mouseY, 300, 300);
    imageMode(CENTER);
  } else if (toolChoice == '2' || toolChoice == '2') { // small vines
    image(img3, mouseX, mouseY, 150, 150);
    imageMode(CENTER);
    
  } else if (toolChoice == '3') { // rock moss

    image(img4, mouseX, mouseY, 150, 150);
    imageMode(CENTER);
  } else if (toolChoice == '4') { // moss

     image(img5, mouseX, mouseY, 150, 150);
     imageMode(CENTER);
  } else if (key == '5') { // bent moss
     image(img6, mouseX, mouseY, 150, 150);
     imageMode(CENTER);
    
 // make testbox do something!
 //   line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '6') { // log

    image(img7, mouseX, mouseY, 300, 300);
    imageMode(CENTER);
  } else if (toolChoice == '7') { // treevine

   push();

  imageMode(CENTER);
  translate(mouseX, mouseY);
  rotate(radians(45));

  image(img8, 0, 0, 150, 150);

  pop();
  } else if (toolChoice == '8') { // tree

    image(img9, mouseX, mouseY, 700, 700);
    imageMode(CENTER);
  } else if (toolChoice == '9') { // vine2

    image(img10, mouseX, mouseY, 150, 150);
    imageMode(CENTER);
  } else if (toolChoice == '0') { // dragonfly
    image(img11, mouseX, mouseY, 50, 50);
    imageMode(CENTER);
  } else if (toolChoice == 'g' || toolChoice == 'G') { // g places the image we pre-loaded
    image(img, mouseX, mouseY, 50, 50);
    
  } else if (toolChoice == 'l' || toolChoice == 'L') { // g places the image we pre-loaded
    image(img2, mouseX, mouseY, 200, 200);
    
  }
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
    key="";
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
