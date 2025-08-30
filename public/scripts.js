document.addEventListener("mousemove", (e) => {
  const x = e.clientX / window.innerWidth;  // 0 (left) to 1 (right)
  const y = e.clientY / window.innerHeight; // 0 (top) to 1 (bottom)

  // Define colors for each corner: [R, G, B]
  const topLeft     = [0, 255, 100];   // Green
  const topRight    = [0, 120, 255];   // Blue
  const bottomLeft  = [255, 80, 80];   // Red
  const bottomRight = [255, 150, 0];   // Orange

  // Interpolate top and bottom rows
  const top = topLeft.map((c, i) => Math.round(c + (topRight[i] - c) * x));
  const bottom = bottomLeft.map((c, i) => Math.round(c + (bottomRight[i] - c) * x));

  // Final color based on vertical interpolation between top and bottom
  const blended = top.map((c, i) => Math.round(c + (bottom[i] - c) * y));

  const rgbColor = `rgb(${blended.join(",")})`;

  document.querySelectorAll('.colorful').forEach(el => {
    el.style.color = rgbColor;
  });
});