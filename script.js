const galleryItems = document.querySelectorAll('.gallery-item-sec4');
let currentIndex = 0;

const prevBtn = document.getElementById('prevBtn-sec4');
const nextBtn = document.getElementById('nextBtn-sec4');

prevBtn.addEventListener('click', showPrevious);
nextBtn.addEventListener('click', showNext);


function showPrevious() {
    galleryItems[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    galleryItems[currentIndex].classList.add('active');
  }

  function showNext() {
    galleryItems[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % galleryItems.length;
    galleryItems[currentIndex].classList.add('active');
  }

document.querySelectorAll(".read-more").forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".card");
    card.querySelector(".card-back").style.display = "block"; // Show the back
    card.querySelector("p").style.display = "none"; // Hide the front text
    button.style.display = "none"; // Hide the "Read More" button
  });
});

document.querySelectorAll(".read-less").forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".card");
    card.querySelector(".card-back").style.display = "none"; // Hide the back
    card.querySelector("p").style.display = "block"; // Show the front text
    card.querySelector(".read-more").style.display = "block"; // Show the button again
  });
});

const container = document.querySelector(".particle-container");

for (let i = 0; i < 100; i++) {
  const particle = document.createElement("div");
  particle.classList.add("particle");

  // Random position
  const topPosition = Math.random() * 100; // Percentage
  const leftPosition = Math.random() * 100; // Percentage
  particle.style.top = `${topPosition}%`;
  particle.style.left = `${leftPosition}%`;

  // Random animation duration
  const animationDuration = Math.random() * 10 + 2; // Between 2s and 12s
  particle.style.animationDuration = `${animationDuration}s`;

  container.appendChild(particle);
}
