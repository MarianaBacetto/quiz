const questions = [
    {
        question: "Quanto é 2+2?",
        answers: [
            { id: 1, text: "1", correct: false },
            { id: 2, text: "2", correct: false },
            { id: 3, text: "3", correct: false },
            { id: 4, text: "4", correct: true },
        ],
    },

    {
        question: "Quanto é 2+2?",
        answers: [
            { id: 1, text: "1", correct: false },
            { id: 2, text: "2", correct: false },
            { id: 3, text: "3", correct: false },
            { id: 4, text: "4", correct: true },
        ],
    },

    {
        question: "Quanto é 2+2?",
        answers: [
            { id: 1, text: "1", correct: false },
            { id: 2, text: "2", correct: false },
            { id: 3, text: "3", correct: false },
            { id: 4, text: "4", correct: true },
        ],
    },

    {
        question: "Quanto é 2+2?",
        answers: [
            { id: 1, text: "1", correct: false },
            { id: 2, text: "2", correct: false },
            { id: 3, text: "3", correct: false },
            { id: 4, text: "4", correct: true },
        ],
    },
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons")
const nextButton = document.getElementById("next-btn")

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Próxima";
    showQuestion();
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.dataset.id = answer.id;
        button.classList.add("btn");
        answerButtons.appendChild(button);
    })
}

startQuiz();
