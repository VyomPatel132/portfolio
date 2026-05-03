"use client";

import React from "react";
import { Hero, Philosophy, TechStack } from "@/components/about";
import { useSanityQuery } from "@/hooks";
import { aboutPage } from "@/query";
import { AboutHeroSections, AboutPageData } from "@/types/pages";

export const AboutContainer = () => {
  const { data: aboutData, loading } = useSanityQuery<AboutPageData>(aboutPage);

  if (loading) {
    return (
      <main className="relative bg-[#000319] flex justify-center items-center flex-col mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">Loading About Page...</div>
      </main>
    );
  }

  if (!aboutData) {
    return (
      <main className="relative bg-[#000319] flex justify-center items-center flex-col mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">About data not found.</div>
      </main>
    );
  }

  return (
    <main className="relative bg-[#000319] flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        {aboutData?.sections.map((section: AboutHeroSections, index) => {
          switch (section._type) {
            case "about_hero_section":
              return <Hero key={index} data={section} />;
            case "about_experinced_tech_section":
              return <TechStack key={index} data={section} />;
            default:
              return null;
          }
        })}
        <Philosophy />
      </div>

      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30">
        <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-purple-600 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[5%] w-72 h-72 bg-blue-600 rounded-full blur-[120px]" />
      </div>
    </main>
  );
};
