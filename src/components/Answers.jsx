import React from 'react';

function Answers() {
  return (
    <div className="answers-wrapper">
      <div className="answers-title-wrapper">
        <span className="answers-title">ANSWERS</span>
      </div>
      {/* <div className="text-wrapper" /> */}
      <input className="text-input" type="text" placeholder="Answer here..." />
    </div>
  );
}

export default Answers;
