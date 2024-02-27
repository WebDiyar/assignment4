// routes/quizRouter.js

const express = require("express");
const router = express.Router();

const quizQuestions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Paris", "Madrid"],
    correctAnswer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Venus", "Jupiter"],
    correctAnswer: "Mars",
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["Charles Dickens", "William Shakespeare", "Jane Austen"],
    correctAnswer: "William Shakespeare",
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["Elephant", "Blue Whale", "Giraffe"],
    correctAnswer: "Blue Whale",
  },
  {
    question: "In which year did the Titanic sink?",
    options: ["1905", "1912", "1920"],
    correctAnswer: "1912",
  },
];

const correctAnswers = quizQuestions.map((question) => question.correctAnswer);

router.get("/quiz", async (req, res) => {
  res.render("quiz", { questions: quizQuestions });
});

router.post("/submit-quiz", (req, res) => {
  try {
    const userAnswers = quizQuestions.map(
      (question, index) => req.body[`answer${index}`]
    );

    const score = calculateScore(userAnswers, correctAnswers);

    res.redirect(`/quiz-results?score=${score}`);
  } catch (error) {
    console.error("Error submitting quiz:", error);
    res.status(500).send("Error submitting quiz. Please try again.");
  }
});

router.get("/quiz-results", (req, res) => {
  const score = req.query.score;

  res.render("quiz-result", { score });
});

function calculateScore(userAnswers, correctAnswers) {
  let score = 0;

  for (let i = 0; i < userAnswers.length; i++) {
    if (userAnswers[i] === correctAnswers[i]) {
      score++;
    }
  }

  return score;
}

module.exports = router;
