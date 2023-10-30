import React from 'react';
import { useClearCanvas } from './ClearCanvasContext';

function Tools() {
  const { clearCanvas } = useClearCanvas();

  return (
    <div className="tools-wrapper">
      <span className="brush-wrapper">
        <img className="brush icon" alt="brush icon" src="src/assets/icons/brush-icon.png" />
        <button type="button" className="brush-button" aria-label="brush button" />
      </span>
      <span className="eraser-wrapper">
        <img className="eraser icon" alt="eraser icon" src="src/assets/icons/eraser-icon.png" />
        <button type="button" className="eraser-button" aria-label="eraser button" />
      </span>
      <span className="spray-wrapper">
        <img className="spray icon" alt="spray icon" src="src/assets/icons/spray-icon.png" />
        <button type="button" className="spray-button" aria-label="spray button" />
      </span>
      <span className="splash-wrapper">
        <img className="splash icon" alt="splash icon" src="src/assets/icons/splash-icon.png" />
        <button type="button" className="splash-button" aria-label="splash button" />
      </span>
      <span className="paint-bucket-wrapper">
        <img className="paint-bucket icon" alt="paint bucket icon" src="src/assets/icons/paint-bucket-icon.png" />
        <button type="button" className="paint-bucket-button" aria-label="paint bucket button" />
      </span>
      <span className="erase-all-wrapper">
        <img className="erase-all icon" alt="erase all icon" src="src/assets/icons/erase-all-icon.png" />
        <button type="button" className="erase-all-button" onClick={clearCanvas} aria-label="erase all button" />
      </span>
      <span className="undo-wrapper">
        <img className="undo icon" alt="undo icon" src="src/assets/icons/undo-icon.png" />
        <button type="button" className="undo-button" aria-label="undo button" />
      </span>
      <span className="redo-wrapper">
        <img className="redo icon" alt="redo icon" src="src/assets/icons/redo-icon.png" />
        <button type="button" className="redo-button" aria-label="redo button" />
      </span>
    </div>
  );
}

export default Tools;
