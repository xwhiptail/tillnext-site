/* Tilly's Quest site — tiny progressive-enhancement helpers (no deps). */
(function () {
  // Scroll reveal with staggered delay per group.
  const els = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && els.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    els.forEach((el, i) => {
      el.style.transitionDelay = (Math.min(i % 6, 6) * 70) + 'ms';
      io.observe(el);
    });
  } else {
    els.forEach((el) => el.classList.add('in'));
  }

  // FAQ accordion.
  document.querySelectorAll('.q').forEach((btn) => {
    btn.addEventListener('click', () => {
      const open = btn.getAttribute('aria-expanded') === 'true';
      const panel = btn.nextElementSibling;
      btn.setAttribute('aria-expanded', String(!open));
      panel.style.maxHeight = open ? '0px' : panel.scrollHeight + 'px';
    });
  });

  // Current year in footers.
  document.querySelectorAll('[data-year]').forEach((n) => {
    n.textContent = new Date().getFullYear();
  });
})();
