import { contactUrl } from './site';

export const packages = [
  {
    id: 'impulso',
    name: 'Impulso',
    theme: 'fuchsia',
    description: 'Communication for an event already organised.',
    price: '1,800',
    total: '2,178',
    scope: 'Event communication',
    includes: [
      'Visual concept',
      '6 static designs and a digital programme',
      '4-week communication schedule',
      '2 rounds of revisions',
    ],
    timeline: '3 weeks from receipt of content and acceptance.',
    exclusions:
      'Excludes on-site production, photography, video, printing and advertising spend.',
  },
  {
    id: 'encuentro',
    name: 'Encuentro',
    theme: 'yellow',
    description: 'Corporate event in Valladolid.',
    price: '5,800',
    total: '7,018',
    scope: 'Up to 80 attendees · 4 hours',
    includes: [
      'Planning, administration and final report',
      '4 designs and basic signage/badges',
      'Morning venue hire and basic AV with a technician',
      'Coffee break for 80 people',
      '2 reception staff for 6 hours',
    ],
    timeline: '6 weeks.',
    exclusions:
      'Excludes travel, accommodation, speaker fees, live streaming, interpreters and additional services.',
  },
  {
    id: 'conexion',
    name: 'Conexión',
    theme: 'ink',
    description: 'A convention that brings teams together.',
    price: '9,500',
    total: '11,495',
    scope: 'Up to 150 attendees · 8 hours',
    includes: [
      'Programme and coordination with up to 10 stakeholders',
      '6 designs, administration and badges',
      'Venue, basic AV and 2 coffee breaks',
      '4 support staff for 10 hours',
      'Final report and recommendations',
    ],
    timeline: '8 weeks.',
    exclusions:
      'Excludes travel, accommodation, dinner, performance fees, advanced streaming and specialist stage production.',
  },
] as const;

export function inquiryUrl(packageName?: string) {
 return packageName?`${contactUrl}?${new URLSearchParams({paquete:packageName})}`:contactUrl;
}

