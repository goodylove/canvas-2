// creating and resizing canvas
const  canvas =  document.querySelector('canvas')


canvas.width = window.innerWidth -100
canvas.height = window.innerHeight -100

let ctx = canvas.getContext('2d');

// drawing element
 



//  to draw multiple  cirlce  we will use    class constructor
class Circle {
constructor(x ,y, dx,dy, radius){
this.x = x;
this.y = y;
this.dx = dx;
this.dy = dy;
this.radius = radius;

    }

    draw(){
        ctx.beginPath()
        ctx.arc(this.x,this.y,this.radius,0,Math.PI * 2, false )
        ctx.stroke()
        ctx.fillStyle = 'green'

    }
    upDatePosition(){

        if(this.x + this.radius > canvas.width ||this.x - this.radius  < 0){
            this.dx = -this.dx
        }
        if(this.y + this.radius > canvas.height || this.y - this.radius < 0){ 
            this.dy = -this.dy
        }
        this.x += this.dx
       this.y += this.dy
       this.draw()
        
    }
}

let arrCircle = []

for (let i = 0; i < 100; i++) {
    let radius  =  30;
    let x = Math.random ()* ( canvas.width - radius * 2) + radius
    let y = Math.random ()* (canvas.height - radius * 2)  + radius
    let dx = (Math.random() - 0.5) 
    let dy = (Math.random() - 0.5) 
    arrCircle.push(new Circle(x,y ,dx,dy, radius))
}


//  let circle = new Circle(200, 100 ,30, 3,3 ,)

function animate(){
    ctx.clearRect(0,0,innerWidth,innerHeight)
    requestAnimationFrame(animate)
    for (let i = 0; i < arrCircle.length; i++) {
        arrCircle[i].upDatePosition()
        
    }

   
}
animate()

