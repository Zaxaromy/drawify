import React from 'react';
import Tools from './Tools';
import Palette from './Palette';
import Slider from './Slider';

function Underbar({ setSelectedColor }) {
  return (
    <div className="underbar-wrapper">
      <Tools />
      <Palette setSelectedColor={setSelectedColor} />
      <Slider />
    </div>
  );
}

export default Underbar;
