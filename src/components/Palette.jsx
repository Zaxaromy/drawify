import React from 'react';
import { useColorContext } from './ColorContextProvider';

function Palette() {
  const { selectedColor, setSelectedColor } = useColorContext();

  const handleChange = (e) => {
    setSelectedColor(e.target.value);
    console.log('Selected Color (handleChange):', e.target.value);
  };

  const handleButtonClick = (color) => {
    setSelectedColor(color);
    console.log('Selected Color (handleButtonClick):', color);
  };

  return (
    <>
      <div className="palette-wrapper">
        <div className="palette-top">
          <span className="palette-color black">
            <button type="button" className="palette-button" aria-label="palette button onclick" onClick={() => handleButtonClick('#333333')} />
          </span>
          <span className="palette-color dark-gray">
            <button type="button" className="palette-button" aria-label="palette button onclick" onClick={() => handleButtonClick('#a9a9a9')} />
          </span>
          <span className="palette-color gray">
            <button type="button" className="palette-button" aria-label="palette button onclick" onClick={() => handleButtonClick('#808080')} />
          </span>
          <span className="palette-color white">
            <button type="button" className="palette-button" aria-label="palette button onclick" onClick={() => handleButtonClick('#ffffff')} />
          </span>
          <span className="palette-color red">
            <button type="button" className="palette-button" aria-label="palette button onclick" onClick={() => handleButtonClick('#f00f00')} />
          </span>
          <span className="palette-color orange">
            <button type="button" className="palette-button" aria-label="palette button onclick" onClick={() => handleButtonClick('#ffa500')} />
          </span>
        </div>
        <div className="palette-bottom">
          <span className="palette-color yellow">
            <button type="button" className="palette-button" aria-label="palette button onclick" onClick={() => handleButtonClick('#ff0ff0')} />
          </span>
          <span className="palette-color green">
            <button type="button" className="palette-button" aria-label="palette button onclick" onClick={() => handleButtonClick('#008000')} />
          </span>
          <span className="palette-color blue">
            <button type="button" className="palette-button" aria-label="palette button onclick" onClick={() => handleButtonClick('#006eff')} />
          </span>
          <span className="palette-color pink">
            <button type="button" className="palette-button" aria-label="palette button onclick" onClick={() => handleButtonClick('#ff0ff0')} />
          </span>
          <span className="palette-color purple">
            <button type="button" className="palette-button" aria-label="palette button onclick" onClick={() => handleButtonClick('#800080')} />
          </span>
          <span className="palette-color brown">
            <button type="button" className="palette-button" aria-label="palette button onclick" onClick={() => handleButtonClick('#a52a2a')} />
          </span>
        </div>
      </div>
      <div className="color-picker-wrapper">
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="color-picker">
          <img alt="color wheel" className="color-wheel" src="src/assets/icons/color-wheel.png" />
        </label>
        <input value={selectedColor} onChange={handleChange} id="color-picker" type="color" />
        <div className="color-div" style={{ backgroundColor: selectedColor }} />
      </div>
    </>
  );
}

export default Palette;
