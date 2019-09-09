function setup() {
  createCanvas(700, 500);
  background(200);
}

function multiplyMat(a,b){

    var temp = [[0,0],[0,0]];

    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < a[0].length; j++) {
            for (var k = 0; k < b.length; k++) {
                temp[i][j] += (a[i][k] * b[k][j]);
            }
        }
    }

    return temp;
}

function findNewCoordinate( s, p ) 
{ 
    var temp = [[0],[0]]; 
  
    for (var i = 0; i < 2; i++) 
        for (var j = 0; j < 1; j++) 
            for (var k = 0; k < 2; k++) 
                temp[i][j] += (s[i][k] * p[k][j]); 
  
    p[0][0] = temp[0][0]; 
    p[1][0] = temp[1][0];
} 

function mScale(x,y,Sx,Sy){
    var s = [ [Sx, 0], [0, Sy] ]; 
    var p = [[0],[0]]; 
  
    // Scaling the triangle 
    for (var i = 0; i < 3; i++) 
    { 
        p[0][0] = x[i]; 
        p[1][0] = y[i]; 

        findNewCoordinate(s, p); 
  
        x[i] = p[0][0]; 
        y[i] = p[1][0]; 
    } 
  
    // Triangle after Scaling 
    line(x[0], y[0], x[1], y[1]); 
    line(x[1], y[1], x[2], y[2]); 
    line(x[2], y[2], x[0], y[0]); 
}

function mRotate(x,y,theta){
    var s = [ [Math.cos(theta), Math.sin(theta)], [-Math.sin(theta), Math.cos(theta)] ]; 
    var p = [[0],[0]]; 
  
    console.log(x+"   "+y);
    

    // Scaling the triangle 
    for (var i = 0; i < 3; i++) 
    { 
        p[0][0] = x[i]; 
        p[1][0] = y[i]; 

        findNewCoordinate(s, p); 
  
        x[i] = p[0][0]; 
        y[i] = p[1][0]; 
    } 

    console.log("2:"+x+"   "+y);
  
    // Triangle after Scaling 
    line(x[0], y[0], x[1], y[1]); 
    line(x[1], y[1], x[2], y[2]); 
    line(x[2], y[2], x[0], y[0]); 
}

function mtranslate(x,y,x0,y0){
    var s = [[1,0,x0],[0,1,y0]];
    var p = [[0],[0],[0]]; 
    for (var i = 0; i < 3; i++) 
    { 
        p[0][0] = x[i]; 
        p[1][0] = y[i]; 
        p[2][0] = 1; 

        var ans = multiplyMat(s, p); 
  
        x[i] = ans[0][0]; 
        y[i] = ans[1][0]; 
        console.log("1:"+ans);
    } 

    console.log("2:"+x+"   "+y);
    
    // Triangle after Scaling 
    line(x[0], y[0], x[1], y[1]); 
    line(x[1], y[1], x[2], y[2]); 
    line(x[2], y[2], x[0], y[0]); 
}

function mRotate_Scale_translate(x,y,Sx,Sy,theta,x0,y0){
    var s1 = [ [Math.cos(theta), Math.sin(theta)], [-Math.sin(theta), Math.cos(theta)] ];
    var s2 = [ [Sx, 0], [0, Sy] ];
    var s = multiplyMat(s1,s2); 
    var p = [[0],[0]]; 
  
    console.log(x+"   "+y);
    

    // Scaling the triangle 
    for (var i = 0; i < 3; i++) 
    { 
        p[0][0] = x[i]; 
        p[1][0] = y[i]; 

        findNewCoordinate(s, p); 
  
        x[i] = p[0][0]+x0; 
        y[i] = p[1][0]+y0; 
    } 

    console.log("2:"+x+"   "+y);
  
    // Triangle after Scaling 
    line(x[0], y[0], x[1], y[1]); 
    line(x[1], y[1], x[2], y[2]); 
    line(x[2], y[2], x[0], y[0]); 
}

function draw() {
  var x = [100,200,100];
  var y = [100,100,200];

  line(x[0],y[0],x[1],y[1]);
  line(x[1],y[1],x[2],y[2]);
  line(x[2],y[2],x[0],y[0]);

  
  mRotate_Scale_translate(x,y,2,2,Math.PI/10,-20,-20);

}


