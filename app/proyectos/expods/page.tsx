import type { Metadata } from 'next';

import { ProjectDetail } from '@/components/project-detail';
import { getProject } from '@/lib/projects';

const project = getProject('expods')!;
const nextProject = getProject('feria-arcadeca-2022')!;

export const metadata: Metadata = {
  title: project.title,
  description: project.summary,
  openGraph: { title: `${project.title} | Arrea Eventos`, description: project.summary, images: [] },
  twitter: { card: 'summary', title: `${project.title} | Arrea Eventos`, description: project.summary, images: [] },
};

export default function ExpoOdsPage() {
  return <ProjectDetail project={project} nextProject={nextProject} />;
}
