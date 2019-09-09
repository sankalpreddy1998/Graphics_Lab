function setup() {
  // put setup code here
  bg = loadImage('assets/car1.jpg');
  createCanvas(1500, 500);
  background(255);
}

function draw() {
  // put drawing code here
  //background(bg);
  
  console.log("x: "+mouseX+" , y: "+mouseY);

  //bottom line
  strokeWeight(8);
  line(480,365,1060,380);

  //wheel rim back
  strokeWeight(6);
  noFill();
  arc(380, 327, 218, 200, PI-QUARTER_PI/2.5, 0+QUARTER_PI/2.5);

  //wheel rim front
  strokeWeight(6);
  noFill();
  arc(1153, 327, 218, 200, PI-QUARTER_PI/1.7, 0+QUARTER_PI/2.5);

  //wheel back
  strokeWeight(6);
  noFill();
  arc(377, 322, 188, 173, 0, 0);

  //wheel front
  strokeWeight(6);
  noFill();
  arc(1150, 322, 188, 173, 0, 0);

  //wheel rim back bottomn
  strokeWeight(6);
  noFill();
  line(275, 360, 157, 330);
  strokeWeight(6);
  noFill();
  line(157, 330, 173, 323);
  strokeWeight(6);
  noFill();
  line(173, 323, 150, 280);
  strokeWeight(6);
  noFill();
  line(150, 280, 170, 250);
  strokeWeight(6);
  noFill();
  line(170, 250, 157, 197);

  //top back
  strokeWeight(6);
  noFill();
  curve(150, 230, 157, 197, 550, 100, 570, 200);

  //top front
  strokeWeight(6);
  noFill();
  curve(250, 280, 550, 100, 950, 175, 1000, 450);

  //front hood
  strokeWeight(6);
  noFill();
  curve(900, 330, 950, 175, 1375, 255, 1400, 600);

  //front bumper
  strokeWeight(6);
  noFill();
  curve(1325, 205, 1375, 255, 1362, 320, 1330, 370);
  strokeWeight(6);
  noFill();
  line(1362, 320, 1370, 345);

  //front bumper bottom
  strokeWeight(6);
  noFill();
  curve( 1320, 220, 1370, 345, 1257, 360, 1257, 320);

  //window
  strokeWeight(4);
  noFill();
  line(409, 164, 790, 179);
  strokeWeight(4);
  noFill();
  curve(1, 620, 400, 157, 910, 177, 1200, 650);

  //rear view mirror
  strokeWeight(4);
  noFill();
  line(907, 183, 817, 181);
  strokeWeight(4);
  noFill();
  curve(950, 220, 817, 181, 850, 159, 970, 250);

  //rear headlights
  strokeWeight(3);
  noFill();
  line(285, 222, 252, 205);
  strokeWeight(4);
  noFill();
  curve(285, 222, 285, 222, 175, 215, 130, 190);
  strokeWeight(3);
  noFill();
  curve(252, 205, 252, 205, 170, 200, 120, 220);

  //headlights
  strokeWeight(3);
  noFill();
  line(1324, 322, 1305, 280);
  strokeWeight(4);
  noFill();
  curve(1270, 302, 1324, 322, 1355, 325, 1374, 322);
  strokeWeight(3);
  noFill();
  curve(1255, 310, 1305, 280, 1365, 275, 1350, 280);

  //vent
  strokeWeight(3);
  noFill();
  curve(1120, 262, 1080, 242, 960, 235, 960, 235);
  strokeWeight(3);
  noFill();
  curve(1000, 180, 1040, 242, 950, 250, 950, 250);
  strokeWeight(10);
  noFill();
  curve(1000, 220, 1000, 240, 970, 240, 990, 230);
}


