/**
 * Full-viewport WebGL background: value/FBM + Worley, bright light-grey–white base,
 * readable grain, moderate mouse tint + warp. Home page only (canvas present).
 */
(function initInteractiveNoiseBackground() {
  const canvas = document.querySelector("[data-noise-background]");
  if (!canvas || !(canvas instanceof HTMLCanvasElement)) return;

  const gl =
    canvas.getContext("webgl", {
      alpha: false,
      antialias: false,
      depth: false,
      stencil: false,
      powerPreference: "low-power",
    }) || canvas.getContext("experimental-webgl");

  if (!gl) return;

  const vertSrc = `
    attribute vec2 a_position;
    varying vec2 v_uv;
    void main() {
      v_uv = a_position * 0.5 + 0.5;
      gl_Position = vec4(a_position, 0.0, 1.0);
    }
  `;

  const fragSrc = `
    precision highp float;
    varying vec2 v_uv;
    uniform float u_time;
    uniform vec2 u_mouse;
    uniform vec2 u_resolution;
    uniform float u_reduceMotion;
    uniform vec2 u_click;
    uniform float u_click_t;

    float hash2(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
    }

    vec2 hash22(vec2 p) {
      return fract(sin(vec2(
        dot(p, vec2(127.1, 311.7)),
        dot(p, vec2(269.5, 183.3))
      )) * 43758.5453);
    }

    /* Value noise on grid — Perlin-like when smoothed */
    float vnoise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      vec2 u = f * f * (3.0 - 2.0 * f);
      float a = hash2(i);
      float b = hash2(i + vec2(1.0, 0.0));
      float c = hash2(i + vec2(0.0, 1.0));
      float d = hash2(i + vec2(1.0, 1.0));
      return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
    }

    /* Fractional Brownian motion — layered value noise */
    float fbm(vec2 p) {
      float v = 0.0;
      float a = 0.52;
      mat2 rot = mat2(0.8, -0.6, 0.6, 0.8);
      for (int i = 0; i < 5; i++) {
        v += a * vnoise(p);
        p = rot * p * 2.02 + 17.0;
        a *= 0.5;
      }
      return v;
    }

    /* Worley / Voronoi — cellular pits */
    float worley(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      float md = 1.0;
      for (int y = -1; y <= 1; y++) {
        for (int x = -1; x <= 1; x++) {
          vec2 g = vec2(float(x), float(y));
          vec2 r = g + hash22(i + g) - f;
          md = min(md, dot(r, r));
        }
      }
      return sqrt(md);
    }

    void main() {
      vec2 frag = gl_FragCoord.xy;
      vec2 mousePx = u_mouse * u_resolution;
      vec2 clickPx = u_click * u_resolution;
      vec2 toMouse = frag - mousePx;
      vec2 toClick = frag - clickPx;
      /* Normalized distance — smaller radius = tighter mouse effect */
      float md = length(toMouse) / min(u_resolution.x, u_resolution.y);
      float cd = length(toClick) / min(u_resolution.x, u_resolution.y);

      vec2 uv = v_uv;
      float t = u_time * (1.0 - u_reduceMotion * 0.92);

      /* Domain warp: visible but calm; mid-scale UVs for readable grain */
      vec2 warp = vec2(
        fbm(uv * 6.5 + t * 0.03),
        fbm(uv * 6.5 - vec2(19.3, 7.1) - t * 0.028)
      ) * 0.017;

      float bulge = smoothstep(0.16, 0.0, md) * 0.038;
      vec2 dir = normalize(toMouse + vec2(0.0001));
      uv += warp + dir * bulge * sin(t * 1.4 + md * 5.0);
      uv += vec2(
        sin(t * 0.09 + uv.y * 10.0),
        cos(t * 0.08 + uv.x * 9.0)
      ) * 0.0022 * (1.0 - u_reduceMotion);

      /* Mixed scales: enough detail without microscopic blur */
      float n0 = fbm(uv * 3.8 + t * 0.018);
      float n1 = vnoise(uv * 14.0 + t * 0.022);
      float w = worley(uv * 10.5 + t * 0.02);
      float w2 = worley(uv * 22.0 - t * 0.016);
      float cells = mix(w, w2, 0.45);

      float gray = mix(n0, n1, 0.22);
      gray = mix(gray, cells, 0.4);
      /* Emphasize shape contours while keeping bright palette */
      gray = smoothstep(0.18, 0.95, gray);
      gray = pow(gray, 0.82);
      gray = clamp(gray, 0.0, 1.0);

      /* Light-first: soft greys to white (texture should read clearly) */
      float light = mix(0.76, 1.0, gray);
      vec3 base = vec3(light);

      /* Mouse: modest radius, clearly visible color wash */
      float glow = smoothstep(0.15, 0.0, md);
      float pulse = 0.75 + 0.25 * sin(t * 1.15 + gray * 7.0);
      vec3 chroma =
        0.68 +
        0.32 * cos(6.28318 * (gray * 0.9 + vec3(0.0, 0.33, 0.67)) + t * 0.32);

      vec3 tint = mix(base, chroma, 0.5);
      vec3 lit = mix(base, tint, glow * 0.58 * pulse);
      lit += vec3(0.07, 0.18, 0.24) * glow * 0.22;

      /* Click impact: quick solid burst circle (no hollow center) */
      float clickLife = clamp(1.0 - (u_time - u_click_t) * 2.4, 0.0, 1.0);
      float clickCircle = smoothstep(0.16, 0.0, cd);
      vec3 clickColor = vec3(0.55, 0.78, 1.0);
      lit += clickColor * clickCircle * 0.34 * clickLife;
      /* Keep overall bright; allow deeper light-greys for grain contrast */
      lit = clamp(lit, 0.72, 1.0);

      vec2 q = v_uv - 0.5;
      float vig = 1.0 - dot(q, q) * 0.22;
      lit *= 0.93 + 0.07 * vig;

      gl_FragColor = vec4(lit, 1.0);
    }
  `;

  function compile(type, src) {
    const sh = gl.createShader(type);
    gl.shaderSource(sh, src);
    gl.compileShader(sh);
    if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
      console.warn("[noise-bg]", gl.getShaderInfoLog(sh));
      gl.deleteShader(sh);
      return null;
    }
    return sh;
  }

  const vs = compile(gl.VERTEX_SHADER, vertSrc);
  const fs = compile(gl.FRAGMENT_SHADER, fragSrc);
  if (!vs || !fs) return;

  const prog = gl.createProgram();
  gl.attachShader(prog, vs);
  gl.attachShader(prog, fs);
  gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
    console.warn("[noise-bg]", gl.getProgramInfoLog(prog));
    return;
  }

  gl.deleteShader(vs);
  gl.deleteShader(fs);

  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
    gl.STATIC_DRAW,
  );

  const locPos = gl.getAttribLocation(prog, "a_position");
  const uTime = gl.getUniformLocation(prog, "u_time");
  const uMouse = gl.getUniformLocation(prog, "u_mouse");
  const uRes = gl.getUniformLocation(prog, "u_resolution");
  const uReduceMotion = gl.getUniformLocation(prog, "u_reduceMotion");
  const uClick = gl.getUniformLocation(prog, "u_click");
  const uClickT = gl.getUniformLocation(prog, "u_click_t");

  const reduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? 1
      : 0;

  let mouseNdc = { x: 0.5, y: 0.5 };
  let clickNdc = { x: 0.5, y: 0.5 };
  let clickTime = -1000;
  let raf = 0;
  let running = true;
  const start = performance.now() / 1000;

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = Math.floor(window.innerWidth * dpr);
    const h = Math.floor(window.innerHeight * dpr);
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
    }
    gl.viewport(0, 0, w, h);
  }

  function onMove(e) {
    mouseNdc.x = e.clientX / window.innerWidth;
    mouseNdc.y = 1.0 - e.clientY / window.innerHeight;
  }

  function onDown(e) {
    clickNdc.x = e.clientX / window.innerWidth;
    clickNdc.y = 1.0 - e.clientY / window.innerHeight;
    clickTime = performance.now() / 1000 - start;
  }

  function draw() {
    if (!running) return;
    const t = performance.now() / 1000 - start;
    gl.useProgram(prog);
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.enableVertexAttribArray(locPos);
    gl.vertexAttribPointer(locPos, 2, gl.FLOAT, false, 0, 0);
    gl.uniform1f(uTime, t);
    gl.uniform2f(uMouse, mouseNdc.x, mouseNdc.y);
    gl.uniform2f(uClick, clickNdc.x, clickNdc.y);
    gl.uniform1f(uClickT, clickTime);
    gl.uniform2f(uRes, canvas.width, canvas.height);
    gl.uniform1f(uReduceMotion, reduceMotion);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
    raf = requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener("resize", resize, { passive: true });
  window.addEventListener("pointermove", onMove, { passive: true });
  window.addEventListener("pointerdown", onDown, { passive: true });

  draw();

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      running = false;
      cancelAnimationFrame(raf);
    } else {
      running = true;
      raf = requestAnimationFrame(draw);
    }
  });
})();
