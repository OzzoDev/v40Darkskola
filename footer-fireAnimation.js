const canvas = document.getElementById("fireCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = 150;

const particlesArray = [];
const numberOfParticles = 400; // Total number of particles

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width; // Random horizontal position
    this.y = canvas.height; // Start at the bottom of the canvas
    this.size = Math.random() * 10 + 5; // Random size
    this.speedY = Math.random() * 1 + 0.5; // Slower upward speed (range 0.5 to 1.5)
    this.speedX = (Math.random() - 0.5) * 0.2; // Slower sideways movement (range -0.1 to 0.1)
    this.opacity = Math.random() * 0.6 + 0.4; // Random opacity between 0.4 and 1
  }

  update() {
    this.y -= this.speedY; // Move upwards
    this.x += this.speedX; // Move sideways
    if (this.size > 0.2) this.size -= 0.05; // Shrink the particle more slowly
  }

  draw() {
    ctx.globalAlpha = this.opacity; // Set opacity for fading effect
    drawFlame(this.x, this.y, this.size, this.size * 2); // Draw custom flame shape
    ctx.globalAlpha = 1; // Reset opacity
  }
}

// Function to draw the flame using Bezier curves
function drawFlame(x, y, width, height) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.bezierCurveTo(
    x - width / 2, y + height / 3,
    x + width / 2, y + height / 3,
    x, y + height
  );
  ctx.bezierCurveTo(
    x + width / 2, y + height / 2,
    x - width / 2, y + height / 2,
    x, y
  );
  ctx.fillStyle = "rgba(255, 69, 0, 0.8)"; // Flame color
  ctx.fill();
  ctx.closePath();
}

function createParticles() {
  // Create a new particle for every call to animate
  particlesArray.push(new Particle());
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

  particlesArray.forEach((particle, index) => {
    particle.update(); // Update particle position and size
    particle.draw(); // Draw the particle
    if (particle.size <= 0.2) {
      particlesArray.splice(index, 1); // Remove tiny particles
    }
  });

  // Create new particles each frame
  for (let i = 0; i < 5; i++) { // Adjust how many particles are created each frame
    createParticles();
  }
  
  requestAnimationFrame(animateParticles); // Loop the animation
}

// Start the animation
animateParticles();
