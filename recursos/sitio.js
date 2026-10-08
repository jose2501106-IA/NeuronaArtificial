/* Neurona Artificial · tema claro u oscuro.
   Sigue al sistema hasta que eliges otro; solo se guarda la elección que difiere del sistema, en este navegador.
   Cualquier <button data-tema> lo cambia. Avisa con el evento «na:tema» en document. */
(function () {
  'use strict';
  var KEY = 'neurona-artificial:tema';
  var raiz = document.documentElement;
  var mq = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
  function sistemaOscuro() { return !!(mq && mq.matches); }
  function efectivo() {
    var t = raiz.getAttribute('data-theme');
    return t === 'light' || t === 'dark' ? t : (sistemaOscuro() ? 'dark' : 'light');
  }
  function pintar() {
    var oscuro = efectivo() === 'dark';
    var botones = document.querySelectorAll('[data-tema]');
    for (var i = 0; i < botones.length; i++) {
      botones[i].setAttribute('aria-label', oscuro ? 'Usar tema claro' : 'Usar tema oscuro');
      botones[i].setAttribute('title', oscuro ? 'Tema claro' : 'Tema oscuro');
    }
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      var fondo = getComputedStyle(raiz).getPropertyValue('--fondo').trim();
      if (fondo) meta.setAttribute('content', fondo);
    }
    try { document.dispatchEvent(new CustomEvent('na:tema', { detail: efectivo() })); } catch (e) {}
  }
  function cambiar() {
    var nuevo = efectivo() === 'dark' ? 'light' : 'dark';
    var igualAlSistema = (nuevo === 'dark') === sistemaOscuro();
    try {
      if (igualAlSistema) localStorage.removeItem(KEY); else localStorage.setItem(KEY, nuevo);
    } catch (e) {}
    if (igualAlSistema) raiz.removeAttribute('data-theme'); else raiz.setAttribute('data-theme', nuevo);
    pintar();
  }
  document.addEventListener('click', function (ev) {
    var b = ev.target.closest && ev.target.closest('[data-tema]');
    if (b) cambiar();
  });
  if (mq) {
    var alCambiar = function () { if (!raiz.getAttribute('data-theme')) pintar(); };
    if (mq.addEventListener) mq.addEventListener('change', alCambiar); else if (mq.addListener) mq.addListener(alCambiar);
  }
  window.addEventListener('storage', function (ev) {
    if (ev.key !== KEY) return;
    if (ev.newValue === 'light' || ev.newValue === 'dark') raiz.setAttribute('data-theme', ev.newValue); else raiz.removeAttribute('data-theme');
    pintar();
  });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', pintar); else pintar();
  window.naTema = { efectivo: efectivo, cambiar: cambiar };
})();
