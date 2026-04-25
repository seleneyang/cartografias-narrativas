# Cartografías narrativas

Una pequeña web colectiva para compartir lugares amados.

Este es un proyecto de exploración para entender cuáles son los sentimientos que nos generan los espacios que habitamos. Cada persona elige un lugar que le importa, lo ubica en el mapa, marca si es público o privado, y le pone "color emocional" eligiendo qué siente cuando piensa en él.

**Sitio en vivo:** [seleneyang.github.io/cartografias-narrativas](https://seleneyang.github.io/cartografias-narrativas/)

---

## ¿De qué se trata?

Inspirado en *Narrative Cartographies* de [Kontinentalist](https://kontinentalist.com/), donde un grupo de personas usó Twine para compartir sus lugares queridos a través de relatos interactivos.

Esta versión propone una variante: en lugar de relatos ramificados, cada persona compone su tarjeta eligiendo emociones e intensidades. El sistema traduce esa elección en una composición visual (la mancha) y la ancla geográficamente en un mapa de OpenStreetMap.

## Cómo funciona

1. Entrá a [la página](https://seleneyang.github.io/cartografias-narrativas/).
2. Escribí tu nombre y el nombre del lugar.
3. Buscá la dirección o hacé click directo en el mapa para ubicar el pin.
4. Elegí si es un espacio público/abierto o privado/cerrado.
5. Movés los sliders de las emociones según cuánto sentís de cada una.
6. La mancha se compone automáticamente: cada emoción es un círculo, la intensidad determina su tamaño.
7. *Enviar a la galería* manda tu tarjeta a la colección compartida — vas a verla aparecer abajo en la misma página.

## La paleta emocional

Veinte emociones, cada una con su color asignado. Los sentimientos cálidos viven en amarillos y rosas; los más complejos, en azules y tonos profundos.

**Cálidas / positivas:** Aceptación, Alegría, Cuidado, Empoderamiento, Libertad, Seguridad, Tranquilidad.

**Difíciles / frías:** Angustia, Ansiedad, Culpa, Frustración, Humillación, Inseguridad, Miedo, Preocupación, Rabia, Rechazo, Soledad, Tristeza, Vergüenza.

La emoción más intensa también define el color del pin en el mapa colectivo.

## Tecnologías

- **Frontend**: HTML, CSS y JavaScript puro, sin frameworks.
- **Mapas**: [Leaflet](https://leafletjs.com/) con tiles de [OpenStreetMap](https://www.openstreetmap.org/).
- **Geocoding**: [Nominatim](https://nominatim.openstreetmap.org/) (OSM), gratuito.
- **Tipografías**: [Datatype](https://fonts.google.com/specimen/Datatype) y [Elms Sans](https://fonts.google.com/specimen/Elms+Sans), ambas de Google Fonts (OFL).
- **Almacenamiento**: Google Apps Script + Google Sheets.

## Estructura del repositorio

```
.
├── index.html       Página principal: generador + galería integrada
├── galeria.html     Vista alternativa solo galería (opcional)
├── cartas.json      Datos de respaldo
├── apps-script.gs   Código del backend en Apps Script
├── fonts/           Fuentes locales (.ttf)
└── README.md        Este archivo
```

## Atribuciones

- Inspirado en *Narrative Cartographies* de [Kontinentalist](https://kontinentalist.com/), Singapur.
- Mapas © [OpenStreetMap contributors](https://www.openstreetmap.org/copyright).
- Geocoding por [Nominatim](https://nominatim.openstreetmap.org/).
- Tipografía Datatype diseñada por Frank Tisellano.
- Tipografía Elms Sans diseñada por Amarachi Nwauwa (Gida Type Studio).

Curado por [Sele Yang](https://seleneyang.info) en colaboración con [Geochicas](https://www.instagram.com/geochicasosm).

## Licencia

Código bajo licencia MIT. Las tarjetas y los relatos compartidos pertenecen a quienes los crearon. Las fuentes están bajo SIL Open Font License.

---

*Un mapa hecho de lugares amados.*
