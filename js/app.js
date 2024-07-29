//THIS REFERENCES ONLY FOR DRAWING SHAPES.
const canvas = document.getElementById("render_canvas")
//adjusts the canvas size ideally.
canvas.height = canvas.clientHeight;
canvas.width = canvas.clientWidth;
const ctx = canvas.getContext("2d");
//NOTE: Disable specific sections to view

function drawRect(){
    //drawing simple rect shape.
    ctx.fillRect(0,0,100,100);
    ctx.clearRect(15,15,60,60);
    ctx.strokeRect(20,20,50,50);
}

function drawSimplePath(){
    //drawing on canvas using paths.
    ctx.beginPath();
    //consider this as the pen being lifted.
    ctx.moveTo(150,50);
    ctx.lineTo(200,75);
    ctx.lineTo(200,25);
    ctx.fill();
}

function drawFigurine(){
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
}

function simpleLines(){
    //to draw lines
    ctx.beginPath();
    ctx.moveTo(25,25);
    ctx.lineTo(105,25);
    ctx.lineTo(25,105);
    ctx.closePath();    
    ctx.stroke();
    //to auto-fill closed shapes
    ctx.fill();
}

//arc & arcTo explained.
function simplePathsCplx(){
    for(let i=0;i<4;i++)
        for(let j=0;j<3;j++){
            ctx.beginPath();
            const x=25+i*50;
            const y=25+j*50;
            const radius=20;
            const startangle=0;
            const endangle = Math.PI+(Math.PI*j)/2;
            //draw direction.
            const cnnttcl = i%2!==0;
            ctx.arc(x,y,radius,startangle,endangle,cnnttcl);
            if(i>1) ctx.fill();
            else ctx.stroke();
        }    
}

//THIS SECTION DEALS WITH MUCH MORE COMPLEX CONCEPTS OF DRAWING.

//BEZIER CURVES
//ref: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes
//Quadractic bezier
function DRAW_QUADRACTIC_BEZIER(){
    //PARAMS: (ctrlx,ctrly,x,y)
    //INFO: one control point at ctrlx,ctrly coordinate.
    ctx.beginPath();
    ctx.moveTo(75,25);
    ctx.quadraticCurveTo(25, 25, 25, 62.5);
    ctx.quadraticCurveTo(25, 100, 50, 100);
    ctx.quadraticCurveTo(50, 120, 30, 125);
    ctx.quadraticCurveTo(60, 120, 65, 100);
    ctx.quadraticCurveTo(125, 100, 125, 62.5);
    ctx.quadraticCurveTo(125, 25, 75, 25);
    ctx.stroke();
}

//Cubic bezier
function DRAW_CUBIC_BEZIER(){
    //PARAMS: (ctrlx1,ctrly1,ctrlx2,ctrly2,x,y)
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
function DRAW_RECTANGLE(){
    ctx.beginPath();
    ctx.rect(50,50,100,100);
    ctx.stroke();
}

//test combinations of above functions
function DRAW_MIXED_COMBINATION(){

}

//name the active function here.
DRAW_RECTANGLE();