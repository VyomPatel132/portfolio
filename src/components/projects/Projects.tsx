"use client";

import { Fragment } from "react";
import { useSanityQuery } from "@/hooks";
import { FilterTab } from "./filter_tab";
import { Hero } from "./hero";
import { ProjectsListing } from "./projects_listing";
import { ProjectsPageData } from "@/types/pages";
import { projectPage } from "@/query";

export const Projects = () => {
  const { data: projectsData, loading } =
    useSanityQuery<ProjectsPageData>(projectPage);

  if (loading) {
    return (
      <main className="relative bg-[#000319] flex justify-center items-center flex-col mx-auto sm:px-10 px-5">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </main>
    );
  }

  return (
    <main className="relative bg-[#000319] flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-hidden">
      <div className="max-w-7xl w-full">
        {projectsData?.sections.map((section, index) => {
          switch (section._type) {
            case "project_hero_section":
              return <Hero key={index} data={section} />;
            case "project_listing_section":
              return (
                <Fragment key={index}>
                  <FilterTab data={section} />
                  <ProjectsListing data={section} />
                </Fragment>
              )
            default:
              return null;
          }
        })}
      </div>
    </main>
  );
};
