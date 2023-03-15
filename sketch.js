let pg;
let foo = 0;
let bar = 410;
let bas = 0;
let sop = 410;


function setup() {
  createCanvas(400, 400);
  pg = createGraphics(200,200);
}



function draw() {

  if (bar <=180) {
   noLoop();
    // console.log("アルトが練習に来ました");
    

  }
  
  background(175, 300, 50);
  
  
  pg.background(65, 300, 50);
  // 円形に取り除く
  pg.erase();
  pg.ellipse(pg.width/2, pg.height/2, 80, 80);
  pg.noErase();



  noFill();
  stroke(255);
  strokeWeight(2);
 
  ellipse(foo,200, 45, 45);
  textAlign(CENTER, CENTER);
  text("sub", foo, 200);
  textSize(26);
  
 
  ellipse(bar,200,  45, 45);
  textAlign(CENTER, CENTER);
  text("dom", bar, 200);
  textSize(26);
  
  ellipse(200,bas,  45, 45);
  textAlign(CENTER, CENTER);
  textSize(26);
  text("S", 200,bas);
 
  ellipse(200,sop,  45, 45);
  textSize(26);
  textAlign(CENTER, CENTER);
  text("M", 200,sop);

  foo = foo + random(-3, 4);
  bar = bar + random(-2, 1);
  bas = bas + random(-4, 5);
  sop = sop + random(1, -2);

  image(pg, 100, 100);
}

