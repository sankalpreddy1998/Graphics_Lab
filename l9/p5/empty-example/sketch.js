function preload() {
  img1 = loadImage('http://2.bp.blogspot.com/-RTv_wZ8jtTI/U8_MIltBrRI/AAAAAAAAL8A/OodChxsXFRw/s1600/hinh-nen-em-be+(7).jpg');
  img2 = loadImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyGwLVOeYFB7qWYML-lLNSCkoASLvnIsKwSzWL_wyqJMCHxSwAcA');
  
}

function setup() {
  var a=0;
  createCanvas(400, 400);
}

function util(a){
  image(img1, 0, 0, 400, 400);
  loadPixels();
  var im1 = pixels;
  image(img2, 0, 0, 400, 400);
  loadPixels();
  var im2 = pixels;
  // noprotect
  for(var i=0; i<pixels.length; i++){
    pixels[i]=(1-a)*im1[i]+(a)*im2[i];
  }
  updatePixels();
}

function draw(){
  util(0.6);
}

