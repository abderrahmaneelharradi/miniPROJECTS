import React from 'react';

const Score = ({ score, total }) => {
  return (
    <div>
      <h2>Quiz completed !</h2>
      <p>Your score: {score} / {total}</p>
    </div>
  );
};

export default Score;
