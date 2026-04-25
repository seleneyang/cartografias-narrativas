# Cartografías narrativas

Una pequeña web colectiva para compartir lugares amados.

Cada persona elige un lugar que le importa, lo ubica en el mapa, y le pone "color emocional" eligiendo qué siente cuando piensa en él. El resultado es una tarjeta con una mancha de colores única — y un punto en un mapa colectivo donde todas las tarjetas se encuentran.

**Sitio en vivo:** [seleneyang.github.io/cartografias-narrativas](https://seleneyang.github.io/cartografias-narrativas/)

---

## ¿De qué se trata?

El proyecto está inspirado en *Narrative Cartographies* de [Kontinentalist](https://kontinentalist.com/), donde un grupo de personas usó Twine para compartir sus lugares queridos a través de relatos interactivos, acompañados de mapas de calor con manchas de colores.

Esta versión propone una variante: en lugar de relatos ramificados, cada persona compone su tarjeta eligiendo emociones e intensidades. El sistema traduce esa elección en una composición visual (la mancha) y la ancla geográficamente en un mapa de OpenStreetMap.

## Cómo funciona

### Para quien quiere compartir un lugar

1. Entrá a la [página principal](https://seleneyang.github.io/cartografias-narrativas/).
2. Escribí tu nombre y el nombre del lugar.
3. Buscá la dirección o hacé click directo en el mini-mapa para ubicar el pin.
4. Movés los sliders de cada emoción según cuánto sentís de cada una en ese lugar.
5. La mancha de colores se compone automáticamente. Si no te gusta cómo quedó, *Regenerar forma* prueba otra disposición con las mismas emociones.
6. *Enviar a la galería* manda tu tarjeta a la colección compartida.

### Para quien quiere ver la galería

Andá a [la galería](https://seleneyang.github.io/cartografias-narrativas/galeria.html). Vas a ver todas las tarjetas con su mini-mapa, y abajo, un mapa general con un pin del color dominante de cada persona. Hacés click en cualquier pin y podés saltar a la tarjeta correspondiente.

## La paleta emocional

Cada emoción tiene un color asignado:

| Emoción | Color | Asociación |
|---|---|---|
| Alegría | amarillo | luz, risa, juego |
| Calidez | naranja | hogar, comida, sol |
| Amor | rojo | vínculo, cuidado |
| Nostalgia | lila | memoria, ausencia |
| Melancolía | azul | tristeza dulce |
| Paz | turquesa | quietud, silencio |
| Naturaleza | verde | árboles, tierra |
| Sagrado | morado | misterio, ritual |

La intensidad que elegís en cada slider determina cuánto de ese color aparece en la mancha. La emoción más intensa también define el color del pin en el mapa.

## Tecnologías

Todo es web estática que corre en GitHub Pages, sin backend propio.

- **Frontend**: HTML, CSS y JavaScript puro, sin frameworks.
- **Mapas**: [Leaflet](https://leafletjs.com/) con tiles de [OpenStreetMap](https://www.openstreetmap.org/).
- **Geocoding**: [Nominatim](https://nominatim.openstreetmap.org/) (OSM), gratuito.
- **Tipografías**: [Lora](https://fonts.google.com/specimen/Lora) y [Caveat](https://fonts.google.com/specimen/Caveat) desde Google Fonts.
- **Almacenamiento de tarjetas**: Google Apps Script + Google Sheets como base de datos liviana.

## Estructura del repositorio

```
.
├── index.html       Generador de tarjetas (página principal)
├── galeria.html     Galería colectiva con mapa general
├── cartas.json      Datos de respaldo (fallback si el endpoint no responde)
└── README.md        Este archivo
```

El archivo `cartas.json` queda como copia local de seguridad. La fuente real de datos en producción es la planilla de Google conectada vía Apps Script.

## ¿Querés montarlo vos?

Si querés clonar este sistema para tu propio proyecto comunitario:

1. **Forkeá** este repositorio.
2. Creá una **planilla de Google** vacía.
3. Abrí **Extensiones → Apps Script** dentro de la planilla.
4. Pegá ahí el código que está en [`apps-script.gs`](#) y publicá como Web App con acceso "Cualquier usuario".
5. Copiá la URL del deploy.
6. Pegala en la variable `ENDPOINT` al inicio del `<script>` de `index.html` y `galeria.html` (la misma URL en los dos).
7. Activá GitHub Pages en *Settings → Pages → Branch: main / root*.

Las emociones, colores y textos están todos al inicio de cada archivo para que los puedas adaptar fácilmente a tu comunidad.

## Atribuciones

- Inspirado en el proyecto *Narrative Cartographies* de [Kontinentalist](https://kontinentalist.com/), Singapur.
- Mapas © [OpenStreetMap contributors](https://www.openstreetmap.org/copyright).
- Geocoding por [Nominatim](https://nominatim.openstreetmap.org/), bajo su [política de uso justo](https://operations.osmfoundation.org/policies/nominatim/).

## Licencia

Código bajo licencia MIT. Las tarjetas y los relatos compartidos pertenecen a quienes los crearon.

---

*Un mapa hecho de lugares amados.*
