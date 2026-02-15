import React from "react";
import { Hero } from "./hero";
import { Grid } from "../custom";
import { RecentProjects } from "./recent_projects";
import { Testimonial } from "./testimonial";
import { Experiences } from "./experiences";
import { Approach } from "./approach";

export const Home = () => {
  return (
    <main className="relative bg-[#000319] flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <Hero />
        <Grid />
        <RecentProjects />
        <Testimonial />
        <Experiences />
        <Approach />
      </div>
    </main>
  );
};
