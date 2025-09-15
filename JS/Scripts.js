// Año dinámico en el footer
document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Resaltar link activo según la página
  const path = location.pathname.split('/').pop().toLowerCase() || 'index.html';
  document.querySelectorAll('.navbar .nav-link').forEach(a => {
    const href = a.getAttribute('href')?.toLowerCase();
    if (href && (href === path || (path === 'index.html' && href === 'index.html')))
      a.classList.add('active');
  });

  // Scroll suave para anchors internos
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior:'smooth', block:'start' });
        history.pushState(null, '', `#${id}`);
      }
    });
  });
});

