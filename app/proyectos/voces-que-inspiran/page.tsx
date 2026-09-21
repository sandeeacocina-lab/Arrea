import type { Metadata } from 'next';

import { ProjectDetail } from '@/components/project-detail';
import { getProject } from '@/lib/projects';
import { basePath } from '@/lib/site';

const project = getProject('voces-que-inspiran')!;
const nextProject = getProject('expods')!;

export const metadata: Metadata = {
  title: project.title,
  description: project.summary,
  openGraph: { title: `${project.title} | ARREA Eventos`, description: project.summary, images: [`${basePath}/og-identidad-2026.png`] },
  twitter: { card: 'summary_large_image', title: `${project.title} | ARREA Eventos`, description: project.summary, images: [`${basePath}/og-identidad-2026.png`] },
};

export default function VocesQueInspiranPage() {
  return <ProjectDetail project={project} nextProject={nextProject} />;
}
