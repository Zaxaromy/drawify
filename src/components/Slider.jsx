import React from 'react';
import { useLineWidthContext } from './LineWidthProvider';

function Slider() {
  const { setLineWidth, lineWidth } = useLineWidthContext(); // Added 'lineWidth'

  const handleSliderChange = (e) => {
    setLineWidth(parseInt(e.target.value, 10));
  };

  const setLineWidthSmall = () => {
    setLineWidth(2);
  };

  const setLineWidthBig = () => {
    setLineWidth(10);
  };

  return (
    <div className="slider-wrapper">
      <div className="range-label-wrapper">
        <span className="range-label-border">
          <button className="range-label-small" onClick={setLineWidthSmall} />
        </span>
      </div>
      <div className="range-wrapper">
        <input
          type="range"
          value={lineWidth}
          onChange={handleSliderChange}
          step="4.25"
          min="3"
          max="20"
        />
      </div>
      <div className="range-label-wrapper">
        <span className="range-label-border">
          <button className="range-label-big" onClick={setLineWidthBig} />
        </span>
      </div>
    </div>
  );
}

export default Slider;
