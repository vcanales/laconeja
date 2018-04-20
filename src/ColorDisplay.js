/* eslint-disable */
import React from 'react';

const ColorDisplay = ({ colors, background, dominant }) => {
  const color = `rgb(${colors[0]},${colors[1]},${colors[2]})`;
  const logoColor = `rgba(${dominant[0]},${dominant[1]},${dominant[2]},1)`;
  const style = {
    backgroundColor: color,
  };
  const elements = document.querySelectorAll('.colorize-font');

  if (background !== false) document.body.style.backgroundColor = color;

  document.getElementById('colorizeLogo').style.fill = logoColor;

  elements.forEach(element => {
    // eslint-disable-next-line
    element.style.color = logoColor;
  });

  return (
    <span className="colorDisplay" style={style}>
      &nbsp;
    </span>
  );
};

export default ColorDisplay;
