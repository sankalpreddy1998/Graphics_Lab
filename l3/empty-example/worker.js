onmessage = function(e){
    console.log(e.data);
    var x = e.data.x;
    var y = e.data.y;
    var d = e.data.d;
    x++;
    if ( d > 0 ) {
    y--;
    d = d + 4 * (x - y) + 10; 
    } else {
    d = d + 4 * x + 6; 
    }
    postMessage({x:x,y:y,d:d});    
}
