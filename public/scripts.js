document.addEventListener("mousemove", (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  const topLeft = [0, 255, 100];   // Green
  const topRight = [0, 120, 255];   // Blue
  const bottomLeft = [255, 80, 80];   // Red
  const bottomRight = [255, 150, 0];   // Orange

  const top = topLeft.map((c, i) => Math.round(c + (topRight[i] - c) * x));
  const bottom = bottomLeft.map((c, i) => Math.round(c + (bottomRight[i] - c) * x));
  const blended = top.map((c, i) => Math.round(c + (bottom[i] - c) * y));

  const rgbColor = `rgb(${blended.join(",")})`;
  document.querySelectorAll('.colorful').forEach(el => {
    el.style.color = rgbColor;
  });
});

// New carousel auto-advance
(() => {
  const root = document.querySelector('.carousel'); // adjust if multiple carousels exist
  const vp = root?.querySelector('.carousel__viewport');
  if (!vp) return;

  // Respect accessibility
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const slides = Array.from(vp.children);
  let i = 0, timer;
  const intervalMs = 4000;

  const start = () => {
    stop();
    timer = setInterval(() => {
      i = (i + 1) % slides.length;
      const targetLeft = slides[i].offsetLeft;
      vp.scrollTo({ left: targetLeft, behavior: 'smooth' });
    }, intervalMs);
  };
  const stop = () => timer && clearInterval(timer);

  // pause on hover/focus, resume on leave/blur
  vp.addEventListener('mouseenter', stop);
  vp.addEventListener('focusin', stop);
  vp.addEventListener('mouseleave', start);
  vp.addEventListener('focusout', start);

  start();
})();