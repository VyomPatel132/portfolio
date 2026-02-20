import React from "react";
import Link from "next/link";
import { Intro } from "./intro";
import { PROJECT_DETAIL } from "@/data";
import { AboutProject } from "./about_project";
import { KeyFeatures } from "./key_features";
import { ChallengesSolution } from "./challenges_solutions";
import { TechStack } from "./tech_stack";
import { ProjectInfo } from "./project_info";
import { ShareProject } from "./share_project";

const featureColors = [
  "text-emerald-400",
  "text-emerald-400",
  "text-emerald-400",
  "text-emerald-400",
  "text-pink-400",
  "text-pink-400",
  "text-pink-400",
  "text-pink-400",
];

export const ProjectDetail = () => {
  const { about, techStack, info, features, challenges } = PROJECT_DETAIL;

  return (
    <main className="relative min-h-screen bg-[#000319] flex flex-col items-center justify-center overflow-hidden px-6 py-20 md:px-12">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.03] bg-size-[50px_50px] pointer-events-none" />
      <div className="absolute inset-0 flex items-center justify-center bg-[#000319] mask-[radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none" />
      <div className="absolute top-[-10%] left-[-10%] w-125 h-125 bg-purple-500/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[-10%] left-[80%] w-125 h-125 bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl w-full">
        <div className="mb-10 lg:mb-16">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-sm font-medium text-gray-400 transition-all hover:text-purple-400"
          >
            <span className="transition-transform group-hover:-translate-x-2">
              ←
            </span>
            Back to Projects
          </Link>
        </div>

        <Intro />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10 mt-16 lg:mt-20">
          {/* Main Content */}
          <div className="space-y-14">
            <AboutProject about={about} />
            <KeyFeatures features={features} featureColors={featureColors} />
            <ChallengesSolution challenges={challenges} />
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-24 lg:self-start space-y-6">
            <TechStack techStack={techStack} />
            <ProjectInfo info={info} />
            <ShareProject />
          </aside>
        </div>
      </div>
    </main>
  );
};
