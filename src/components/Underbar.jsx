import React from 'react';
import Tools from './Tools';
import Palette from './Palette';
import BrushSlider from './BrushSlider';

function Underbar() {
  return (
    <div className="underbar-wrapper">
      <Tools />
      <Palette />
      <BrushSlider />
    </div>
  );
}

export default Underbar;
