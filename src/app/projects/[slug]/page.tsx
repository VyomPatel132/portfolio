import { ProjectDetailsContainer } from "@/containers";

export default async function ProjectDetails({ params }: { params: { slug: string } }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  return <ProjectDetailsContainer slug={slug} />;
}
