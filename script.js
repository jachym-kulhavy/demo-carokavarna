const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const uv = document.querySelectorAll('[data-uv]');
// Wand: move the glow with the pointer (mouse and touch).
function wand(e) {
  uv.forEach(el => {
    const r = el.getBoundingClientRect();
    el.style.setProperty('--x', e.clientX - r.left + 'px');
    el.style.setProperty('--y', e.clientY - r.top + 'px');
  });
}
function revealAll() { document.body.classList.add('revealed'); }
if (reduce) revealAll(); else addEventListener('pointermove', wand, { passive: true });
document.getElementById('reveal').addEventListener('click', revealAll);
