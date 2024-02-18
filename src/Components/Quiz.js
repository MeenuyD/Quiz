import React, { useState } from 'react';
import Question from './Question';
import Result from './Result';

function Quiz() {
  const questions = [
    {
      id: 1,
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Rome'],
      answer: 'Paris'
    },
    {
      id: 2,
      question: 'Which planet is known as the Red Planet?',
      options: ['Jupiter', 'Venus', 'Mars', 'Saturn'],
      answer: 'Mars'
    },
    {
      id: 3,
      question: 'What is the largest mammal?',
      options: ['Elephant', 'Blue whale', 'Giraffe', 'Hippo'],
      answer: 'Blue whale'
    },
    {
      id: 4,
      question: 'Which country is known as the Land of the Rising Sun?',
      options: ['China', 'India', 'Japan', 'South Korea'],
      answer: 'Japan'
    },
    {
      id: 5,
      question: 'What is the chemical symbol for water?',
      options: ['H2O', 'CO2', 'O2', 'H2SO4'],
      answer: 'H2O'
    },
    {
      id: 6,
      question: 'Who wrote the play "Romeo and Juliet"?',
      options: ['William Shakespeare', 'Charles Dickens', 'Jane Austen', 'Mark Twain'],
      answer: 'William Shakespeare'
    },
    {
      id: 7,
      question: 'What is the capital of Australia?',
      options: ['Sydney', 'Melbourne', 'Canberra', 'Brisbane'],
      answer: 'Canberra'
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerSubmit = (answer) => {
    setUserAnswers([...userAnswers, answer]);
    setCurrentQuestion(currentQuestion + 1);
  };

  const calculateScore = () => {
    let score = 0;
    userAnswers.forEach((userAnswer, index) => {
      if (userAnswer === questions[index].answer) {
        score++;
      }
    });
    return score;
  };

  return (
    <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-lg">
      {!showResult && (
        <>
          <h1 className="text-2xl font-semibold mb-4">Quiz App</h1>
          {currentQuestion < questions.length ? (
            <Question
              question={questions[currentQuestion]}
              handleAnswerSubmit={handleAnswerSubmit}
            />
          ) : (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setShowResult(true)}
            >
              Show Result
            </button>
          )}
        </>
      )}
      {showResult && <Result score={calculateScore()} totalQuestions={questions.length} />}
    </div>
  );
}

export default Quiz;