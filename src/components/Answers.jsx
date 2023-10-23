import React from 'react';

function Answers() {
  return (
    <div className="answers-wrapper">
      <div className="answers-title-wrapper">
        <span className="answers-title">ANSWERS</span>
      </div>
      {/* <div className="text-wrapper" /> */}
      <input className="answers-text-input" type="text" placeholder="Answer here..." />
      <img src="src/assets/icons/question-mark-icon.png" alt="question mark icon" className="question-mark-icon" />
    </div>
  );
}

export default Answers;
