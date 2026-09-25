# Arrea Eventos

Nueva web de Arrea Eventos, la empresa simulada de Asistencia a la Dirección del IES Arca Real de Valladolid.

La web presenta ARREA como una agencia de eventos empresariales: servicios, paquetes comerciales, forma de trabajo y contacto. El pie identifica su finalidad educativa y el uso de inteligencia artificial.

La página `/paquetes/` compara Impulso, Encuentro y Conexión, con precios de referencia, inclusiones y límites. Todos los enlaces comerciales de contacto abren el formulario de ARREA en la Central de Simulación. Las consultas de paquetes conservan el asunto y los datos del evento por completar. Al enviar el formulario, el mensaje y sus adjuntos llegan al buzón compartido de prácticas; no se envían correos reales. Solo se deben utilizar datos ficticios.

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
