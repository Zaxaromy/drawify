import React from 'react';
import Tools from './Tools';
import Palette from './Palette';
import Slider from './Slider';

function Underbar() {
  return (
    <div className="underbar-wrapper">
      <Tools />
      <Palette />
      <Slider />
    </div>
  );
}

export default Underbar;
