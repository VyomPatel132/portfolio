import React from "react";
import { Hero } from "./hero";
import { Grid } from "../custom";
import { navItems } from "@/data";
import { FloatingNav } from "../ui";
import { RecentProjects } from "./recent_projects";
import { Testimonial } from "./testimonial";
import { Experiences } from "./experiences";
import { Approach } from "./approach";

export const Home = () => {
  return (
    <main className="relative bg-[#000319] flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
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
