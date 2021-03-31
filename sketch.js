const canvasSketch = require("canvas-sketch");

const settings = {
  dimensions: [2048, 2048],
  // dimensions: "A4",
  // orientation: "landscape", // landscape, portrait
  // units: "cm", // default is px
  // pixelsPerInch: 300, // default is 72
};

// click canvas and enter cmd + s, it will download the canvas
const sketch = () => {
  const createGrid = () => {
    const points = [];
    const count = 5;
    for (let x = 0; x < count; x++) {
      for (let y = 0; y < count; y++) {
        const u = x / count;
        const v = y / count;
        points.push([u, v]);
      }
    }
    return points;
  }

  const points = createGrid();
  console.log(points);

  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);
  };
};

canvasSketch(sketch, settings);
