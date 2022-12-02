// creating and resizing canvas
const  canvas =  document.querySelector('canvas')


canvas.width = window.innerWidth -100
canvas.height = window.innerHeight -100

let ctx = canvas.getContext('2d');

// drawing element
 let x = 100;
 let y = 100;
 let dx = 4;
 let dy = 4;
 let radius  =  30;


function animate(){
    requestAnimationFrame(animate)
    ctx.clearRect(0,0,innerWidth,innerHeight)
    ctx.beginPath()
ctx.arc(x,y,radius,0,Math.PI * 2, false )
ctx.stroke()

if( x + radius > canvas.width || x - radius  < 0){
    dx = -dx
}
if(y + radius > canvas.height || y - radius < 0){ 
    dy = -dy
}
x += dx
y += dy
}
animate()

