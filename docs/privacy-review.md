# Revisión de privacidad · 3 de octubre de 2026

Cambios autorizados: aviso de simulación en ES/EN, restricción de correos a `.test` antes de generar/enviar PDF y página informativa accesible desde el briefing y ambos pies. No se han enviado formularios de prueba ni accedido al buzón.

Datos contrastados en el código actual: PDF generado en el navegador; envío al servicio de recepción de la Central de Simulación; preferencia `arrea-language` en localStorage; widget Tavus cargado automáticamente desde UNPKG; contenidos Genially, ThingLink y YouTube activados mediante botón. El widget y su deployment-id se conservan.

Fuentes consultadas:
- Contacto institucional: https://iesarcareal.es/contacto/
- Registro de IP para seguridad de GitHub Pages: https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages#data-collection
- Widget Tavus: https://docs.tavus.io/sections/deployments/widget
- Política general Tavus (no sustituye las condiciones del tratamiento por cuenta de clientes): https://www.tavus.io/privacy-policy
- Script servido en la revisión: `https://unpkg.com/@tavus/widget@0.18.0/dist/index.iife.js`. Contiene funciones de cookies y almacenamiento local; no se han activado conversaciones, cámara ni micrófono. El sitio conserva su URL `@latest` existente.

Pendiente de confirmación por la coordinación: identidad del responsable del tratamiento y canal específico de privacidad; personas autorizadas para acceder al buzón y plazo de conservación de envíos ficticios; configuración efectiva, conservación y tratamiento de conversaciones de Tavus, e inventario de cookies/almacenamiento y consentimiento que corresponda. La autoría pedagógica de Sandra y el contacto general del centro no se presentan como identificación legal del responsable. La página publicada es información verificada de funcionamiento, no una declaración de cumplimiento completo.

El borrado de datos reales introducidos por error se describe según lo autorizado: cuando se advierta su presencia, sin prometer eliminación instantánea.

## Revisión adicional de Tavus y exposición pública

Por petición de Sandra, se utiliza únicamente «Sandra Mangas» en la página informativa y en el texto y metadatos de los PDF generados. Se retiran la dirección visible de la Central y el enlace al buzón que aparecía después del envío, en ES y EN. La URL técnica del servicio de recepción permanece en el código del formulario: eliminar enlaces públicos no constituye control de acceso ni oculta las peticiones de red. No se modifica la Central ni sus datos.

Fuentes revisadas el 3 de octubre de 2026: política general de privacidad (fecha indicada: 12 de noviembre de 2025), condiciones de la plataforma (fecha indicada: 24 de abril de 2025) y documentación del widget. La política general excluye expresamente el tratamiento por cuenta de clientes empresariales. Las condiciones, apartados 6.2 y 6.5, asignan al cliente las obligaciones de información y permisos y prevén una licencia de uso de los contenidos para prestar, mantener y mejorar el servicio. No se ha verificado un acuerdo particular de ARREA ni un compromiso contractual de exclusión de entrenamiento.

Consulta de solo lectura a la configuración pública de inicio del deployment existente: `customization.conversation.modality = "video"` y `customization.conversation.unique_memory_tag = true`. La documentación oficial describe la asociación de conversaciones mediante un identificador por navegador en localStorage. No se ha iniciado ninguna conversación ni activado cámara o micrófono. No se ha confirmado desde esa configuración la grabación, el plazo de conservación, el borrado ni los subencargados aplicables a esta cuenta.

La página informativa refleja la memoria activada y advierte de que la política general indica que el servicio no se dirige a menores de 18 años y contempla tratamiento en EE. UU. Las cookies de marketing descritas para la web del proveedor no se atribuyen automáticamente al widget de ARREA.

Condiciones consultadas: https://www.tavus.io/terms-of-service


## Retirada de Tavus · 3 de octubre de 2026

Sandra solicita expresamente retirar el widget. Se elimina de `app/layout.tsx` tanto el elemento `tavus-widget` como la carga de su script externo. Las comprobaciones de todas las páginas ES/EN pasan a exigir su ausencia. La información pública se actualiza para describir la retirada, sin prometer el borrado de datos de interacciones anteriores. Los hallazgos de la revisión previa de Tavus se conservan arriba como historial y ya no describen una integración activa. No se ha accedido a conversaciones ni eliminado datos de la cuenta Tavus.
