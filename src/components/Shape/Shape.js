import React from 'react';
import './Shape.css';

export default function Shape(props) {
  const handleShapeClick = (color) => {
    props.setLargeCircleColor(color);
    // console.log('clicking');
  };
  const classes = `shape ${props.type} ${props.color} ${props.small ? 'small' : ''}`;
  return <div className={classes} onClick={() => handleShapeClick(props.color)}></div>;
}
