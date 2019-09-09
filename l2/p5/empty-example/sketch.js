function setup() {
  // put setup code here
  createCanvas(700, 500);
  background(240);
}

function bhline(x0,y0,x1,y1){
  var dx = Math.abs(x1 - x0);
  var dy = Math.abs(y1 - y0);
  var sx = (x0 < x1) ? 1 : -1;
  var sy = (y0 < y1) ? 1 : -1;
  var err = dx - dy;

  while(true) {
    point(x0, y0); // Do what you need to for this

    if ((x0 === x1) && (y0 === y1)) break;
    var e2 = 2*err;
    if (e2 > -dy) { err -= dy; x0  += sx; }
    if (e2 < dx) { err += dx; y0  += sy; }
  }
}

function invf(y,y1,m,x1){
  return (((y-y1)/m)+x1)
}

function myline(x1,y1,x2,y2){
  
  // variables required
  var arr = [];
  var ny = Math.abs(y2-y1);
  var sx = (x1 < x2) ? 1 : -1;
  var sy = (y1 < y2) ? 1 : -1;
  var dx = x2-x1;
  var dy = y2-y1;
  var m = dy/dx;
  var y11 = y1+(0.5*sy);
  var xc = x1;
  var yc = y1;

  // vertical line
  if (dx===0) {
    var z = (y1 < y2) ? y1 : y2;
    var z1 = (y1 < y2) ? y2 : y1;
    while (z <= z1) {
      z++;
      point(x1,z);
    }
  }

  // horizontal line
  else if(dy===0){
    var z = (x1 < x2) ? x1 : x2;
    var z1 = (x1 < x2) ? x2 : x1;
    while (z <= z1) {
      z++;
      point(z,y1);
    }
  }

  // slant line
  else{
    for (let i = 0; i < ny; i++) {
      var x = invf((y11+(i*sy)),y1,m,x1);
      arr.push(x);
    }
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
      var ele = arr[i];
      while (xc*sx<ele*sx) {
        xc=xc+sx;
        point(xc,yc);
      }
      yc=yc+sy;
    }
  }
}


function draw() {
  // put drawing code here
  myline(0,0,500,200);
  myline(500,200,400,400);
  myline(400,400,200,300);
  myline(200,300,400,100);
  myline(100,100,100,500);
  myline(100,100,500,100);
}