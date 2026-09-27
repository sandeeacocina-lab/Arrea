# Arrea Eventos

Nueva web de Arrea Eventos, la empresa simulada de Asistencia a la Dirección del IES Arca Real de Valladolid.

La web presenta ARREA como una agencia de eventos empresariales: servicios, paquetes comerciales, forma de trabajo y contacto. El pie identifica su finalidad educativa y el uso de inteligencia artificial.

La página `/paquetes/` compara Impulso, Encuentro y Conexión, con precios de referencia, inclusiones y límites. Los enlaces comerciales abren `/briefing/` dentro de la web. Si se llega desde un paquete, se conserva su nombre en las observaciones. El formulario recoge contacto, evento, públicos, recursos, presupuesto, objetivos, riesgos y accesibilidad. Solo se deben utilizar datos ficticios.

**Enviar briefing a ARREA** genera un PDF corporativo con Geist, reúne las respuestas y las envía a `https://central.sandramangas.com/api/contacto?company=arrea`. Se guardan como correo recibido en el buzón compartido `info@arrea.test`, con el PDF adjunto. No se envía correo real. **Descargar en PDF** guarda una copia sin enviar. La confirmación solo se muestra cuando la central devuelve la referencia; los reintentos con el mismo contenido reutilizan el identificador y el archivo para evitar duplicados. Las respuestas no se conservan al cerrar la página.

La central permite exclusivamente los orígenes corporativos aprobados para la recepción pública. La API de edición de correos no admite esos orígenes externos. Pruebas de esquema y PDF: `node tests/briefing.mjs`. Las fuentes incrustadas conservan su licencia en `public/fonts/Geist-LICENSE.txt`.

El archivo conserva los proyectos anteriores, sus páginas, materiales y autorías.

## Publicación

Web pública: [Arrea Eventos](https://sandeeacocina-lab.github.io/Arrea/).

El proyecto está preparado para publicarse automáticamente en GitHub Pages cuando se sube a la rama `main`. En GitHub, la fuente de Pages debe configurarse como **GitHub Actions**.

Para comprobar la exportación antes de publicar:

```bash
export NEXT_PUBLIC_BASE_PATH=/Arrea
pnpm build:pages
node scripts/prepare-github-pages.mjs
node --experimental-strip-types scripts/check-project-dossiers.mjs
```

La identidad compartida está en `app/identity-preview.css`. Las entradas se activan al aparecer cada bloque y las tarjetas responden al ratón. El contenido sigue visible sin JavaScript y la preferencia de movimiento reducido desactiva los desplazamientos.

## Desarrollo local

```bash
pnpm install
pnpm dev
```
