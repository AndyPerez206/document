// Neon color rotation and interaction behavior.
// Keeps the visual dynamic but small and respectful of reduced motion preference.

(function () {
  const root = document.documentElement;
  const blessing = document.getElementById('blessing');
  const pauseBtn = document.getElementById('pauseBtn');
  const randomizeBtn = document.getElementById('randomizeBtn');

  // Palettes of electric/professional colors
  const palettes = [
    ['#00f0ff', '#7c00ff', '#ff0078', '#ffd500'],
    ['#00f5a9', '#00b4ff', '#7a00ff', '#ff2d9e'],
    ['#00e0ff', '#6b00ff', '#ff3db0', '#ffd500'],
    ['#00d7ff', '#b200ff', '#ff0078', '#fff05a']
  ];

  let active = true;
  let idx = 0;
  let intervalId = null;
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function applyPalette(p) {
    // Set CSS variables on root so CSS picks them up
    root.style.setProperty('--accent-1', p[0]);
    root.style.setProperty('--accent-2', p[1]);
    root.style.setProperty('--accent-3', p[2]);
    root.style.setProperty('--accent-4', p[3]);

    // Also tweak text-shadow to match the main accent color for punch
    const s1 = hexToRgba(p[0], 0.20);
    const s2 = hexToRgba(p[1], 0.14);
    const s3 = hexToRgba(p[2], 0.10);
    blessing.style.textShadow = `0 0 6px rgba(0,0,0,0.6), 0 0 8px ${s1}, 0 0 18px ${s2}, 0 0 30px ${s3}`;
  }

  function hexToRgba(hex, alpha){
    const h = hex.replace('#','');
    const bigint = parseInt(h, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  function nextPalette(){
    idx = (idx + 1) % palettes.length;
    applyPalette(palettes[idx]);
  }

  function randomPalette(){
    idx = Math.floor(Math.random() * palettes.length);
    applyPalette(palettes[idx]);
  }

  function startLoop(){
    if (prefersReduced) return; // avoid animations for reduced-motion users
    stopLoop();
    intervalId = setInterval(nextPalette, 4200);
    active = true;
    updatePauseButton();
  }

  function stopLoop(){
    if (intervalId) { clearInterval(intervalId); intervalId = null; }
    active = false;
    updatePauseButton();
  }

  function updatePauseButton(){
    if (!pauseBtn) return;
    pauseBtn.textContent = active ? 'Pausar' : 'Reanudar';
  }

  // Init
  applyPalette(palettes[idx]);
  if (!prefersReduced) startLoop();

  // Controls
  if (pauseBtn){
    pauseBtn.addEventListener('click', () => {
      if (active) stopLoop();
      else startLoop();
    });
  }
  if (randomizeBtn){
    randomizeBtn.addEventListener('click', () => {
      randomPalette();
    });
  }

  // Allow tapping the message to randomize colors (mobile-friendly)
  blessing.addEventListener('click', () => {
    randomPalette();
  });

  // Expose for debugging if needed
  window.__neon = { applyPalette, nextPalette, randomPalette, startLoop, stopLoop };

})();
