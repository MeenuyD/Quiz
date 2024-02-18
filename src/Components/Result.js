import React from 'react';

function Result({ score, totalQuestions }) {
  const percentage = (score / totalQuestions) * 100;
  const isPerfectScore = percentage === 100;

  return (
    <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold mb-4">Quiz Result</h1>
      <p className="text-lg mb-2">You scored {score} out of {totalQuestions}.</p>
      <p className="text-lg mb-4">
        Your percentage is {percentage}%.
      </p>
      {isPerfectScore && (
        <div className="relative">
          <div className="bg-green-500 text-white font-semibold py-1 px-2 rounded-full absolute top-0 right-0 transform -translate-y-full translate-x-full">
            Perfect Score!
          </div>
          <svg className="h-6 w-6 text-green-500 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
      )}
    </div>
  );
}

export default Result;