

const galleryItems = document.querySelectorAll('.gallery-item-sec4');
let currentIndex = 0;

const prevBtn = document.getElementById('prevBtn-sec4');
const nextBtn = document.getElementById('nextBtn-sec4');

prevBtn.addEventListener('click', showPrevious);
nextBtn.addEventListener('click', showNext);

// Gallery navigation functions
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

// Header dropdown menu functionality
document.querySelector('.header__menu-toggle').addEventListener('click', function() {
  const dropdownMenu = document.querySelector('.header__dropdown-menu');

  dropdownMenu.classList.toggle('show');

});

document.querySelector('.header__close-button').addEventListener('click', function() {
    const dropdown = document.querySelector('.header__dropdown-menu');
    dropdown.classList.remove('show');

  });


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
window.addEventListener('scroll', function() {
    const dragons = document.querySelectorAll('.section2');
    dragons.forEach(dragon => {
        const rect = dragon.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            dragon.classList.add('visible');
        }
    });
});

const quizQuestions = [
    {
        question: "What is the color of the Fire Dragon?",
        options: ["Red", "Blue", "Green", "Yellow"],
        answer: 0 // Index of the correct answer
    },
    {
        question: "What element does the Ice Dragon control?",
        options: ["Fire", "Water", "Ice", "Earth"],
        answer: 2
    },
    {
        question: "Where does the Sky Dragon soar?",
        options: ["Over mountains", "Above the clouds", "In the ocean", "In forests"],
        answer: 1
    }
];

// Function to load quiz questions
function loadQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    quizQuestions.forEach((question, index) => {
        const questionHTML = `
            <div class="question">
                <p>${question.question}</p>
                ${question.options.map((option, i) => `
                    <label>
                        <input type="radio" name="question${index}" value="${i}">
                        ${option}
                    </label>
                `).join('')}
            </div>
        `;
        quizContainer.innerHTML += questionHTML;
    });
}

// Function to handle quiz submission
function handleQuizSubmit() {
    let score = 0;
    quizQuestions.forEach((question, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && parseInt(selectedOption.value) === question.answer) {
            score++;
        }
    });
    const resultDiv = document.getElementById('quiz-result');
    resultDiv.innerHTML = `You scored ${score} out of ${quizQuestions.length}.`;
}

// Load quiz when the page loads
window.onload = function() {
    loadQuiz();
    document.getElementById('submit-quiz').addEventListener('click', handleQuizSubmit);
};


// Load quiz when the page loads
window.onload = function() {
    loadQuiz();
    document.getElementById('submit-quiz').addEventListener('click', handleQuizSubmit);
};

const rapNames = [
    "Drake Spitta",
    "Fire Flow",
    "Frostbite MC",
    "Shadow Blaze",
    "Rhyme Wing",
    "Dragon Lyricist",
    "Dragon Bars",
    "Scaly Bars",
    "Lil Ice",
    "Busta Breath"
];

function generateDragonRapName() {
    const randomIndex = Math.floor(Math.random() * rapNames.length); // Corrected variable name
    return rapNames[randomIndex]; // Use rapNames instead of dragonRapNames
}

// Event listener for the button
document.getElementById("generate-dragon-name-button").addEventListener("click", function() {
    const dragonRapName = generateDragonRapName();
    document.getElementById("dragon-name-display").innerText = dragonRapName;
});


