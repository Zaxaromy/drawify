import React from 'react';

function Tools() {
  return (
    <div className="tools-wrapper">
      <span className="brush"><img alt="brush icon" src="src/assets/icons/brush-icon.png" /></span>
      <span className="eraser"><img alt="eraser icon" src="src/assets/icons/eraser-icon.png" /></span>
      <span className="spray"><img alt="spray icon" src="src/assets/icons/spray-icon.png" /></span>
      <span className="paint-bucket"><img alt="paint bucket icon" src="src/assets/icons/paint-bucket-icon.png" /></span>
      <span className="erase all"><img alt="erase all icon" src="src/assets/icons/erase-all-icon.png" /></span>
      <span className="undo"><img alt="undo icon" src="src/assets/icons/undo-icon.png" /></span>
      <span className="redo"><img alt="redo icon" src="src/assets/icons/redo-icon.png" /></span>
    </div>
  );
}

export default Tools;
