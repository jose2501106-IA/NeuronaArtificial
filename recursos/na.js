/* @ds-bundle: {"format":4,"namespace":"NeuronaArtificial","components":[{"name":"Marca"},{"name":"Barra"},{"name":"Letrero"},{"name":"Seccion"},{"name":"Placa"},{"name":"Insignia"},{"name":"Estado"},{"name":"Ruta"},{"name":"Pasos"},{"name":"Boton"},{"name":"Selector"},{"name":"Campo"},{"name":"Ficha"},{"name":"Aviso"},{"name":"Glosario"},{"name":"Deslizador"},{"name":"Lectura"},{"name":"Codigo"},{"name":"Medidor"},{"name":"Reproductor"},{"name":"Capitulos"}]} */
/* Neurona Artificial · ayudantes sin dependencias (versión minimalista, paleta Barro y jade).
   Devuelven HTML como texto o pintan dentro de un elemento. Los estilos viven en bundle.css; los colores, en tokens.css. */
(function () {
  'use strict';

  var ICONOS = {"flecha-derecha":"<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"4\" d=\"M3 12H19\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"4\" d=\"M13 5.5L19.5 12L13 18.5\"/>","flecha-izquierda":"<g transform=\"rotate(180 12 12)\"><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"4\" d=\"M3 12H19\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"4\" d=\"M13 5.5L19.5 12L13 18.5\"/></g>","flecha-arriba":"<g transform=\"rotate(-90 12 12)\"><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"4\" d=\"M3 12H19\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"4\" d=\"M13 5.5L19.5 12L13 18.5\"/></g>","flecha-abajo":"<g transform=\"rotate(90 12 12)\"><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"4\" d=\"M3 12H19\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"4\" d=\"M13 5.5L19.5 12L13 18.5\"/></g>","flecha-diagonal":"<g transform=\"rotate(-45 12 12)\"><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"4\" d=\"M3 12H19\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"4\" d=\"M13 5.5L19.5 12L13 18.5\"/></g>","reproducir":"<path fill=\"currentColor\" d=\"M7.5 4L21 12L7.5 20Z\"/>","pausa":"<g fill=\"currentColor\"><rect x=\"6\" y=\"4\" width=\"4\" height=\"16\"/><rect x=\"14\" y=\"4\" width=\"4\" height=\"16\"/></g>","siguiente":"<path fill=\"currentColor\" d=\"M4 4.5L15 12L4 19.5Z\"/><rect fill=\"currentColor\" x=\"16.5\" y=\"4.5\" width=\"3.5\" height=\"15\"/>","anterior":"<path fill=\"currentColor\" d=\"M20 4.5L9 12L20 19.5Z\"/><rect fill=\"currentColor\" x=\"4\" y=\"4.5\" width=\"3.5\" height=\"15\"/>","subtitulos":"<rect fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"4\" x=\"2.5\" y=\"5.5\" width=\"19\" height=\"13\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"4\" d=\"M6 13.5H11M13.5 13.5H18\"/>","voz":"<path fill=\"currentColor\" d=\"M2.5 9H6.5L12.5 4V20L6.5 15H2.5Z\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"4\" d=\"M15.5 8.5A5 5 0 0 1 15.5 15.5M18.5 5.5A9 9 0 0 1 18.5 18.5\"/>","pantalla-completa":"<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"4\" d=\"M3.5 9V3.5H9M15 3.5H20.5V9M20.5 15V20.5H15M9 20.5H3.5V15\"/>","capitulos":"<g fill=\"currentColor\"><rect x=\"2\" y=\"4\" width=\"4\" height=\"4\"/><rect x=\"2\" y=\"10\" width=\"4\" height=\"4\"/><rect x=\"2\" y=\"16\" width=\"4\" height=\"4\"/></g><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"4\" d=\"M9 6H22M9 12H22M9 18H22\"/>","check":"<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"4\" d=\"M3.5 12.5L9 18L20.5 6.5\"/>","cerrar":"<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"4\" d=\"M5 5L19 19M19 5L5 19\"/>","alerta":"<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M12 2L22.5 21H1.5Z M10.75 8.5H13.25V14.5H10.75Z M10.75 16.5H13.25V19H10.75Z\"/>","prohibido":"<circle fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"4\" cx=\"12\" cy=\"12\" r=\"8.5\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"4\" d=\"M6 6L18 18\"/>","info":"<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M12 2.5A9.5 9.5 0 1 1 12 21.5A9.5 9.5 0 1 1 12 2.5Z M10.75 10H13.25V17.5H10.75Z M12 5.75A1.5 1.5 0 1 1 12 8.75A1.5 1.5 0 1 1 12 5.75Z\"/>","candado":"<rect fill=\"currentColor\" x=\"4.5\" y=\"10.5\" width=\"15\" height=\"11\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"4\" d=\"M8 10.5V7.5A4 4 0 0 1 16 7.5V10.5\"/>","herramienta":"<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"4\" d=\"M9 2V7M15 2V7\"/><path fill=\"currentColor\" d=\"M5 7H19V12L15 16H9L5 12Z\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"4\" d=\"M12 16V22\"/>","persona":"<circle fill=\"currentColor\" cx=\"12\" cy=\"5.5\" r=\"3.5\"/><path fill=\"currentColor\" d=\"M5 21.5V14L8.5 10.5H15.5L19 14V21.5Z\"/>","buscar":"<circle fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"4\" cx=\"10\" cy=\"10\" r=\"6.5\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"4\" d=\"M14.6 14.6L21 21\"/>","menu":"<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"4\" d=\"M3 6H21M3 12H21M3 18H21\"/>","reloj":"<circle fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"4\" cx=\"12\" cy=\"12\" r=\"8.5\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"4\" d=\"M12 7V12.5H16.5\"/>","reiniciar":"<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"4\" d=\"M13 5A7.5 7.5 0 1 1 5.5 12.5\"/><path fill=\"currentColor\" d=\"M1.5 12.5H9.5L5.5 8.5Z\"/>","mas":"<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"4\" d=\"M12 4V20M4 12H20\"/>","menos":"<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"4\" d=\"M4 12H20\"/>"};
  var PICTOGRAMAS = {"neurona":"<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"4\" d=\"M2 4.5H5L10 9.5M2 11.5H10M2 18.5H5L10 13.5M17 11.5H22\"/><circle fill=\"currentColor\" cx=\"13.5\" cy=\"11.5\" r=\"5\"/>","agente":"<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"4\" d=\"M13 5A7.5 7.5 0 1 1 5.5 12.5\"/><path fill=\"currentColor\" d=\"M1.5 12.5H9.5L5.5 8.5Z\"/><rect fill=\"currentColor\" x=\"10.5\" y=\"10\" width=\"5\" height=\"5\"/>","transformer":"<g fill=\"currentColor\"><rect x=\"2\" y=\"2\" width=\"6\" height=\"6\"/><rect x=\"10\" y=\"3\" width=\"4\" height=\"4\"/><rect x=\"18\" y=\"4\" width=\"2\" height=\"2\"/><rect x=\"3\" y=\"10\" width=\"4\" height=\"4\"/><rect x=\"9\" y=\"9\" width=\"6\" height=\"6\"/><rect x=\"17\" y=\"10\" width=\"4\" height=\"4\"/><rect x=\"4\" y=\"18\" width=\"2\" height=\"2\"/><rect x=\"10\" y=\"17\" width=\"4\" height=\"4\"/><rect x=\"16\" y=\"16\" width=\"6\" height=\"6\"/></g>","gigante":"<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"4\" d=\"M2 9.5L7 14.5A7.07 7.07 0 0 0 17 14.5L22 9.5\"/><circle fill=\"currentColor\" cx=\"7.5\" cy=\"9\" r=\"2.75\"/>","datos":"<g fill=\"currentColor\"><rect x=\"2\" y=\"3\" width=\"7\" height=\"4\"/><rect x=\"11\" y=\"3\" width=\"4\" height=\"4\"/><rect x=\"17\" y=\"3\" width=\"5\" height=\"4\"/><rect x=\"2\" y=\"10\" width=\"10\" height=\"4\"/><rect x=\"14\" y=\"10\" width=\"5\" height=\"4\"/><rect x=\"2\" y=\"17\" width=\"4\" height=\"4\"/><rect x=\"8\" y=\"17\" width=\"6\" height=\"4\"/></g>","evaluacion":"<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"4\" d=\"M3.5 15.5A8.5 8.5 0 0 1 20.5 15.5M12 15.5L16.6 10.9\"/><circle fill=\"currentColor\" cx=\"12\" cy=\"15.5\" r=\"2.75\"/>","rag":"<circle fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"4\" cx=\"10\" cy=\"10\" r=\"6.5\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"4\" d=\"M14.6 14.6L21 21\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"4\" d=\"M7 8.5H13M7 12H11\"/>","produccion":"<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M6 6H18V18H6Z M9.5 9.5V14.5H14.5V9.5Z\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"4\" d=\"M9.5 2V6M14.5 2V6M9.5 18V22M14.5 18V22M2 9.5H6M2 14.5H6M18 9.5H22M18 14.5H22\"/>","responsable":"<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"4\" d=\"M3 5H21M12 6.5V18M6 19.5H18\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"4\" d=\"M5.5 6.5V11M18.5 6.5V11\"/><path fill=\"currentColor\" d=\"M2 11H9A3.5 3.5 0 0 1 2 11ZM15 11H22A3.5 3.5 0 0 1 15 11Z\"/>"};
  var LINEAS = [{"id":"m","letra":"M","nombre":"Modelos","capas":["fundamentos","modelos","entrenamiento"],"color":"linea-m","en":"en-linea"},{"id":"d","letra":"D","nombre":"Datos","capas":["datos","evaluacion"],"color":"linea-d","en":"en-linea"},{"id":"s","letra":"S","nombre":"Sistemas","capas":["sistemas","inferencia"],"color":"linea-s","en":"en-linea"},{"id":"p","letra":"P","nombre":"Personas","capas":["producto","sociedad"],"color":"linea-p","en":"en-linea"}];
  var ESTACIONES = [{"n":1,"id":"neurona","titulo":"La neurona","linea":"m","pictograma":"neurona"},{"n":2,"id":"agentes","titulo":"El agente","linea":"s","pictograma":"agente"},{"n":3,"id":"transformer","titulo":"El Transformer","linea":"m","pictograma":"transformer"},{"n":4,"id":"gigante","titulo":"Cómo aprende un gigante","linea":"m","pictograma":"gigante"},{"n":5,"id":"datos","titulo":"Los datos","linea":"d","pictograma":"datos"},{"n":6,"id":"evaluacion","titulo":"¿Funciona?","linea":"d","pictograma":"evaluacion"},{"n":7,"id":"rag","titulo":"RAG y memoria","linea":"s","pictograma":"rag"},{"n":8,"id":"produccion","titulo":"Del laboratorio al mundo","linea":"s","pictograma":"produccion"},{"n":9,"id":"responsable","titulo":"IA responsable","linea":"p","pictograma":"responsable"}];
  var ESTADOS = { terminada: 'Terminada', empezada: 'Empezada', abierta: 'Abierta', obra: 'En obra', plan: 'Planeada' };

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; });
  }
  function dos(n) { return (n < 10 ? '0' : '') + n; }
  function formato(v, decimales) {
    var s = Math.abs(v).toFixed(decimales == null ? 2 : decimales);
    return (v < 0 && +s !== 0 ? '\u2212' : '') + s;
  }
  function miles(n) { return Number(n).toLocaleString('es-MX'); }

  function svg(inner, o) {
    o = o || {};
    var a = o.titulo ? ' role="img" aria-label="' + esc(o.titulo) + '"' : ' aria-hidden="true" focusable="false"';
    var t = o.titulo ? '<title>' + esc(o.titulo) + '</title>' : '';
    var tam = o.tamano ? ' width="' + o.tamano + '" height="' + o.tamano + '"' : '';
    var cls = o.clase ? ' class="' + o.clase + '"' : '';
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + (o.caja || 24) + ' ' + (o.caja || 24) + '"' + cls + tam + a + '>' + t + inner + '</svg>';
  }

  function linea(id) {
    for (var i = 0; i < LINEAS.length; i++) if (LINEAS[i].id === id || LINEAS[i].letra === id) return LINEAS[i];
    throw new Error('Línea desconocida: ' + id);
  }
  function estacion(id) {
    for (var i = 0; i < ESTACIONES.length; i++) {
      var e = ESTACIONES[i];
      if (e.id === id || e.pictograma === id || e.n === id) return e;
    }
    return null;
  }

  function icono(nombre, o) {
    var inner = ICONOS[nombre];
    if (!inner) throw new Error('Ícono desconocido: ' + nombre);
    o = o || {};
    return svg(inner, { titulo: o.titulo, tamano: o.tamano, clase: 'na-icono' + (o.clase ? ' ' + o.clase : '') });
  }

  function pictograma(id, o) {
    var e = estacion(id), clave = e ? e.pictograma : id;
    if (!PICTOGRAMAS[clave]) throw new Error('Pictograma desconocido: ' + id);
    o = o || {};
    return svg(PICTOGRAMAS[clave], { titulo: o.titulo, tamano: o.tamano, clase: o.clase });
  }

  function placa(id, o) {
    o = o || {};
    var e = estacion(id), l = o.linea || (e && e.linea);
    var st = o.tamano ? ' style="--tam:' + o.tamano + 'px"' : '';
    return '<span class="na-placa' + (o.clase ? ' ' + o.clase : '') + '"' + (l ? ' data-linea="' + l + '"' : '') + st + '>' + pictograma(id, { titulo: o.titulo }) + '</span>';
  }

  function insignia(id, o) {
    o = o || {};
    var l = linea(id), nombre = 'Línea ' + l.letra + ' · ' + l.nombre;
    var conNombre = o.conNombre !== false;
    return '<span class="na-insignia' + (o.grande ? ' na-insignia--grande' : '') + '" data-linea="' + l.id + '"' + (conNombre ? '' : ' role="img" aria-label="' + esc(nombre) + '"') + '>' +
      '<span class="na-insignia__cuadro" aria-hidden="true"></span>' +
      '<span class="na-insignia__letra"' + (conNombre ? '' : ' aria-hidden="true"') + '>' + l.letra + '</span>' +
      (conNombre ? '<span class="na-insignia__nombre">' + esc(o.texto || l.nombre) + '</span>' : '') + '</span>';
  }

  function estado(e, o) {
    if (!ESTADOS[e] && e !== 'actual') throw new Error('Estado desconocido: ' + e);
    var texto = (o && o.texto) || (e === 'actual' ? 'Estás aquí' : ESTADOS[e]);
    return '<span class="na-estado" data-estado="' + e + '"><span class="na-estado__marca" aria-hidden="true"></span>' + esc(texto) + '</span>';
  }

  /* La marca en línea: toma los colores de los tokens, así que cambia sola con el tema. */
  function marca(o) {
    o = o || {};
    var tinta = o.variante === 'tinta';
    var c = function (k) { return tinta ? 'var(--tinta)' : 'var(--linea-' + k + ')'; };
    var inner = '<g fill="none" stroke-width="4.5">' +
      '<path style="stroke:' + c('m') + '" d="M2 9H8L22 23"/>' +
      '<path style="stroke:' + c('d') + '" d="M2 24H25"/>' +
      '<path style="stroke:' + c('s') + '" d="M2 39H8L22 25"/>' +
      '<path style="stroke:' + c('p') + '" d="M27 24H46"/></g>' +
      '<circle cx="26" cy="24" r="7" stroke-width="3.5" style="fill:var(--panel);stroke:var(--tinta)"/>';
    return svg(inner, { caja: 48, tamano: o.tamano, clase: o.clase, titulo: o.titulo === undefined ? 'Neurona Artificial' : o.titulo });
  }

  /* La ruta del curso: horizontal desde 641px de ancho del contenedor, vertical debajo. Cada estación toma el color de su línea. */
  function ruta(el, o) {
    o = o || {};
    var lista = o.estaciones || ESTACIONES, estados = o.estados || {}, enlaces = o.enlaces || {};
    var html = '<ol class="na-ruta__lista" style="--n:' + lista.length + '">';
    lista.forEach(function (e) {
      var est = estados[e.id] || 'plan';
      var hueco = est === 'obra' || est === 'plan';
      var actual = o.actual === e.id;
      var url = enlaces[e.id];
      var tag = url && !hueco ? 'a' : 'span';
      html += '<li class="na-ruta__estacion" data-linea="' + e.linea + '" data-estado="' + est + '"' + (hueco ? ' data-tramo="hueco"' : '') + (actual ? ' data-actual' : '') + '>' +
        '<' + tag + ' class="na-ruta__enlace"' + (tag === 'a' ? ' href="' + esc(url) + '"' : '') + (actual ? ' aria-current="step"' : '') + '>' +
        '<span class="na-ruta__punto" aria-hidden="true"></span>' +
        '<span class="na-ruta__textos"><span class="na-ruta__num">Estación ' + dos(e.n) + '</span>' +
        '<span class="na-ruta__nombre">' + esc(e.titulo) + '</span>' +
        '<span class="na-ruta__estado">' + (actual ? 'Estás aquí' : ESTADOS[est]) + '</span></span>' +
        '</' + tag + '></li>';
    });
    el.classList.add('na-ruta');
    if (!el.getAttribute('aria-label')) el.setAttribute('aria-label', 'Ruta del curso');
    el.innerHTML = html + '</ol>';
    return el;
  }

  /* Conecta un <input type="range"> con su relleno de línea y su <output>. */
  function deslizador(raiz, o) {
    o = o || {};
    var input = raiz.matches('input') ? raiz : raiz.querySelector('input[type="range"]');
    var salida = raiz.matches('input') ? null : raiz.querySelector('output');
    function act() {
      var min = input.min === '' ? 0 : +input.min, max = input.max === '' ? 100 : +input.max, v = +input.value;
      input.style.setProperty('--p', ((v - min) / (max - min) * 100) + '%');
      if (salida) salida.textContent = o.formato ? o.formato(v) : formato(v, o.decimales);
    }
    input.addEventListener('input', act);
    act();
    return input;
  }

  function resaltarJSON(texto) {
    return esc(texto).replace(/(&quot;(?:\\.|[^&\\]|&(?!quot;))*?&quot;)(\s*:)?|\b(true|false|null)\b|(-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)|([{}\[\],])/g,
      function (m, cad, dosp, lit, num, punt) {
        if (cad) return dosp ? '<span class="na-c-clave">' + cad + '</span><span class="na-c-punt">' + dosp + '</span>' : '<span class="na-c-cad">' + cad + '</span>';
        if (lit) return '<span class="na-c-lit">' + lit + '</span>';
        if (num) return '<span class="na-c-num">' + num + '</span>';
        return '<span class="na-c-punt">' + punt + '</span>';
      });
  }
  function resaltarPython(texto) {
    return esc(texto).replace(/(#.*$)|(&quot;(?:\\.|[^&\\]|&(?!quot;))*?&quot;|'(?:\\.|[^'\\])*')|\b(def|return|while|for|in|if|elif|else|break|continue|and|or|not|True|False|None|import|from|as|with)\b|\b(\d+(?:\.\d+)?)\b/g,
      function (m, com, cad, kw, num) {
        if (com) return '<span class="na-c-com">' + com + '</span>';
        if (cad) return '<span class="na-c-cad">' + cad + '</span>';
        if (kw) return '<span class="na-c-lit">' + kw + '</span>';
        return '<span class="na-c-num">' + num + '</span>';
      });
  }

  /* Bloque de código con números de línea y la línea activa marcada. */
  function codigo(el, o) {
    o = o || {};
    var lineas = String(o.texto || '').replace(/\n$/, '').split('\n');
    var fn = o.lenguaje === 'json' ? resaltarJSON : o.lenguaje === 'python' ? resaltarPython : esc;
    var html = lineas.map(function (l, i) {
      return '<span class="na-codigo__linea"' + (o.activa === i + 1 ? ' data-activa' : '') + '>' + (fn(l) || ' ') + '</span>';
    }).join('');
    el.classList.add('na-codigo');
    el.innerHTML = (o.titulo ? '<figcaption class="na-codigo__titulo">' + o.titulo + '</figcaption>' : '') + '<pre tabindex="0"><code>' + html + '</code></pre>';
    return el;
  }

  /* Medidor de vagones: cuánto de una capacidad ya está ocupado (contexto, cuota, avance). */
  function medidor(el, o) {
    o = o || {};
    var n = o.vagones || 20, total = o.total || 1, usado = Math.max(0, Math.min(o.usado || 0, total)), nuevo = Math.max(0, o.nuevo || 0);
    var llenos = Math.round(usado / total * n), nuevos = Math.min(llenos, Math.round(nuevo / total * n));
    var celdas = '';
    for (var i = 0; i < n; i++) celdas += '<span data-estado="' + (i < llenos - nuevos ? 'lleno' : i < llenos ? 'nuevo' : 'libre') + '"></span>';
    var unidad = o.unidad || 'tokens', etiqueta = o.etiqueta || 'Contexto';
    el.classList.add('na-medidor');
    if (o.linea) el.setAttribute('data-linea', o.linea);
    el.setAttribute('role', 'meter');
    el.setAttribute('aria-label', etiqueta);
    el.setAttribute('aria-valuemin', '0');
    el.setAttribute('aria-valuemax', String(total));
    el.setAttribute('aria-valuenow', String(usado));
    el.setAttribute('aria-valuetext', miles(usado) + ' de ' + miles(total) + ' ' + unidad);
    el.innerHTML = '<div class="na-medidor__cabecera"><span>' + esc(etiqueta) + '</span><span class="na-medidor__cifra">' + miles(usado) + ' / ' + miles(total) + ' ' + esc(unidad) + '</span></div>' +
      '<div class="na-medidor__vagones" style="--n:' + n + '" aria-hidden="true">' + celdas + '</div>' +
      (o.leyenda === false ? '' : '<ul class="na-medidor__leyenda" aria-hidden="true"><li data-estado="lleno">' + esc(o.textoLleno || 'Ya ocupado') + '</li><li data-estado="nuevo">' + esc(o.textoNuevo || 'Recién llegado') + '</li><li data-estado="libre">Libre</li></ul>');
    return el;
  }

  /* Línea de tiempo del reproductor: avance (0–1) y cortes de capítulo (0–1). */
  function lineaTiempo(el, o) {
    o = o || {};
    var cortes = (o.cortes || []).filter(function (x) { return x > 0 && x < 1; });
    el.classList.add('na-reproductor__linea');
    if (o.linea) el.setAttribute('data-linea', o.linea);
    el.style.setProperty('--p', String(o.avance || 0));
    el.innerHTML = '<span class="na-reproductor__avance"></span>' +
      cortes.map(function (x) { return '<span class="na-reproductor__corte" style="--x:' + x + '"></span>'; }).join('') +
      '<span class="na-reproductor__cabeza"></span>';
    return el;
  }

  /* Lista de capítulos como estaciones: los vistos se llenan, el actual lleva el halo amarillo. */
  function capitulos(el, o) {
    o = o || {};
    var lista = o.capitulos || [];
    el.classList.add('na-capitulos');
    if (o.linea) el.setAttribute('data-linea', o.linea);
    el.innerHTML = lista.map(function (c, i) {
      var actual = i === o.actual, visto = o.actual != null && i < o.actual;
      return '<li><button type="button" data-capitulo="' + i + '"' + (actual ? ' aria-current="true"' : '') + (visto ? ' data-visto' : '') + '>' +
        '<span class="na-capitulos__punto" aria-hidden="true"></span><span class="na-capitulos__tiempo">' + esc(c.inicio) + '</span><span>' + esc(c.titulo) + '</span></button></li>';
    }).join('');
    return el;
  }

  var api = {
    version: '2.0.0',
    LINEAS: LINEAS, ESTACIONES: ESTACIONES, ESTADOS: ESTADOS, ICONOS: ICONOS, PICTOGRAMAS: PICTOGRAMAS,
    linea: linea, estacion: estacion, icono: icono, pictograma: pictograma, placa: placa, insignia: insignia, estado: estado, marca: marca,
    ruta: ruta, deslizador: deslizador, resaltarJSON: resaltarJSON, resaltarPython: resaltarPython, codigo: codigo,
    medidor: medidor, lineaTiempo: lineaTiempo, capitulos: capitulos, formato: formato, miles: miles
  };
  var g = typeof window !== 'undefined' ? window : this;
  g.NeuronaArtificial = g.NeuronaArtificial || {};
  for (var k in api) if (Object.prototype.hasOwnProperty.call(api, k)) g.NeuronaArtificial[k] = api[k];
})();
