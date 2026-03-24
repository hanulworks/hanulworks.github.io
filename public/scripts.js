document.addEventListener("mousemove", (event) => {
  const pointerX = event.clientX / window.innerWidth;
  const pointerY = event.clientY / window.innerHeight;

  const rgbTopLeft = [0, 255, 100];
  const rgbTopRight = [0, 120, 255];
  const rgbBottomLeft = [255, 80, 80];
  const rgbBottomRight = [255, 150, 0];

  const topEdgeRgb = rgbTopLeft.map((channel, index) =>
    Math.round(channel + (rgbTopRight[index] - channel) * pointerX),
  );
  const bottomEdgeRgb = rgbBottomLeft.map((channel, index) =>
    Math.round(channel + (rgbBottomRight[index] - channel) * pointerX),
  );
  const blendedRgb = topEdgeRgb.map((channel, index) =>
    Math.round(channel + (bottomEdgeRgb[index] - channel) * pointerY),
  );

  const cursorFollowColor = `rgb(${blendedRgb.join(",")})`;
  document.querySelectorAll(".colorful").forEach((element) => {
    element.style.color = cursorFollowColor;
  });
});

// Carousel auto-advance (homepage / any `.carousel` block)
(() => {
  const carouselRoot = document.querySelector(".carousel");
  const scrollViewport = carouselRoot?.querySelector(".carousel__viewport");
  if (!scrollViewport) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const slides = Array.from(scrollViewport.children);
  let activeSlideIndex = 0;
  let advanceTimerId;

  const autoAdvanceIntervalMs = 4000;

  const stopAutoAdvance = () => {
    if (advanceTimerId) clearInterval(advanceTimerId);
  };

  const startAutoAdvance = () => {
    stopAutoAdvance();
    advanceTimerId = setInterval(() => {
      activeSlideIndex = (activeSlideIndex + 1) % slides.length;
      const targetScrollLeft = slides[activeSlideIndex].offsetLeft;
      scrollViewport.scrollTo({
        left: targetScrollLeft,
        behavior: "smooth",
      });
    }, autoAdvanceIntervalMs);
  };

  scrollViewport.addEventListener("mouseenter", stopAutoAdvance);
  scrollViewport.addEventListener("focusin", stopAutoAdvance);
  scrollViewport.addEventListener("mouseleave", startAutoAdvance);
  scrollViewport.addEventListener("focusout", startAutoAdvance);

  startAutoAdvance();
})();
