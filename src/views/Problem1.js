import React, { useState } from 'react';
import Shape from '../components/Shape/Shape';

import './Problem1.css';

export default function Problem1() {
  const [largeCircleColor, setLargeCircleColor] = useState('red');

  // const handleShapeClick = (selectedColor) => {
  //   setLargeCircleColor(selectedColor);
  // };

  return (
    <div className="problem-container">
      <h2>Problem 1: Props and State</h2>

      <div className="description">
        Clicking on each of the small circles should change the color of the large circle. Add
        state, event listeners and update props to make that happen.
      </div>
      <div className="shape-controls">
        <Shape color="blue" type="circle" small setLargeCircleColor={setLargeCircleColor}/>
        <Shape color="purple" type="circle" small setLargeCircleColor={setLargeCircleColor}/>
        <Shape color="green" type="circle" small setLargeCircleColor={setLargeCircleColor}/>
      </div>
      <div className="selected-shape">
        <Shape color={largeCircleColor} type="circle" setLargeCircleColor={setLargeCircleColor}></Shape>
      </div>
    </div>
  );
}
