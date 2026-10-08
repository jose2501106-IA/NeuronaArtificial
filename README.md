# Neurona Artificial · aprende IA por dentro

Curso abierto en español para entender la IA por dentro: cada lección es un video animado con capítulos y subtítulos, más un laboratorio para experimentar. El hilo conductor es una decisión cotidiana: **¿vamos por tacos esta noche?**

**Portada del curso:** https://jose2501106-ia.github.io/NeuronaArtificial/

![Portada: la ruta de nueve estaciones](preview.png)

## La portada

- **La ruta:** nueve estaciones, de la neurona a la IA responsable, dibujadas como una línea de metro. Cada estación muestra si está terminada, abierta, en obra o planeada, y marca dónde vas.
- **El mapa del sistema:** las nueve capas de un sistema de IA real y en cuál vive cada lección.
- **Lecciones abiertas, método de estudio y recursos** para ir más lejos.
- **Tu progreso** se guarda solo en tu navegador: una lección se marca como terminada al llegar al final del video, o con el botón «Marcar como terminada».

## Lecciones

| # | Lección | Duración | Qué aprendes | Enlace |
|---|---------|----------|--------------|--------|
| 1 | **Cómo piensa una neurona artificial** | 4:06 | Entradas, pesos, suma, sesgo, activación, aprendizaje y el límite de una sola neurona. | [Abrir](https://jose2501106-ia.github.io/NeuronaArtificial/neurona/) |
| 2 | **Cómo actúa un agente de IA** | 6:21 | De predecir a actuar: modelo, herramientas, el ciclo pensar-actuar-observar, contexto y memoria, permisos e inyección de instrucciones. | [Abrir](https://jose2501106-ia.github.io/NeuronaArtificial/agentes/) |

### Lección 1 · La neurona

![Neurona artificial decidiendo si ir por tacos](neurona/preview.png)

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

**Laboratorio:** mueve entradas, pesos y sesgo, cambia la función de activación, entrena la neurona y explora el mapa de decisión.

### Lección 2 · El agente

![Ciclo de un agente de IA: contexto, modelo, arnés y herramientas](agentes/preview.png)

| # | Inicio | Capítulo |
|---|--------|----------|
| 1 | 0:00 | Del modelo al agente |
| 2 | 0:34 | El encargo |
| 3 | 1:06 | Las herramientas |
| 4 | 1:48 | El ciclo del agente |
| 5 | 2:34 | Cómo decide |
| 6 | 3:16 | Cuando algo falla |
| 7 | 3:52 | Contexto y memoria |
| 8 | 4:37 | Límites y permisos |
| 9 | 5:26 | Misión cumplida |

**Depurador:** maneja al agente paso a paso. Ves qué decide el modelo (con sus probabilidades), el JSON de cada llamada y resultado, la línea del ciclo en código que se está ejecutando y cómo crece el contexto. Tú apruebas o rechazas las reservas y los mensajes. Incluye tres escenarios (noche normal, todo lleno y una reseña con instrucciones escondidas), modo autónomo, límite de vueltas y compactación del contexto. Al final hay un glosario con los términos que usan los ingenieros.

## Cómo se usa

- Reproductor: pausa, línea de tiempo, velocidad, capítulos, pantalla completa y narración por voz opcional si tu navegador tiene una voz en español.
- Atajos de teclado: `Espacio` reproducir o pausar · `←` `→` 5 segundos · `C` subtítulos · `V` voz · `F` pantalla completa · `N` siguiente capítulo.
- Tema claro y oscuro: la página sigue la configuración de tu dispositivo.

## Archivos

| Archivo | Para qué sirve |
|---------|----------------|
| `index.html` | Portada del curso: la ruta, el mapa del sistema, las lecciones y el método. |
| `preview.png` | Imagen de 1200 × 630 que aparece al compartir la portada. |
| `neurona/index.html` | Lección 1 completa en un solo archivo: estilos, animación y laboratorio. |
| `neurona/preview.png` | Imagen para compartir la lección 1. |
| `agentes/index.html` | Lección 2 completa en un solo archivo: video, depurador y glosario. |
| `agentes/preview.png` | Imagen para compartir la lección 2. |
| `.nojekyll` | Le dice a GitHub Pages que publique los archivos tal cual. |

No hay nada que compilar: cada página es un HTML autocontenido que solo carga tipografías de Google Fonts.

## Cómo se publica

GitHub Pages sirve el sitio desde la rama `main`, carpeta raíz (Settings → Pages → Deploy from a branch → `main` / `/ (root)`). Cada commit en `main` se publica solo en uno o dos minutos.

## Notas

Los ejemplos son inventados para explicar la mecánica: los valores de la neurona, los lugares, las reseñas, los horarios, los tokens y las probabilidades no son reales. En la lección 2, un modelo real elige token por token; ahí se agrupan esas probabilidades por acción para que se vean. Los JSON siguen la forma de los bloques `tool_use` y `tool_result` de la API de Claude, simplificados.
