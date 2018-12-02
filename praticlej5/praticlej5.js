//reference - Jelly Sim https://www.openprocessing.org/sketch/587065
//reference - praticleFlow https://www.openprocessing.org/sketch/422446
//converted from processing3 to p5.js
//https://github.com/processing/p5.js/wiki/Processing-transition


var praticle = [];
var r = 128;

function setup() {
  colorMode(HSB, 360,100,100,100);
  noSmooth();
  strokeWeight(10);
  createCanvas(1000, 1000);
  for (let i = 0; i < 360; i += 360/540){
    var x = cos(i);
    var y = sin(i);
    praticle.push(new Praticle(x, y, 128));
  }
  stroke(255);
}

function draw() {
  background(0);
  noFill();
  
  push();
  translate(width/2, height/2);
  beginShape();
  
  for(let i = 0; i < praticle.length; i++){    
    praticle[i].shows();
  }
  
  endShape(CLOSE);
  pop();
}
