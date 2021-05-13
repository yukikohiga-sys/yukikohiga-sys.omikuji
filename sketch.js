let pg;
let foo = 0;
let bar = 400;
let bas = 0;
let sop = 400;

function setup() {
  createCanvas(400, 400);
  pg = createGraphics(200,200);
}



function draw() {

  if (bar <=200) {
    noLoop();
  }
  background(255, 255, 100);

  pg.background(150, 0, 0);
  // 円形に取り除く
  pg.erase();
  pg.ellipse(pg.width/2, pg.height/2, 80, 80);
  pg.noErase();



  noFill();
  stroke(255);
  strokeWeight(8);
  ellipse(foo,200, 45, 45);
  ellipse(bar,200,  45, 45);
  ellipse(200,bas,  45, 45);
  ellipse(200,sop,  45, 45);

  foo = foo + random(-2, 3);
  bar = bar +random(-3, 2);
  bas = bas +random(3, -2);
  sop = sop +random(1, -2);

  image(pg, 100, 100);
}