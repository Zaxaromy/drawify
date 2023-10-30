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
            <button type="button" className="palette-button" aria-label="palette button onclick" onClick={() => handleButtonClick('#353535')} />
          </span>
          <span className="palette-color dark-gray">
            <button type="button" className="palette-button" aria-label="palette button onclick" onClick={() => handleButtonClick('#a6a6a6')} />
          </span>
          <span className="palette-color gray">
            <button type="button" className="palette-button" aria-label="palette button onclick" onClick={() => handleButtonClick('#bfbfbf')} />
          </span>
          <span className="palette-color white">
            <button type="button" className="palette-button" aria-label="palette button onclick" onClick={() => handleButtonClick('#ffffff')} />
          </span>
          <span className="palette-color red">
            <button type="button" className="palette-button" aria-label="palette button onclick" onClick={() => handleButtonClick('#f7514d')} />
          </span>
          <span className="palette-color green">
            <button type="button" className="palette-button" aria-label="palette button onclick" onClick={() => handleButtonClick('#23ab52')} />
          </span>
        </div>
        <div className="palette-bottom">
          <span className="palette-color blue">
            <button type="button" className="palette-button" aria-label="palette button onclick" onClick={() => handleButtonClick('#1a7cff')} />
          </span>
          <span className="palette-color yellow">
            <button type="button" className="palette-button" aria-label="palette button onclick" onClick={() => handleButtonClick('#fed347')} />
          </span>
          <span className="palette-color orange">
            <button type="button" className="palette-button" aria-label="palette button onclick" onClick={() => handleButtonClick('#ffb733')} />
          </span>
          <span className="palette-color pink">
            <button type="button" className="palette-button" aria-label="palette button onclick" onClick={() => handleButtonClick('#ff8af8')} />
          </span>
          <span className="palette-color purple">
            <button type="button" className="palette-button" aria-label="palette button onclick" onClick={() => handleButtonClick('#6574ef')} />
          </span>
          <span className="palette-color brown">
            <button type="button" className="palette-button" aria-label="palette button onclick" onClick={() => handleButtonClick('#a17570')} />
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
