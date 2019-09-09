function setup() {
  createCanvas(700, 500);
  background(200);
}

function drawCircle(xc,yc,x,y){
  point(xc+x, yc+y); 
  point(xc-x, yc+y); 
  point(xc+x, yc-y); 
  point(xc-x, yc-y); 
  point(xc+y, yc+x); 
  point(xc-y, yc+x); 
  point(xc+y, yc-x); 
  point(xc-y, yc-x); 
}

function startWorker(d,y,x) {
  if (typeof(Worker) !== "undefined") {
    if (typeof(w) == "undefined") {
      console.log("hello");
      w = new Worker("worker.js");
      var message = { d:d, y:y, x:x };
      console.log(message);
      w.postMessage(message);
      w.onmessage = function(e){
        console.log(e.data);
        return e.data;
      };
    }
  } else {
    console.log("no web worker support");
  }
}

function stopWorker() {
  w.terminate();
  w = undefined;
}

function circleBres(xc,yc,r){
  var x = 0;
  var y = r;
  var d = 3 - 2 * r; 
  drawCircle(xc,yc,x,y);
  while (y >= x) {
    console.log("hiho");
    var a = startWorker(d,y,x);
    drawCircle(xc, yc, a.x, a.y); 
  }
}

function circleBresOri(xc,yc,r){
  var x = 0;
  var y = r;
  var d = 3 - 2 * r; 
  drawCircle(xc,yc,x,y);
  while (y >= x) {
    x++;
    if ( d > 0 ) {
    y--;
    d = d + 4 * (x - y) + 10; 
    } else {
    d = d + 4 * x + 6; 
    }
    drawCircle(xc, yc, x, y); 
  }
}

function draw() {
  // put drawing code here
  circleBresOri(400,400,100);
}