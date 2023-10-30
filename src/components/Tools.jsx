import React from 'react';
import { useClearCanvas } from './ClearCanvasContext';

function Tools() {
  const { clearCanvas } = useClearCanvas();

  return (
    <div className="tools-wrapper">
      <span className="brush-wrapper">
        <img className="brush icon" alt="brush icon" src="src/assets/icons/brush-icon.png" />
        <button type="button" className="brush-button" aria-label="erase all button" />
      </span>
      <span className="eraser-wrapper" />
      <img className="eraser icon" alt="eraser icon" src="src/assets/icons/eraser-icon.png" />
      <img className="spray icon" alt="spray icon" src="src/assets/icons/spray-icon.png" />
      <img className="splash icon" alt="splash icon" src="src/assets/icons/splash-icon.png" />
      <img className="paint-bucket icon" alt="paint bucket icon" src="src/assets/icons/paint-bucket-icon.png" />
      <span className="erase-all-wrapper">
        <img className="erase-all icon" alt="erase all icon" src="src/assets/icons/erase-all-icon.png" />
        <button type="button" className="erase-all-button" onClick={clearCanvas} aria-label="erase all button" />
      </span>
      <img className="undo icon" alt="undo icon" src="src/assets/icons/undo-icon.png" />
      <img className="redo icon" alt="redo icon" src="src/assets/icons/redo-icon.png" />
    </div>
  );
}

export default Tools;
