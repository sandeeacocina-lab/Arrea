export const packages = [
  {
    id: 'impulso',
    name: 'Impulso',
    theme: 'fuchsia',
    description: 'Comunicación para un evento ya organizado.',
    price: '1.800',
    total: '2.178',
    scope: 'Comunicación del evento',
    includes: [
      'Concepto visual',
      '6 piezas estáticas y programa digital',
      'Calendario de comunicación de 4 semanas',
      '2 rondas de ajustes',
    ],
    timeline: '3 semanas desde la recepción de contenidos y la aceptación.',
    exclusions:
      'No incluye producción presencial, fotografía, vídeo, impresión ni inversión publicitaria.',
  },
  {
    id: 'encuentro',
    name: 'Encuentro',
    theme: 'yellow',
    description: 'Jornada corporativa en Valladolid.',
    price: '5.800',
    total: '7.018',
    scope: 'Hasta 80 asistentes · 4 horas',
    includes: [
      'Planificación, secretaría y memoria',
      '4 piezas y señalética/acreditaciones básicas',
      'Sala de mañana y audiovisual básico con técnico',
      'Pausa café para 80 personas',
      '2 personas de acogida durante 6 horas',
    ],
    timeline: '6 semanas.',
    exclusions:
      'No incluye viajes, alojamiento, honorarios de ponentes, retransmisión, intérpretes ni ampliaciones.',
  },
  {
    id: 'conexion',
    name: 'Conexión',
    theme: 'ink',
    description: 'Una convención para conectar equipos.',
    price: '9.500',
    total: '11.495',
    scope: 'Hasta 150 asistentes · 8 horas',
    includes: [
      'Programa y coordinación de hasta 10 interlocutores',
      '6 piezas, secretaría y acreditaciones',
      'Sala, audiovisual básico y 2 pausas café',
      '4 personas de apoyo durante 10 horas',
      'Memoria y recomendaciones',
    ],
    timeline: '8 semanas.',
    exclusions:
      'No incluye viajes, alojamiento, cena, cachés, retransmisión avanzada ni producción escénica especial.',
  },
] as const;

export function inquiryEmail(packageName?: string) {
  const subject = packageName
    ? `Consulta sobre el paquete ${packageName} · ARREA`
    : 'Propuesta para un evento · ARREA';
  const body = [
    'Hola, ARREA:',
    '',
    packageName
      ? `Me interesa el paquete ${packageName}.`
      : 'Me gustaría recibir una propuesta para un evento.',
    '',
    'Empresa:',
    'Objetivo del evento:',
    'Fecha prevista:',
    'Número de asistentes:',
    'Presupuesto orientativo:',
    'Otras necesidades:',
    '',
    'Gracias.',
  ].join('\n');
  return `mailto:info@feriaarcadeca.es?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
