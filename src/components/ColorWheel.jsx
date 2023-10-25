import React, { useState } from 'react';

function hslToRgb(h, s, l) {
  let r; let g; let
    b;

  if (s === 0) {
    r = l;
    g = l;
    b = l; // achromatic
  } else {
    const hue2rgb = (p, q, t) => {
      let newT = t; // Create a new variable instead of modifying the parameter
      if (newT < 0) newT += 1;
      if (newT > 1) newT -= 1;
      if (newT < 1 / 6) return p + (q - p) * 6 * newT;
      if (newT < 1 / 2) return q;
      if (newT < 2 / 3) return p + (q - p) * (2 / 3 - newT) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

function rgbToHex(r, g, b) {
  return `#${[r, g, b].map((x) => {
    const hex = x.toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
  }).join('')}`;
}

function ColorWheel() {
  const [selectedColor, setSelectedColor] = useState('#000000');

  function handleColorClick(event) {
    const rect = event.target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const hue = Math.floor((x / rect.width) * 360);
    const saturation = Math.floor((y / rect.height) * 100);

    const rgbColor = hslToRgb(hue, saturation, 50);
    console.log('RGB Color:', rgbColor); // Add this line for debugging

    const hexColor = rgbToHex(rgbColor[0], rgbColor[1], rgbColor[2]);
    console.log('Hex Color:', hexColor); // Add this line for debugging

    setSelectedColor(hexColor);
  }

  return (
    <div>
      <div
        style={{
          backgroundColor: selectedColor,
          width: '50px',
          height: '50px',
          display: 'inline-block',
        }}
      />
      <button
        type="button"
        className="color-wheel"
        onClick={handleColorClick}
        style={{
          background: `conic-gradient(
      from 0deg,
      red,
      yellow,
      lime,
      aqua,
      blue,
      magenta,
      red
    )`,
        }}
        aria-label="Select Color"
      />

    </div>
  );
}

export default ColorWheel;
