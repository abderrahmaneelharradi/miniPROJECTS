import React, { useState } from 'react';
import questions from '../data/questions';
import Question from './Question';
import Score from './Score';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setSelectedOption(null);
    const next = currentQuestion + 1;
    if (next < questions.length) {
      setCurrentQuestion(next);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <Score score={score} total={questions.length} />
      ) : (
        <>
          <Question
            questionData={questions[currentQuestion]}
            selectedOption={selectedOption}
            onOptionSelect={handleOptionSelect}
          />
          <button onClick={handleNext} disabled={!selectedOption}>
            Next
          </button>
        </>
      )}
    </div>
  );
};

export default Quiz;
