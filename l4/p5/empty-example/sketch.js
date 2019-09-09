function setup() {
  createCanvas(1500, 500);
  background(255);
}

function x_intersect( x1,  y1,  x2,  y2,  x3,  y3,  x4, y4) 
{ 
  var num = (x1*y2 - y1*x2) * (x3-x4) - (x1-x2) * (x3*y4 - y3*x4); 
  var den = (x1-x2) * (y3-y4) - (y1-y2) * (x3-x4); 
  return num/den; 
} 

function y_intersect( x1, y1, x2, y2, x3, y3, x4, y4) 
{ 
  var num = (x1*y2 - y1*x2) * (y3-y4) - (y1-y2) * (x3*y4 - y3*x4); 
  var den = (x1-x2) * (y3-y4) - (y1-y2) * (x3-x4); 
  return num/den; 
} 

void clip( poly_points[][2], &poly_size, x1, y1, x2, y2) 
{ 
  var new_points[MAX_POINTS][2], new_poly_size = 0; 
 
  for (var i = 0; i < poly_size; i++) 
  { 

    var k = (i+1) % poly_size; 
    var ix = poly_points[i][0], iy = poly_points[i][1]; 
    var kx = poly_points[k][0], ky = poly_points[k][1]; 

    var i_pos = (x2-x1) * (iy-y1) - (y2-y1) * (ix-x1);  
    var k_pos = (x2-x1) * (ky-y1) - (y2-y1) * (kx-x1); 
  
    if (i_pos < 0  && k_pos < 0) 
    { 
      new_points[new_poly_size][0] = kx; 
      new_points[new_poly_size][1] = ky; 
      new_poly_size++; 
    } 

    else if (i_pos >= 0  && k_pos < 0) 
    { 
      new_points[new_poly_size][0] = x_intersect(x1, y1, x2, y2, ix, iy, kx, ky); 
      new_points[new_poly_size][1] = y_intersect(x1, y1, x2, y2, ix, iy, kx, ky); 
      new_poly_size++; 

      new_points[new_poly_size][0] = kx; 
      new_points[new_poly_size][1] = ky; 
      new_poly_size++; 
    } 


    else if (i_pos < 0  && k_pos >= 0) 
    { 
        new_points[new_poly_size][0] = x_intersect(x1, y1, x2, y2, ix, iy, kx, ky); 
        new_points[new_poly_size][1] = y_intersect(x1, y1, x2, y2, ix, iy, kx, ky); 
        new_poly_size++; 
    } 
  
  } 

  poly_size = new_poly_size; 

  for (var i = 0; i < poly_size; i++) 
  { 
    poly_points[i][0] = new_points[i][0]; 
    poly_points[i][1] = new_points[i][1]; 
  } 
} 

function suthHodgClip( poly_points[][2], poly_size, clipper_points[][2], clipper_size) 
{ 
  for (var i=0; i<clipper_size; i++) 
  { 
    var k = (i+1) % clipper_size; 
    clip(poly_points, poly_size, clipper_points[i][0], 
    clipper_points[i][1], clipper_points[k][0], clipper_points[k][1]); 
  } 

  // Printing vertices of clipped polygon 
  for (var i=0; i < poly_size; i++) 
  {
    cout << '(' << poly_points[i][0] << ", " << poly_points[i][1] << ") "; 
  } 
}

function draw() {
}


