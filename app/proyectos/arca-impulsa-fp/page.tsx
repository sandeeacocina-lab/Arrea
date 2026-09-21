import type { Metadata } from 'next';

import { ProjectDetail } from '@/components/project-detail';
import { getProject } from '@/lib/projects';
import { basePath } from '@/lib/site';

const project = getProject('arca-impulsa-fp')!;
const nextProject = getProject('voces-que-inspiran')!;

export const metadata: Metadata = {
  title: project.title,
  description: project.summary,
  openGraph: { title: `${project.title} | ARREA Eventos`, description: project.summary, images: [`${basePath}/og-identidad-2026.png`] },
  twitter: { card: 'summary_large_image', title: `${project.title} | ARREA Eventos`, description: project.summary, images: [`${basePath}/og-identidad-2026.png`] },
};

export default function ArcaImpulsaFpPage() {
  return <ProjectDetail project={project} nextProject={nextProject} />;
}
