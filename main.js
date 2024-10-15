const questions = [
    {
        question: "1.What does AI stand for?",
        answers: ["Artificial Intelligence", "Automated Interface", "Automated Intelligence", "Augmented Interface"],
        correct: "Artificial Intelligence"
    },
    {
        question: "2.Which of the following is a branch of AI?",
        answers: ["Cryptography", "Quantum Computing", "Blockchain", "Machine Learning"],
        correct: "Machine Learning"
    },
    {
        question: "3.Who is considered the father of AI?",
        answers: ["Alan Turing", "John McCarthy", "Geoffrey Hinton", "Elon Musk"],
        correct: "John McCarthy"
    },
    {
        question: "4.Which is an application of AI in healthcare?",
        answers: ["AI-driven diagnostics", "Cloud computing", "Quantum encryption", "Nanotechnology"],
        correct: "AI-driven diagnostics"
    },
    {
        question: "5.What is a chatbot?",
        answers: ["A type of computer virus", "A robot vaccum cleaner", "A program that can have conversations with people", "A video game character"],
        correct: "A program that can have conversations with people"
    },
    {
        question: "6.What is Natural Language Processing (NLP)?",
        answers: ["A technique for encrypting data", "A field focused on human-computer interaction", "A method for optimizing hardware", "A way to process quantum information"],
        correct: "A field focused on human-computer interaction"
    },
    {
        question: "7.Which of the following is a common AI programming language?",
        answers: ["Python", "HTML", "CSS", "SQL"],
        correct: "Python"
    },
    {
        question: "8.What is machine learning?",
        answers: ["A way for machines to learn how to dance", "A technology for building robots", "A method for machines to fix themselves", "A type of AI that allows computers to learn from data"],
        correct: "A type of AI that allows computers to learn from data"
    },
    {
        question: "9.Which company developed the AI system 'Watson'?",
        answers: ["IBM", "Microsoft", "Google", "Amazon"],
        correct: "IBM"
    },
    {
        question: "10.Which famous game did an AI called Deep Blue famously win against a human champion?",
        answers: ["Monopoly", "Chess", "Go", "Poker"],
        correct: "Chess"
    }
];

let currentQuestion = 0;

const quiz = document.getElementById('quiz');
const questionElement = document.querySelector('.question');
const answerButtons = document.querySelectorAll('.answer');
const nextButton = document.getElementById('next-btn');
const resultContainer = document.getElementById('result');

function showQuestion(question) {
    questionElement.textContent = question.question;
    answerButtons.forEach((button, index) => {
        button.textContent = question.answers[index];
        button.dataset.correct = question.answers[index] === question.correct;
        button.classList.remove('correct', 'incorrect');
        button.disabled = false;
    });
    nextButton.style.display = 'none';
}

function selectAnswer(button) {
    const correct = button.dataset.correct === 'true';
    if (correct) {
        button.classList.add('correct');
        questionElement.textContent = "Correct!";
    } else {
        button.classList.add('incorrect');
        const correctAnswer = [...answerButtons].find(btn => btn.dataset.correct === 'true');
        questionElement.textContent = `Wrong! The correct answer is: ${correctAnswer.textContent}`;
    }
    answerButtons.forEach(btn => btn.disabled = true);
    nextButton.style.display = 'block';
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion(questions[currentQuestion]);
    } else {
        resultContainer.classList.remove('hide');
        nextButton.style.display = 'none';
        
    }
}




showQuestion(questions[currentQuestion]);


