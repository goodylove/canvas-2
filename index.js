// creating and resizing canvas
const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

const ctx = canvas.getContext("2d");

const mouse = {};
function handleMouseMove(e) {
  mouse.x = e.x;
  mouse.y = e.y;
}
addEventListener("mousemove", handleMouseMove);
// drawing element
const arrColor = ["#662400", "#B33F00", "#FF6B1A", "#006663", "#00B3AD"];
//  to draw multiple  cirlce  we will use    class constructor
class Circle {
  constructor(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = arrColor[Math.floor(Math.random() * arrColor.length)];
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.stroke();
    ctx.fill();
  }
  upDatePosition() {
    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;
    if (
      mouse.x - this.x < 100 &&
      mouse.x - this.x > -100 &&
      mouse.y - this.y < 100 &&
      mouse.y - this.y > -100
    ) {
      this.radius = this.radius < 40 ? this.radius + 1 : this.radius;
    } else {
      this.radius =
        this.radius > this.minRadius ? this.radius - 1 : this.radius;
    }

    this.draw();
  }
}

let arrCircle = [];

for (let i = 0; i < 700; i++) {
  let radius = Math.random() * 3 + 1;
  let x = Math.random() * (canvas.width - radius * 2) + radius;
  let y = Math.random() * (canvas.height - radius * 2) + radius;
  let dx = Math.random() - 0.5;
  let dy = Math.random() - 0.5;
  arrCircle.push(new Circle(x, y, dx, dy, radius));
}

//  let circle = new Circle(200, 100 ,30, 3,3 ,)

function animate() {
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  requestAnimationFrame(animate);
  for (let i = 0; i < arrCircle.length; i++) {
    arrCircle[i].upDatePosition();
  }
}
animate();
