
let blue;

function preload() {
 blue = loadImage('blue.png');
}

function setup() {
 createCanvas(1000, 1000);
 background(0);
 imageMode(CENTER);
 image(blue, width/2, height/2);
}




// //const rows = 1; // 横向きの行数
// const columns = 10; // 縦向きの列数
// //const gutter = 0; // 矩形間の空き
// const w = 30; // 矩形の幅
// const h = 30; // 矩形の高さ
// // 矩形の開始位置をずらす量 => (offsetX,offsetY)から始まる
// const offsetX = 50;
// const offsetY = 100;

// function setup() {
//       createCanvas(400, 400);
//     }


// function draw() {
//     background(220);
//     for (let c = 0; c < columns; c++) {
//         rect(offsetX + c * w, offsetY + 1 * h, w, h);
//     }
// }


// let foo = 0;
// let bar = 400;

// function setup() {
//   createCanvas(400, 400);
// }
// function draw() {
//   background(50);
//   noFill();
//   stroke(250);
//   strokeWeight(8);
//   ellipse(foo, 250, 45, 45);
//   ellipse(bar, 250, 45, 45);

//   foo = foo + 1;
//   bar = bar +random(-4,3);
// }

