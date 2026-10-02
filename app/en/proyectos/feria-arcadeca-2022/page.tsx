import type { Metadata } from 'next';

import { ProjectDetail } from '@/components/en/project-detail';
import { getProject } from '@/lib/en/projects';
import { basePath } from '@/lib/en/site';

const project = getProject('feria-arcadeca-2022')!;
const nextProject = getProject('arca-impulsa-fp')!;
const projectImage = `${basePath}/images/projects/arcadeca/plano-genially.jpg`;

export const metadata: Metadata = {
  title: project.title,
  description: project.summary,
  openGraph: { title: `${project.title} | ARREA Eventos`, description: project.summary, images: [{ url: projectImage, width: 1500, height: 966, alt: 'Original floor plan of the ARCADECA virtual fair' }] },
  twitter: { card: 'summary_large_image', title: `${project.title} | ARREA Eventos`, description: project.summary, images: [projectImage] },
};

export default function FeriaArcadecaPage() {
  return <ProjectDetail project={project} nextProject={nextProject} />;
}

