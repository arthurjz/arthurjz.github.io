function Praticle(x, y, r) {
  this.pos = createVector(x, y);
  this.r = r;
  var offX = random(0.5, 1.2);
  var offY = random(0.5, 1.2);

  this.show = function() {
    noFill();
    push();
    translate(this.pos.x, this.pos.y);
    beginShape();
    var offx = 0;
    for (var a = 0; a < TWO_PI; a += 0.08) {
      var offset = map(noise(offx + offY), 0, 1, -1, 50);
      var r = this.r + offset;
      var x = r * sin(a);
      var y = r * cos(a);
      vertex(x, y);
      offx += 0.1;
    }
    endShape(CLOSE);
    pop();
    offY += 0.01;
  }

  this.shows = function() {
    var r = this.r;
    var a = 128;
    var offx = map(noise(offX), 0, 1, -a, a * 2);
    var offy = map(noise(offY), 0, 1, -a, a * 2);
    noStroke();
    fill(map(offx, -100, 100, 75, 325), 100, 100);
    var x = this.pos.x * (offx + r);
    var y = this.pos.y * (offy + r);

    var newPos = this.scape(x, y);
    ellipse(newPos.x, newPos.y, 5, 5);
    offX += 0.01;
    offY += 0.01;
  }

  this.scape = function(x, y) {
    var sPos = createVector(x, y);
    var mouse = createVector(mouseX - width / 2, mouseY - height / 2);
    if (dist(mouse.x, mouse.y, sPos.x, sPos.y) < 100) {
      var a = p5.Vector.sub(sPos, mouse);
      a.normalize();
      a.mult(35);
      sPos.add(a);
      return sPos;
    } else {
      return createVector(x, y);
    }
  }
}
