import React from 'react';

function Palette() {
  return (
    <div className="palette-wrapper">
      <div className="palette-top">
        <span className="palette-color black" />
        <span className="palette-color dark-gray" />
        <span className="palette-color gray" />
        <span className="palette-color white" />
        <span className="palette-color red" />
        <span className="palette-color orange" />
      </div>
      <div className="palette-bottom">
        <span className="palette-color yellow" />
        <span className="palette-color green" />
        <span className="palette-color blue" />
        <span className="palette-color pink" />
        <span className="palette-color purple" />
        <span className="palette-color brown" />
        {/* <span className="color-picker" /> */}
      </div>
    </div>
  );
}

export default Palette;
