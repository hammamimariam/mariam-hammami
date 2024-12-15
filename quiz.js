// Données du Quiz
const quizData = [
    {
        question: "En quelle année la première PlayStation a-t-elle été lancée ?",
        answers: {
            a: "1994",
            b: "1996",
            c: "1998"
        },
        correct: "a"
    },
    {
        question: "Quel est le nom du personnage principal dans 'The Legend of Zelda' ?",
        answers: {
            a: "Zelda",
            b: "Link",
            c: "Ganondorf"
        },
        correct: "b"
    },
    {
        question: "Quel jeu se déroule dans la région de 'San Andreas' ?",
        answers: {
            a: "Grand Theft Auto",
            b: "Call of Duty",
            c: "Minecraft"
        },
        correct: "a"
    },
    {
        question: "Quel est le jeu vidéo le plus vendu de tous les temps ?",
        answers: {
            a: "Minecraft",
            b: "Tetris",
            c: "Grand Theft Auto V"
        },
        correct: "a"
    },
    {
        question: "Quelle franchise de jeux comprend la série 'Black Ops' ?",
        answers: {
            a: "Battlefield",
            b: "Call of Duty",
            c: "Fortnite"
        },
        correct: "b"
    }
];

// Références
const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");

// Générer le Quiz
function buildQuiz() {
    const output = [];

    quizData.forEach((currentQuestion, questionNumber) => {
        const answers = [];
        for (const letter in currentQuestion.answers) {
            answers.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter}: ${currentQuestion.answers[letter]}
                </label>`
            );
        }

        output.push(
            `<div class="question">${currentQuestion.question}</div>
             <div class="answers">${answers.join("")}</div>`
        );
    });

    quizContainer.innerHTML = output.join("");
}

// Afficher les Résultats
function showResults() {
    const answerContainers = quizContainer.querySelectorAll(".answers");
    let score = 0;

    quizData.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === currentQuestion.correct) {
            score++;
            answerContainer.style.color = "green";
        } else {
            answerContainer.style.color = "red";
        }
    });

    resultsContainer.innerHTML = `Votre score est ${score} sur ${quizData.length}`;
}

// Écouteurs d'événements
buildQuiz();
submitButton.addEventListener("click", showResults);
