function setup() {
  createCanvas(1600, 1600);
}

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

function poi(x1,y1,theta){
   var x2 = x1+50*Math.cos(theta);
   var y2 = y1+50*Math.sin(theta);
   line(x1,y1,x2,y2);
   return [x2,y2]; 
}

function frac(stri){
  return replaceAll(stri,"F","F+F−F−F+F");
}

function iter(stri,n){
  var x = stri;
  for(var i=0;i<n;i++){
    x = frac(x);
  }
  return x
}

function draw() {
  var theta = 3.14/2;
  background(220);
  var x1 = 500;
  var y1 = 200;
  var x = iter("F",1);
  for(var i=0; i<x.length; i++){
    if(x[i]=="F"){
      var p = poi(x1,y1,theta);
    }
    else if(x[i]=="+"){
      theta += 3.14/2;
    }
    else{
      theta -= 3.14/2;
    }
    x1 = p[0];
    y1 = p[1];

  }
  
}function setup() {
  createCanvas(1600, 1600);
}

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

function poi(x1,y1,theta){
   var x2 = x1+50*Math.cos(theta);
   var y2 = y1+50*Math.sin(theta);
   line(x1,y1,x2,y2);
   return [x2,y2]; 
}

function frac(stri){
  return replaceAll(stri,"F","F+F−F−F+F");
}

function iter(stri,n){
  var x = stri;
  for(var i=0;i<n;i++){
    x = frac(x);
  }
  return x
}

function draw() {
  var theta = 3.14/2;
  background(220);
  var x1 = 500;
  var y1 = 200;
  var x = iter("F",1);
  for(var i=0; i<x.length; i++){
    if(x[i]=="F"){
      var p = poi(x1,y1,theta);
    }
    else if(x[i]=="+"){
      theta += 3.14/2;
    }
    else{
      theta -= 3.14/2;
    }
    x1 = p[0];
    y1 = p[1];

  }
  
}