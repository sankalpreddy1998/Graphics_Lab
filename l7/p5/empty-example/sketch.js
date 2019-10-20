function setup() {
  createCanvas(1500, 1500);
}



function multiply(m1, m2) {
    var result = [];
    for (var i = 0; i < m1.length; i++) {
        result[i] = [];
        for (var j = 0; j < m2[0].length; j++) {
            var sum = 0;
            for (var k = 0; k < m1[0].length; k++) {
                sum += m1[i][k] * m2[k][j];
            }
            result[i][j] = sum;
        }
    }
    return result;
}


function cal(t,x1,y1,x2,y2,x3,y3,x4,y4){
  var t_mat = [ [1, t, (t**2), (t**3)] ];
  console.table(t_mat);
  var m = [
    [1,0,0,0],
    [-3,3,0,0],
    [3,-6,3,0],
    [-1,3,-3,1]
  ];
  var p = [
    [x1,y1],
    [x2,y2],
    [x3,y3],
    [x4,y4]
  ];
 
  var m1 = multiply(t_mat,m);
  var p1 = multiply(m1,p);
 
  return p1;
 
}

function br(p0x,p0y,p1x,p1y,p2x,p2y,p3x,p3y,dt){

  for(var t=0; t<=1; t=t+dt){
    var p = cal(t,p0x,p0y,p1x,p1y,p2x,p2y,p3x,p3y);
    point(p[0][0],p[0][1]);
  }
}

function draw() {
  br(475,234,550,377,664,510,876,488,0.001);
  br(876,488,690,710,768,904,837,1010,0.001);
  br(837,1010,664,930,518,1054,505,1168,0.001);
  br(505,1168,417,980,250,934,90,910,0.001);
  br(90,990,244,833,290,677,166,490,0.001);
  br(166,490,378,527,460,416,475,234,0.001);
 
}