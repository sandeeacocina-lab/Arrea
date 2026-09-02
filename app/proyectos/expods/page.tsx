import type { Metadata } from 'next';

import { ProjectDetail } from '@/components/project-detail';
import { getProject } from '@/lib/projects';
import { basePath } from '@/lib/site';

const project = getProject('expods')!;
const nextProject = getProject('feria-arcadeca-2022')!;
const projectImage = `${basePath}/images/projects/expods/exposicion.jpeg`;

export const metadata: Metadata = {
  title: project.title,
  description: project.summary,
  openGraph: { title: `${project.title} | Arrea Eventos`, description: project.summary, images: [{ url: projectImage, width: 1280, height: 887, alt: 'La exposición de los ODS en el IES Arca Real' }] },
  twitter: { card: 'summary_large_image', title: `${project.title} | Arrea Eventos`, description: project.summary, images: [projectImage] },
};

export default function ExpoOdsPage() {
  return <ProjectDetail project={project} nextProject={nextProject} />;
}
