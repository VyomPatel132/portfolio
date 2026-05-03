import React from "react";
import { ProjectDetail } from "@/components/project_detail";

export const ProjectDetailsContainer = ({ slug }: { slug: string }) => {
  return <ProjectDetail slug={slug} />;
};
