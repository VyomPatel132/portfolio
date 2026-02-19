import Link from "next/link";
import React from "react";
import { MagicButton, TextGenerateEffect } from "../ui";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; // Recommended icons
import { cn } from "@/utils/cn";
import { OverlayCard } from "../custom";

export const ProjectDetail = () => {
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col">
            <div className="flex items-center gap-4 mb-8">
              <span className="px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-purple-300 border border-purple-500/40 bg-purple-500/10 rounded-lg">
                Web Tool
              </span>
              <div className="h-px w-8 bg-gray-700" />
              <span className="text-xs text-gray-500 font-mono">EST. 2024</span>
            </div>

            <div className="text-left mb-6">
              <TextGenerateEffect
                words="Portfolio Website Builder"
                className="text-[40px] md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]"
              />
            </div>

            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-12 max-w-xl">
              Empowering creators with a no-code ecosystem. Build
              high-performance, visually stunning portfolios using drag-and-drop
              mechanics and pre-built motion components.
            </p>

            <div className="flex flex-wrap gap-6 mt-4">
              <Link href="#" className="w-full sm:w-auto">
                <MagicButton
                  title="View Live Demo"
                  icon={<FaExternalLinkAlt />}
                  position="right"
                  otherClasses="!bg-[#161a31]"
                />
              </Link>
              <Link href="#" className="w-full sm:w-auto">
                <MagicButton
                  title="Source Code"
                  icon={<FaGithub />}
                  position="left"
                />
              </Link>
            </div>
          </div>

          <OverlayCard />
        </div>
      </div>
    </main>
  );
};
