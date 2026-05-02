'use client';

import React from "react";
import { Hero } from "./hero";
import { Grid } from "../custom";
import { RecentProjects } from "./recent_projects";
import { Testimonial } from "./testimonial";
import { Experiences } from "./experiences";
import { Approach } from "./approach";
import { useSanityQuery } from "@/hooks";
import { homePage } from "@/query";
import { HomePageData, HomeSections } from "@/types/pages";
import { HeroSectionSkeleton } from "../common";

export const Home = () => {
  const { data: homeData, loading } = useSanityQuery<HomePageData>(homePage);

  if (loading) {
    return (
      <main className="relative bg-[#000319] flex justify-center items-center flex-col mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <HeroSectionSkeleton />
        </div>
      </main>
    );
  }

  return (
    <main className="relative bg-[#000319] flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        {homeData?.sections.map((section: HomeSections, index) => {
          switch(section._type) {
            case "home_hero_section":
              return <Hero key={index} data={section} />;
            case "home_grid_section":
              return <Grid key={index} data={section} />;
            case "home_featured_project_section":
              return <RecentProjects key={index} data={section} />;
            case "home_experience_section":
              return <Experiences key={index} data={section} />;
            case "home_approach_section":
              return <Approach key={index} data={section} />;
            default:
              return null;
          }
        })}
        {/* <RecentProjects /> */}
        {/* <Testimonial /> */}
        {/* <Experiences /> */}
        {/* <Approach /> */}
      </div>
    </main>
  );
};
