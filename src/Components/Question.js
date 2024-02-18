import React, { useState } from 'react';

function Question({ question, handleAnswerSubmit }) {
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const handleSelectAnswer = (answer) => {
    setSelectedAnswer(answer);
  };

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-2">{question.question}</h2>
      <div className="flex flex-col">
        {question.options.map((option, index) => (
          <button
            key={index}
            className={`mb-2 p-2 rounded border ${
              selectedAnswer === option ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
            onClick={() => handleSelectAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => handleAnswerSubmit(selectedAnswer)}
        disabled={!selectedAnswer}
      >
        Submit
      </button>
    </div>
  );
}

export default Question;