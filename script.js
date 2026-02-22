// Custom Cursor
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
  cursor.style.transform = `translate(${mx - 6}px, ${my - 6}px)`;
});

function animateRing() {
  rx += (mx - rx - 18) * 0.12;
  ry += (my - ry - 18) * 0.12;
  ring.style.transform = `translate(${rx}px, ${ry}px)`;
  requestAnimationFrame(animateRing);
}
animateRing();

// Scroll nav border
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

// Reveal on scroll
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
reveals.forEach(el => observer.observe(el));
