import React from 'react';

function Slider() {
  return (
    <div className="slider-wrapper">
      <div className="small-size-wrapper">
        <span className="range-label-small-border">
          <span className="range-label-small" />
        </span>
      </div>
      <div className="range-wrapper">
        <input type="range" step="25" />
      </div>
      <div className="range-label-big-wrapper">
        <span className="range-label-big-border">
          <span className="range-label-big" />
        </span>
      </div>
    </div>
  );
}

export default Slider;
