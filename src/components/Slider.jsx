import React from 'react';

function Slider() {
  return (
    <div className="slider-wrapper">
      <div className="range-label-wrapper">
        <span className="range-label-border">
          <span className="range-label-small" />
        </span>
      </div>
      <div className="range-wrapper">
        <input type="range" step="25" />
      </div>
      <div className="range-label-wrapper">
        <span className="range-label-border">
          <span className="range-label-big" />
        </span>
      </div>
    </div>
  );
}

export default Slider;
