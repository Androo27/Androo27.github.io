function setup() {
createCanvas(600, 600);
background(8, 115, 65)
}
function draw() {
noStroke();    
//ears
   fill(255, 210, 180);
//left ear
ellipse(125, 300, 45, 75);
//Right ear 
ellipse(475, 300, 45, 75);
//neck and face
  fill(255, 233, 210)
  rect(227.5, 500, 150, 150)
   rect(125, 210, 350, 250)  
//Chin
  fill(255, 233, 210)
  arc(300, 450, 350, 250, 0, PI);
  
//Sideburns
  fill(110, 49, 3);
//Left side burn
quad(125, 215, 145, 215, 150, 270, 125, 265);

//Right side burn
quad(455, 215, 475, 215, 475, 265, 450, 270);

//Nose
fill(210, 150, 120);
 stroke(0);
  strokeWeight(1);
triangle(
  300, 310,  
  285, 390,  
  315, 390   
);
  noStroke()
 //cow lick
  fill(75, 30, 10);
triangle(275, 125, 285, 80, 300, 125);
triangle(295, 120, 315, 75, 325, 130);
triangle(315, 130, 340, 90, 345, 145);
//hair
  fill(110, 49, 3)
  arc(300, 215, 350, 250, PI, TWO_PI);
//mouth
  fill("black")
  rect(265, 450, 70, 5)
//eyelines
   fill(209, 136, 81)
   rect(210, 301, 40, 5)
   rect(340, 301, 40, 5)
  stroke(0);
  strokeWeight(1);
//eyes  
  fill("white")
  ellipse(230, 285, 60, 35)
  ellipse(360, 285, 60, 35)
//eyecolor
  fill("brown")
  ellipse(230, 285, 30, 25)
  ellipse(360, 285, 30, 25)
//pupil  
  fill("black")
  ellipse(230, 285, 20, 20)
  ellipse(360, 285, 20, 20)
 noStroke();
}
