const canvas = document.getElementById("render_canvas")
const ctx = canvas.getContext("2d");
//NOTE: Disable specific sections to view

//drawing simple rect shape.
ctx.fillRect(0,0,100,100);
ctx.clearRect(15,15,60,60);
ctx.strokeRect(20,20,50,50);

//drawing on canvas using paths.
ctx.beginPath();
//consider this as the pen being lifted.
ctx.moveTo(150,50);
ctx.lineTo(200,75);
ctx.lineTo(200,25);
ctx.fill();

//drawing simple figurines.
ctx.beginPath();
ctx.arc(75,75,50,0,Math.PI * 2, true);
//without moveTo, the circle extends from the last draw point
ctx.moveTo(100,75);
ctx.arc(75, 75, 25,0 , Math.PI, false);
ctx.moveTo(65,65);
ctx.arc(60,65,5,0,Math.PI * 2,true);
ctx.moveTo(95,65);
ctx.arc(90,65,5,0,Math.PI*2,true);
ctx.stroke();