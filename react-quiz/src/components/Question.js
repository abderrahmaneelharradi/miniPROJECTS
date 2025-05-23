import React from 'react';

const Question = ({ questionData, selectedOption, onOptionSelect }) => {
  return (
    <div>
      <h2>{questionData.question}</h2>
      <ul>
        {questionData.options.map((option, index) => (
          <li key={index}>
            <button 
              onClick={() => onOptionSelect(option)}
              className={selectedOption === option ? "selected" : ""}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
