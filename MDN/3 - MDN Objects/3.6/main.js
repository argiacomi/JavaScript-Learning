// setup canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

const body = document.querySelector('body');
const para = document.createElement('p');
body.appendChild(para);

//setup Classes
class Shape {
	constructor(x, y, velX, velY) {
		this.x = x;
		this.y = y;
		this.velX = velX;
		this.velY = velY;
	}
}

class Ball extends Shape {
	constructor(x, y, velX, velY, color, size) {
		super(x, y, velX, velY);
		this.color = color;
		this.size = size;
		this.exists = true;
	}

	draw() {
		ctx.beginPath();
		ctx.fillStyle = this.color;
		ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
		ctx.fill();
	}

	update() {
		if ((this.x + this.size) >= width) {
			this.velX = -(this.velX);
		}
	
		if ((this.x - this.size) <= 0) {
		this.velX = -(this.velX);
		}
	
		if ((this.y + this.size) >= height) {
		this.velY = -(this.velY);
		}
	
		if ((this.y - this.size) <= 0) {
		this.velY = -(this.velY);
		}
		
		this.x += this.velX;
		this.y += this.velY;
	 }

	collisionDetect() {
		for (const ball of balls) {
			if (!(this === ball && ball.exists)) {
				const dx = this.x - ball.x;
				const dy = this.y - ball.y;
				const distance = Math.sqrt(dx * dx + dy * dy);
		
				if (distance < this.size + ball.size) {
				ball.color = this.color = randomRGB();
				}
			}
		}
	}
}

class EvilCircle extends Shape{
	constructor(x, y) {
		super(x, y, 20, 20);
		this.color = 'white';
		this.size = 20;
		
		window.addEventListener('keydown', (e) => {
			switch(e.key) {
			  case 'ArrowLeft':
				this.x -= this.velX;
				break;
			  case ('ArrowRight'):
				this.x += this.velX;
				break;
			  case 'ArrowUp':
				this.y -= this.velY;
				break;
			  case 'ArrowDown':
				this.y += this.velY;
				break;
			}
		});
	}

	draw() {
		ctx.beginPath();
		ctx.lineWidth = 3;
		ctx.strokeStyle = this.color;
		ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
		ctx.stroke();
	}

	checkBounds() {
		if ((this.x + this.size) >= width) {
			this.x = (width-this.size);
		}
		
		if ((this.x - this.size) <= 0) {
			this.x = (this.size);
		}
		
		if ((this.y + this.size) >= height) {
			this.y = (height-this.size);
		}
		
		if ((this.y - this.size) <= 0) {
			this.y = (this.size);
		}
	}

	collisionDetect() {
		for (const ball of balls) {
			if (ball.exists) {
				const dx = this.x - ball.x;
				const dy = this.y - ball.y;
				const distance = Math.sqrt(dx * dx + dy * dy);
		
				if (distance < this.size + ball.size) {
				ball.exists = false;
				}
			}
		}
	}
}

// function to generate random number

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(50, 255)},${random(50, 255)},${random(0, 255)})`;
}

// setup Balls Array
const balls = [];

while (balls.length < 25) {
   const size = random(10,20);
   const ball = new Ball(
      // ball position always drawn at least one ball width
      // away from the edge of the canvas, to avoid drawing errors
      random(0 + size,width - size),
      random(0 + size,height - size),
      random(-7,7),
      random(-7,7),
      randomRGB(),
      size
   );

  balls.push(ball);
}


// setup Evil Circle
const evilCircle = new EvilCircle((0), 0);
evilCircle.x = width*.25
evilCircle.y = height-evilCircle.size-2


//animation loop
function loop() {
	ctx.fillStyle = 'rgba(0, 0, 0, .2)';
	ctx.fillRect(0, 0, width, height);
 
	for (const ball of balls) {
		if(ball.exists){
			ball.draw();
			ball.update();
			ball.collisionDetect();
		}
	}

	evilCircle.draw();
	evilCircle.checkBounds();
	evilCircle.collisionDetect();
	
	ballCount = balls.filter(b => b.exists == true).length;
	para.textContent = `Ball count: ${ballCount}`

	requestAnimationFrame(loop);
 }

 loop();