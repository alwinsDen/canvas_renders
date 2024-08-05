//THIS REFERENCES ONLY FOR DRAWING SHAPES.
const canvas = document.getElementById("render_canvas");
//adjusts the canvas size ideally.
canvas.height = canvas.clientHeight;
canvas.width = canvas.clientWidth;
const ctx = canvas.getContext("2d");
//NOTE: Disable specific sections to view

function drawRect() {
  //drawing simple rect shape.
  ctx.fillRect(0, 0, 100, 100);
  ctx.clearRect(15, 15, 60, 60);
  ctx.strokeRect(20, 20, 50, 50);
}

function drawSimplePath() {
  //drawing on canvas using paths.
  ctx.beginPath();
  //consider this as the pen being lifted.
  ctx.moveTo(150, 50);
  ctx.lineTo(200, 75);
  ctx.lineTo(200, 25);
  ctx.fill();
}

function drawFigurine() {
  //drawing simple figurines.
  ctx.beginPath();
  //DEFINE: arc(x,y,radius,start_angle,end_angle)
  ctx.arc(75, 75, 50, 0, Math.PI * 2, true);
  //without moveTo, the circle extends from the last draw point
  ctx.moveTo(100, 75);
  ctx.arc(75, 75, 25, 0, Math.PI, false);
  ctx.moveTo(65, 65);
  ctx.arc(60, 65, 5, 0, Math.PI * 2, true);
  ctx.moveTo(95, 65);
  ctx.arc(90, 65, 5, 0, Math.PI * 2, true);
  ctx.stroke();
}

function simpleLines() {
  //to draw lines
  ctx.beginPath();
  ctx.moveTo(25, 25);
  ctx.lineTo(105, 25);
  ctx.lineTo(25, 105);
  ctx.closePath();
  ctx.stroke();
  //to auto-fill closed shapes
  ctx.fill();
}

//arc & arcTo explained.
function simplePathsCplx() {
  for (let i = 0; i < 4; i++)
    for (let j = 0; j < 3; j++) {
      ctx.beginPath();
      const x = 25 + i * 50;
      const y = 25 + j * 50;
      const radius = 20;
      const startangle = 0;
      const endangle = Math.PI + (Math.PI * j) / 2;
      //draw direction.
      const cnnttcl = i % 2 !== 0;
      ctx.arc(x, y, radius, startangle, endangle, cnnttcl);
      if (i > 1) ctx.fill();
      else ctx.stroke();
    }
}

//THIS SECTION DEALS WITH MUCH MORE COMPLEX CONCEPTS OF DRAWING.

//BEZIER CURVES
//ref: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes
//Quadractic bezier
function DRAW_QUADRACTIC_BEZIER() {
  //DEFINE: quadraticCurveTo(ctrlx,ctrly,x,y)
  //INFO: one control point at ctrlx,ctrly coordinate.
  ctx.beginPath();
  ctx.moveTo(75, 25);
  ctx.quadraticCurveTo(25, 25, 25, 62.5);
  ctx.quadraticCurveTo(25, 100, 50, 100);
  ctx.quadraticCurveTo(50, 120, 30, 125);
  ctx.quadraticCurveTo(60, 120, 65, 100);
  ctx.quadraticCurveTo(125, 100, 125, 62.5);
  ctx.quadraticCurveTo(125, 25, 75, 25);
  ctx.stroke();
}

//Cubic bezier
function DRAW_CUBIC_BEZIER() {
  //DEFINE: bezierCurveTo(ctrlx1,ctrly1,ctrlx2,ctrly2,x,y)
  //INFO: Same as quad bezier but has 2 control points.
  ctx.beginPath();
  ctx.moveTo(75, 40);
  ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
  ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
  ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
  ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
  ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
  ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
  ctx.fill();
}

//simple rect function
function DRAW_RECTANGLE() {
  ctx.beginPath();
  ctx.rect(50, 50, 100, 100);
  ctx.stroke();
}

//test combinations of above functions
function DRAW_MIXED_COMBINATION() {
  roundedRect(ctx, 12, 12, 184, 168, 15);
  roundedRect(ctx, 19, 19, 170, 154, 9);
  roundedRect(ctx, 53, 53, 49, 33, 10);
  roundedRect(ctx, 53, 119, 49, 16, 6);
  roundedRect(ctx, 135, 53, 49, 33, 10);
  roundedRect(ctx, 135, 119, 25, 49, 10);

  ctx.beginPath();
  ctx.arc(37, 37, 13, Math.PI / 7, -Math.PI / 7, false);
  ctx.lineTo(31, 37);
  ctx.fill();

  for (let i = 0; i < 8; i++) {
    ctx.fillRect(51 + i * 16, 35, 4, 4);
  }

  for (let i = 0; i < 6; i++) {
    ctx.fillRect(115, 51 + i * 16, 4, 4);
  }

  for (let i = 0; i < 8; i++) {
    ctx.fillRect(51 + i * 16, 99, 4, 4);
  }

  ctx.beginPath();
  ctx.moveTo(83, 116);
  ctx.lineTo(83, 102);
  ctx.bezierCurveTo(83, 94, 89, 88, 97, 88);
  ctx.bezierCurveTo(105, 88, 111, 94, 111, 102);
  ctx.lineTo(111, 116);
  ctx.lineTo(106.333, 111.333);
  ctx.lineTo(101.666, 116);
  ctx.lineTo(97, 111.333);
  ctx.lineTo(92.333, 116);
  ctx.lineTo(87.666, 111.333);
  ctx.lineTo(83, 116);
  ctx.fill();

  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.moveTo(91, 96);
  ctx.bezierCurveTo(88, 96, 87, 99, 87, 101);
  ctx.bezierCurveTo(87, 103, 88, 106, 91, 106);
  ctx.bezierCurveTo(94, 106, 95, 103, 95, 101);
  ctx.bezierCurveTo(95, 99, 94, 96, 91, 96);
  ctx.moveTo(103, 96);
  ctx.bezierCurveTo(100, 96, 99, 99, 99, 101);
  ctx.bezierCurveTo(99, 103, 100, 106, 103, 106);
  ctx.bezierCurveTo(106, 106, 107, 103, 107, 101);
  ctx.bezierCurveTo(107, 99, 106, 96, 103, 96);
  ctx.fill();

  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.arc(101, 102, 2, 0, Math.PI * 2, true);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(89, 102, 2, 0, Math.PI * 2, true);
  ctx.fill();
  //rounded rectangles
  function roundedRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x, y + radius);
    //DEFINE: arcTo(x1,y1,x2,y2,radius);
    ctx.arcTo(x, y + height, x + radius, y + height, radius);
    ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
    ctx.arcTo(x + width, y, x + width - radius, y, radius);
    ctx.arcTo(x, y, x, y + radius, radius);
    ctx.stroke();
  }
}

// the function maps negative inner drawings
function PUNCTURED_FIGURIES() {
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(150, 0);
  ctx.lineTo(75, 129.9);
  //inner fills
  ctx.moveTo(75, 20);
  ctx.lineTo(50, 60);
  ctx.lineTo(100, 60);
  ctx.fill();
}

// intro to Path2D.
function PATH_2D_INTRO() {
  const rect = new Path2D();
  rect.rect(10, 10, 50, 50);
  const circle = new Path2D();
  circle.arc(100, 35, 25, 0, 2 * Math.PI);
  ctx.stroke(rect);
  ctx.fill(circle);
}

// intro to fillStyles
function FILL_STYLE_INTRO() {
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      //INFO: the fill property needs to be defined at the beginning of styling.
      ctx.fillStyle = `rgb(${Math.floor(255 - 42.5 * i)} ${Math.floor(
        255 - 42.5 * j,
      )} 0)`;
      ctx.fillRect(j * 25, i * 25, 25, 25);
    }
  }
}

// intro to strokestyles
function STROKE_STYLES_INTRO() {
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      // INFO: control the border coloring.
      ctx.strokeStyle = `rgb(0 ${Math.floor(255 - 42.5 * i)} ${Math.floor(
        255 - 42.5 * j,
      )})`;
      ctx.beginPath();
      ctx.arc(12.5 + j * 25, 12.5 + i * 25, 10, 0, 2 * Math.PI, true);
      ctx.stroke();
    }
  }
}

function GLOBAL_ALPHA_TEST() {
  // draw background
  ctx.fillStyle = "#FD0";
  ctx.fillRect(0, 0, 75, 75);
  ctx.fillStyle = "#6C0";
  ctx.fillRect(75, 0, 75, 75);
  ctx.fillStyle = "#09F";
  ctx.fillRect(0, 75, 75, 75);
  ctx.fillStyle = "#F30";
  ctx.fillRect(75, 75, 75, 75);
  ctx.fillStyle = "#FFF";
  ctx.globalAlpha = 0.2;

  for (let i = 0; i < 7; i++) {
    ctx.beginPath();
    ctx.arc(75, 75, 10 + 10 * i, 0, Math.PI * 2, true);
    ctx.fill();
  }
}

function RGB_ALPHA_TRANSPARENCY() {}

//name the active function here.
GLOBAL_ALPHA_TEST();
