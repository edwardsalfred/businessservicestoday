// Business Services Today — main.js
(function () {
  'use strict';

  // -- Navigation scroll state -----------------------------------------
  const nav = document.querySelector('.nav');
  const onScroll = () => {
    if (!nav) return;
    nav.classList.toggle('scrolled', window.scrollY > 24);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // -- Mobile nav drawer -----------------------------------------------
  const toggle = document.querySelector('.nav__toggle');
  const linkEls = document.querySelectorAll('.nav__links a');

  const setOpen = (open) => {
    if (!nav || !toggle) return;
    nav.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.classList.toggle('nav-open', open);
  };

  if (toggle) {
    toggle.addEventListener('click', () => {
      const open = nav.getAttribute('aria-expanded') !== 'true';
      setOpen(open);
    });
  }
  linkEls.forEach(a => a.addEventListener('click', () => setOpen(false)));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setOpen(false); });
  window.addEventListener('resize', () => { if (window.innerWidth > 720) setOpen(false); });

  // -- Scroll reveal (IntersectionObserver) ----------------------------
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(el => io.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('in-view'));
  }

  // -- FAQ toggles -----------------------------------------------------
  document.querySelectorAll('.faq__item').forEach(item => {
    const q = item.querySelector('.faq__q');
    if (!q) return;
    q.addEventListener('click', () => {
      const open = item.getAttribute('data-open') === 'true';
      document.querySelectorAll('.faq__item[data-open="true"]').forEach(el => el.setAttribute('data-open', 'false'));
      item.setAttribute('data-open', open ? 'false' : 'true');
    });
  });

  // -- Number count-up on stats ---------------------------------------
  const stats = document.querySelectorAll('[data-count]');
  if ('IntersectionObserver' in window && stats.length) {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const animate = (el, target) => {
      if (reduceMotion) { el.textContent = target; return; }
      const duration = 1400;
      const start = performance.now();
      const format = target.toString().includes('+') ? '+' : '';
      const num = parseInt(target, 10);
      const tick = (now) => {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        el.textContent = Math.floor(num * eased) + format;
        if (t < 1) requestAnimationFrame(tick);
        else el.textContent = target;
      };
      requestAnimationFrame(tick);
    };
    const sio = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const t = entry.target.getAttribute('data-count');
          animate(entry.target, t);
          sio.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    stats.forEach(s => sio.observe(s));
  }

  // -- Footer year -----------------------------------------------------
  const yr = document.querySelector('[data-year]');
  if (yr) yr.textContent = new Date().getFullYear();

  // -- Binder hover parallax ------------------------------------------
  const binder = document.querySelector('.binder-mock');
  if (binder && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const cover = binder.querySelector('.binder-mock__cover');
    binder.addEventListener('mousemove', (e) => {
      const r = binder.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      cover.style.transform = `rotateY(${-8 + x * 10}deg) rotateX(${-y * 6}deg)`;
    });
    binder.addEventListener('mouseleave', () => {
      cover.style.transform = 'rotateY(-8deg) rotateX(0)';
    });
  }
})();
