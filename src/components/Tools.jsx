import React from 'react';
import { useClearCanvas } from './ClearCanvasContext';

function Tools() {
  const { clearCanvas } = useClearCanvas();

  return (
    <div className="tools-wrapper">
      <span className="icon-wrapper">
        <img className="brush icon" alt="brush icon" src="src/assets/icons/brush-icon.png" />
        <button type="button" className="function-button" aria-label="brush button" />
      </span>
      <span className="icon-wrapper">
        <img className="eraser icon" alt="eraser icon" src="src/assets/icons/eraser-icon.png" />
        <button type="button" className="function-button" aria-label="eraser button" />
      </span>
      <span className="icon-wrapper">
        <img className="spray icon" alt="spray icon" src="src/assets/icons/spray-icon.png" />
        <button type="button" className="function-button" aria-label="spray button" />
      </span>
      <span className="icon-wrapper">
        <img className="splash icon" alt="splash icon" src="src/assets/icons/splash-icon.png" />
        <button type="button" className="function-button" aria-label="splash button" />
      </span>
      <span className="icon-wrapper">
        <img className="paint-bucket icon" alt="paint bucket icon" src="src/assets/icons/paint-bucket-icon.png" />
        <button type="button" className="function-button" aria-label="paint bucket button" />
      </span>
      <span className="icon-wrapper">
        <img className="erase-all icon" alt="erase all icon" src="src/assets/icons/erase-all-icon.png" />
        <button type="button" className="function-button" onClick={clearCanvas} aria-label="erase all button" />
      </span>
      <span className="icon-wrapper">
        <img className="undo icon" alt="undo icon" src="src/assets/icons/undo-icon.png" />
        <button type="button" className="function-button" aria-label="undo button" />
      </span>
      <span className="icon-wrapper">
        <img className="redo icon" alt="redo icon" src="src/assets/icons/redo-icon.png" />
        <button type="button" className="function-button" aria-label="redo button" />
      </span>
    </div>
  );
}

export default Tools;
