import React from 'react';
import { useLineWidthContext } from './LineWidthProvider';

function Slider() {
  const { setLineWidth, lineWidth } = useLineWidthContext(); // Added 'lineWidth'

  const handleSliderChange = (e) => {
    setLineWidth(parseInt(e.target.value, 10));
  };

  const setLineWidthSmall = () => {
    setLineWidth(3);
  };

  const setLineWidthBig = () => {
    setLineWidth(20);
  };

  return (
    <div className="slider-wrapper">
      <div className="range-label-wrapper">
        <span className="range-label-border">
          <span className="range-label-small" />
          <button type="button" className="range-label-button" onClick={setLineWidthSmall} aria-label="Set Small Line Width" />
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
          <span className="range-label-big" />
          <button type="button" className="range-label-button" onClick={setLineWidthBig} aria-label="Set Line Width Big" />
        </span>
      </div>
    </div>
  );
}

export default Slider;
