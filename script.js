const quiz = [
    {
        question: "what is the most used programming language in 2021?",
        ans1text: "java",
        ans2text: "C",
        ans3text: "python",
        ans4text: "javaScript",
        answer: "javaScript",
    },
    {
        question: "What does CSS stand for?",
        ans1text: "Computer Style Sheets",
        ans2text: "Cascading Style Sheets",
        ans3text: "Creative Styling Solutions",
        ans4text: "Content Styling System",
        answer: "Cascading Style Sheets",
    },
    {
        question: "what does HTML stand for?",
        ans1text: "Hypertext Markup Language",
        ans2text: "High Tech Mobile Language",
        ans3text: "Home Tool Management Language",
        ans4text: "Hyperlink and Text Manipulation Language",
        answer: "Hypertext Markup Language",
    },
    {
        question: "what year was JavaScript launched?",
        ans1text: "1996",
        ans2text: "1995",
        ans3text: "1994",
        ans4text: "none of the above",
        answer: "1995",
    }
];

const questionElement = document.getElementById("quiz-question");
const option_a = document.getElementById("text_option_a");
const option_b = document.getElementById("text_option_b");
const option_c = document.getElementById("text_option_c");
const option_d = document.getElementById("text_option_d");
const submit = document.getElementById("submit");
const answerElements = document.querySelectorAll(".answer");

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    questionElement.textContent = quiz[currentQuestion].question;
    option_a.textContent = quiz[currentQuestion].ans1text;
    option_b.textContent = quiz[currentQuestion].ans2text;
    option_c.textContent = quiz[currentQuestion].ans3text;
    option_d.textContent = quiz[currentQuestion].ans4text;
}

submit.addEventListener('click', () => {
    const checkedAns = document.querySelector('input[type="radio"]:checked');
    if (checkedAns === null) {
        alert('Please select an answer');
    } else {
        if (checkedAns.nextElementSibling.textContent === quiz[currentQuestion].answer) {
            score++;
            console.log(`now your score is ${score}`);
        }
        currentQuestion++;
        console.log(` your currentQuetion is ${currentQuestion}`);

        if (currentQuestion < quiz.length) {
            loadQuestion();
            document.querySelectorAll('input[type="radio"]').forEach(radio => radio.checked = false);
        } else {
            alert("Your score is " + score + " out of " + quiz.length);
            location.reload();
        }
    }
});

loadQuestion();
