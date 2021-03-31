const canvasSketch = require("canvas-sketch");
const { lerp } = require("canvas-sketch-util/math");
const random = require("canvas-sketch-util/random");
const palettes = require("nice-color-palettes");

const settings = {
  dimensions: [2048, 2048],
  // dimensions: "A4",
  // orientation: "landscape", // landscape, portrait
  // units: "cm", // default is px
  // pixelsPerInch: 300, // default is 72
};

// click canvas and enter cmd + s, it will download the canvas
const sketch = () => {
  const colorCount = random.rangeFloor(1, 5);
  const palette = random.shuffle(random.pick(palettes)).slice(0, colorCount);

  const createGrid = () => {
    const points = [];
    const count = 40;
    for (let x = 0; x < count; x++) {
      for (let y = 0; y < count; y++) {
        const u = count <= 1 ? 0.5 : x / (count - 1);
        const v = count <= 1 ? 0.5 : y / (count - 1);
        points.push({
          color: random.pick(palette),
          position: [u, v],
          radius: Math.abs(0.01 + random.gaussian()) * 0.01,
        });
      }
    }
    return points;
  };

  random.setSeed(1);
  const points = createGrid().filter(() => random.value() > 0.5);
  const margin = 400;

  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    points.forEach(({ position, radius, color }) => {
      console.log(color);
      const [u, v] = position;
      const x = lerp(margin, width - margin, u);
      const y = lerp(margin, height - margin, v);

      context.beginPath();
      context.arc(x, y, radius * width, 0, Math.PI * 2, false);
      context.fillStyle = color;
      context.fill();
    });
  };
};

canvasSketch(sketch, settings);
