# Cómo piensa una neurona artificial

Video interactivo de 4 minutos que sigue una decisión cotidiana, **¿vamos por tacos esta noche?**, mientras pasa por una neurona artificial: entradas, pesos, suma, sesgo, activación y aprendizaje.

**Ver en línea:** https://jose2501106-ia.github.io/NeuronaArtificial/

![Neurona artificial decidiendo si ir por tacos](preview.png)

## Qué incluye

- **Video animado** con controles de reproductor: pausa, línea de tiempo, velocidad, capítulos y pantalla completa.
- **Subtítulos y transcripción**: cada frase de la transcripción lleva a ese momento del video.
- **Narración por voz** opcional, si tu navegador tiene una voz en español.
- **Laboratorio** para mover entradas, pesos, sesgo y función de activación, ver la cuenta paso a paso, entrenar la neurona y explorar el mapa de decisión.
- **Tema claro y oscuro**: en claro la neurona se ve como una tinción de Golgi; en oscuro, como fluorescencia.

## Capítulos

| # | Inicio | Capítulo |
|---|--------|----------|
| 1 | 0:00 | La inspiración |
| 2 | 0:23 | Las entradas |
| 3 | 0:45 | Los pesos |
| 4 | 1:14 | Suma y sesgo |
| 5 | 1:41 | La activación |
| 6 | 2:16 | La salida |
| 7 | 2:31 | Cómo aprende |
| 8 | 3:07 | El límite de una neurona |
| 9 | 3:36 | De una neurona a una red |

Atajos de teclado: `Espacio` reproducir o pausar · `←` `→` 5 segundos · `C` subtítulos · `V` voz · `F` pantalla completa · `N` siguiente capítulo.

## Archivos

| Archivo | Para qué sirve |
|---------|----------------|
| `index.html` | Toda la página en un solo archivo: estilos, animación y laboratorio. No necesita compilarse. |
| `preview.png` | Imagen de 1200 × 630 que aparece al compartir el enlace (WhatsApp, redes). |
| `.nojekyll` | Le dice a GitHub Pages que publique los archivos tal cual. |

## Cómo se publica

GitHub Pages sirve el sitio desde la rama `main`, carpeta raíz (Settings → Pages → Deploy from a branch → `main` / `/ (root)`).

Para actualizarlo, edita `index.html` y haz commit en `main`. La página se actualiza sola en uno o dos minutos.

## Nota

Los valores del ejemplo (hambre 0.8, amigos 0.6, lluvia 0.2, pesos y sesgo) son inventados para explicar la mecánica. La neurona del video usa la función sigmoide y aprende con la regla Δw = η · error · x, que es el descenso por gradiente sobre la pérdida logística. Las redes reales repiten esta misma pieza a gran escala.
