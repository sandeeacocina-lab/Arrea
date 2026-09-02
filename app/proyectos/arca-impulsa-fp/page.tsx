import type { Metadata } from 'next';

import { ProjectDetail } from '@/components/project-detail';
import { getProject } from '@/lib/projects';

const project = getProject('arca-impulsa-fp')!;
const nextProject = getProject('voces-que-inspiran')!;

export const metadata: Metadata = {
  title: project.title,
  description: project.summary,
  openGraph: { title: `${project.title} | Arrea Eventos`, description: project.summary, images: [] },
  twitter: { card: 'summary', title: `${project.title} | Arrea Eventos`, description: project.summary, images: [] },
};

export default function ArcaImpulsaFpPage() {
  return <ProjectDetail project={project} nextProject={nextProject} />;
}
