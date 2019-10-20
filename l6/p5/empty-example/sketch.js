function setup() {
  createCanvas(1500, 500);
  background(100);
}

modelVerts = [
  {x: 100, y: 100, z: 100},
  {x: 100, y: 100, z: 0},
  {x: 200, y: 100, z: 0},
  {x: 200, y: 100, z: 100},
  {x: 100, y: 100, z: 100},

  {x: 100, y: 200, z: 100},
  {x: 100, y: 200, z: 0},
  {x: 200, y: 200, z: 0},
  {x: 200, y: 200, z: 100},
  {x: 100, y: 200, z: 100},

  {x: 100, y: 100, z: 100},
  {x: 100, y: 200, z: 100},

  {x: 100, y: 100, z: 0},
  {x: 100, y: 200, z: 0},

  {x: 200, y: 100, z: 100},
  {x: 200, y: 200, z: 100},

  {x: 200, y: 100, z: 0},
  {x: 200, y: 200, z: 0},
]

function plot(modelVerts) {
  for (let i = 0; i < 4; i++) {
    line(modelVerts[i].x,modelVerts[i].y,modelVerts[i+1].x,modelVerts[i+1].y,modelVerts[i].z,modelVerts[i+1].z);
  }
  for (let i = 5; i < 9; i++) {
    line(modelVerts[i].x,modelVerts[i].y,modelVerts[i+1].x,modelVerts[i+1].y,modelVerts[i].z,modelVerts[i+1].z);
  }
  for (let i = 10; i < 11; i++) {
    line(modelVerts[i].x,modelVerts[i].y,modelVerts[i+1].x,modelVerts[i+1].y,modelVerts[i].z,modelVerts[i+1].z);
  }
  for (let i = 12; i < 13; i++) {
    line(modelVerts[i].x,modelVerts[i].y,modelVerts[i+1].x,modelVerts[i+1].y,modelVerts[i].z,modelVerts[i+1].z);
  }
  for (let i = 14; i < 15; i++) {
    line(modelVerts[i].x,modelVerts[i].y,modelVerts[i+1].x,modelVerts[i+1].y,modelVerts[i].z,modelVerts[i+1].z);
  }
  for (let i = 16; i < 17; i++) {
    line(modelVerts[i].x,modelVerts[i].y,modelVerts[i+1].x,modelVerts[i+1].y,modelVerts[i].z,modelVerts[i+1].z);
  }
}

function oblique(modelVerts,a,b) {
  temp = []
  for (let i = 0; i < modelVerts.length; i++) {
    var x = modelVerts[i].x + a*modelVerts[i].z;
    var y = modelVerts[i].y + b*modelVerts[i].z;
    var z = modelVerts[i].z;
    temp.push({x: x, y: y, z: z});
  }
  return temp;
}

function cavalier(modelVerts,theta) {
  temp = []
  for (let i = 0; i < modelVerts.length; i++) {
    var x = modelVerts[i].x + Math.sin(theta)*modelVerts[i].z;
    var y = modelVerts[i].y + Math.cos(theta)*modelVerts[i].z;
    var z = modelVerts[i].z;
    temp.push({x: x, y: y, z: z});
  }
  return temp;
}

function cabinet(modelVerts,theta) {
  temp = []
  for (let i = 0; i < modelVerts.length; i++) {
    var x = modelVerts[i].x + 0.5*Math.sin(theta)*modelVerts[i].z;
    var y = modelVerts[i].y + 0.5*Math.cos(theta)*modelVerts[i].z;
    var z = modelVerts[i].z;
    temp.push({x: x, y: y, z: z});
  }
  return temp;
}

function isometric(modelVerts,theta) {
  temp = []
  for (let i = 0; i < modelVerts.length; i++) {
    var x = Math.cos(theta)*modelVerts[i].x + Math.cos(theta)*modelVerts[i].z;
    var y = modelVerts[i].y + Math.sin(theta)*modelVerts[i].z - Math.sin(theta)*modelVerts[i].x;
    var z = modelVerts[i].z;
    temp.push({x: x, y: y, z: z});
  }
  return temp;
}

function persp(modelVerts,d) {
  temp = []
  for (let i = 0; i < modelVerts.length; i++) {
    var x = (modelVerts[i].x/((1/d)*(modelVerts[i].y)+1));
    var y = (modelVerts[i].y/((1/d)*(modelVerts[i].y)+1));
    var z = 0;
    temp.push({x: x, y: y, z: z});
  }
  return temp;
}

function draw() {
  console.log(persp(modelVerts));
  plot(cavalier(modelVerts,125));
  //plot(persp(cabinet(modelVerts,90),500));
}


