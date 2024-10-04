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