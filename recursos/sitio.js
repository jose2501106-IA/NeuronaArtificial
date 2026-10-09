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

/* Neurona Artificial · aviso por correo y analítica.
   Mientras CONFIG esté vacío, no aparece el formulario y el sitio no carga nada de otros servidores.
   - correo: la dirección «action» del formulario de MailerLite (tu formulario → Embed → HTML code).
   - responsable: el nombre que aparece junto al formulario, el mismo del aviso de privacidad.
   - cloudflare: el token de Cloudflare Web Analytics. */
(function () {
  'use strict';
  var CONFIG = window.NA_CONFIG || { correo: '', responsable: '', cloudflare: '' };
  var OK = '<svg class="na-icono" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M3.5 12.5L9 18L20.5 6.5" fill="none" stroke="currentColor" stroke-width="2"/></svg>';
  var ALTO = '<svg class="na-icono" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" fill-rule="evenodd" d="M12 2L22.5 21H1.5Z M10.75 8.5H13.25V14.5H10.75Z M10.75 16.5H13.25V19H10.75Z"/></svg>';
  function aviso(tono, icono, titulo, texto) {
    return '<div class="na-aviso" data-tono="' + tono + '">' + icono + '<div><p class="na-aviso__titulo">' + titulo + '</p><p class="na-aviso__texto">' + texto + '</p></div></div>';
  }
  if (CONFIG.cloudflare) {
    var s = document.createElement('script');
    s.defer = true; s.src = 'https://static.cloudflareinsights.com/beacon.min.js';
    s.setAttribute('data-cf-beacon', JSON.stringify({ token: CONFIG.cloudflare }));
    document.head.appendChild(s);
  }
  function preparar(bloque) {
    var form = bloque.querySelector('form'), estado = bloque.querySelector('[data-estado]');
    var boton = form.querySelector('[type="submit"]'), quien = bloque.querySelector('[data-responsable]');
    if (quien && CONFIG.responsable) quien.textContent = CONFIG.responsable;
    form.action = CONFIG.correo;
    bloque.hidden = false;
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      boton.disabled = true;
      estado.innerHTML = '';
      fetch(CONFIG.correo, { method: 'POST', body: new FormData(form), mode: 'no-cors' })
        .then(function () {
          form.hidden = true;
          estado.innerHTML = aviso('ok', OK, 'Listo, ya casi', 'Te mandamos un correo para confirmar. Ábrelo y quedas en la lista.');
        })
        .catch(function () {
          boton.disabled = false;
          estado.innerHTML = aviso('alto', ALTO, 'No se pudo enviar', 'Revisa tu conexión e inténtalo otra vez.');
        });
    });
  }
  function activar() {
    if (!CONFIG.correo) return;
    var bloques = document.querySelectorAll('[data-na-correo]');
    for (var i = 0; i < bloques.length; i++) preparar(bloques[i]);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', activar); else activar();
})();
