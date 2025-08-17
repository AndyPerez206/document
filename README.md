# DIOS TE BENDIGA — Mensaje Dinámico y Responsive

Estos archivos añaden un mensaje central "DIOS TE BENDIGA" con estilo neón eléctrico, responsivo y con animación de color profesional.

Archivos incluidos:
- `index.html` — estructura HTML.
- `assets/css/styles.css` — estilos (animación, tipografía, diseño responsive).
- `assets/js/neon.js` — lógica para rotar paletas de colores y controles.

Cómo integrar
1. Copia los archivos en tu repo (por ejemplo en la raíz o en la carpeta que uses para la página).
2. Asegúrate de que las rutas coincidan; en el ejemplo CSS y JS están en `assets/css/` y `assets/js/`.
3. Abre `index.html` en el navegador o intégralo dentro de tu layout existente.

Características técnicas
- Responsivo: usa `font-size: clamp(...)` para escalar en todos los dispositivos.
- Dinámico: gradiente en movimiento + rotación de paletas mediante JavaScript.
- Colores eléctricos: paletas con tonos neón (cyan, púrpura, fucsia, amarillo eléctrico).
- Profesional: tipografía pesada, diseño centrado y controles discretos.
- Accesibilidad: respeta `prefers-reduced-motion` y usa `aria-live="polite"` para lector de pantalla.

Personalizaciones rápidas
- Cambiar texto: editar el contenido del <h1 id="blessing"> en `index.html`.
- Agregar más paletas: editar `palettes` en `assets/js/neon.js`.
- Ajustar velocidad: en `assets/js/neon.js` modificar el intervalo (actualmente 4200 ms).
- Desactivar controles: eliminar el bloque `.controls` en HTML.