// Array of riddles with questions and answers
const riddles = [
    { question: "What has keys but can't open locks?", answer: "piano" },
    { question: "I speak without a mouth and hear without ears. What am I?", answer: "echo" },
    { question: "The more of this there is, the less you see. What is it?", answer: "darkness" },
    { question: "What has to be broken before you can use it?", answer: "egg" },
    { question: "I’m tall when I’m young, and I’m short when I’m old. What am I?", answer: "candle" },
    { question: "What has one head, one foot, and four legs?", answer: "bed" },
    { question: "What can travel around the world while staying in the corner?", answer: "stamp" },
    { question: "What is full of holes but still holds water?", answer: "sponge" }
];

// Function to generate a random riddle
function generateRiddle() {
    const randomIndex = Math.floor(Math.random() * riddles.length);
    const selectedRiddle = riddles[randomIndex];

    document.getElementById("riddle-question").textContent = selectedRiddle.question;
    document.getElementById("feedback").textContent = ""; // Clear previous feedback
    document.getElementById("feedback").className = ""; // Reset feedback styles
    document.getElementById("riddle-answer").value = ""; // Clear the answer input
}

// Function to check the user's answer
function checkAnswer() {
    const userAnswer = document.getElementById("riddle-answer").value.toLowerCase();
    const currentRiddle = document.getElementById("riddle-question").textContent;
    const correctAnswer = riddles.find(riddle => riddle.question === currentRiddle).answer;

    const feedback = document.getElementById("feedback");
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
        feedback.className = "correct";
    } else {
        feedback.textContent = "Incorrect, try again!";
        feedback.className = "incorrect";
    }
}

// Initialize the first riddle on page load
generateRiddle();
