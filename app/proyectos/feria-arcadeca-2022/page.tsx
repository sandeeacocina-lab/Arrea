import type { Metadata } from 'next';

import { ProjectDetail } from '@/components/project-detail';
import { getProject } from '@/lib/projects';
import { basePath } from '@/lib/site';

const project = getProject('feria-arcadeca-2022')!;
const nextProject = getProject('arca-impulsa-fp')!;
const projectImage = `${basePath}/images/projects/arcadeca/plano-genially.jpg`;

export const metadata: Metadata = {
  title: project.title,
  description: project.summary,
  openGraph: { title: `${project.title} | Arrea Eventos`, description: project.summary, images: [{ url: projectImage, width: 1500, height: 966, alt: 'Plano original de la feria virtual ARCADECA' }] },
  twitter: { card: 'summary_large_image', title: `${project.title} | Arrea Eventos`, description: project.summary, images: [projectImage] },
};

export default function FeriaArcadecaPage() {
  return <ProjectDetail project={project} nextProject={nextProject} />;
}
