const canvasSketch = require('canvas-sketch');
const p5 = require('p5');

const preload = p5 => {
  // You can use p5.loadImage() here, etc...
};

const settings = {
  // Pass the p5 instance, and preload function if necessary
  p5: { p5, preload },
  // Turn on a render loop
  animate: true,
  background: 100,
};

canvasSketch(() => {
  // Return a renderer, which is like p5.js 'draw' function
  return ({ p5, time, width, height }) => {
    p5.rect(p5.mouseX, p5.mouseY, 20, 20);
  };
}, settings);
