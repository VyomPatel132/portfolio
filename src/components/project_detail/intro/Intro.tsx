import { OverlayCard } from "@/components/custom";
import { MagicButton, TextGenerateEffect } from "@/components/ui";
import { ProjectDetailPageData } from "@/types/pages";
import Link from "next/link";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

export const Intro = ({ introData }: { introData: ProjectDetailPageData }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className="flex flex-col">
        <div className="flex items-center gap-4 mb-8">
          <span className="px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-purple-300 border border-purple-500/40 bg-purple-500/10 rounded-lg">
            {introData.category}
          </span>
          {/* <div className="h-px w-8 bg-gray-700" /> */}
          {/* <span className="text-xs text-gray-500 font-mono">EST. 2024</span> */}
        </div>

        <div className="text-left mb-6">
          <TextGenerateEffect
            words={introData.project_title}
            className="text-[40px] md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]"
          />
        </div>

        <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-12 max-w-xl">
          {introData.project_description}
        </p>

        <div className="flex flex-wrap gap-6 mt-4">
          {introData.live_link && (
            <Link href={introData.live_link} className="w-full sm:w-auto">
              <MagicButton
                title="View Live Demo"
                icon={<FaExternalLinkAlt />}
                position="right"
                otherClasses="!bg-[#161a31]"
              />
            </Link>
          )}
          {introData.source_code_url && (
            <Link href={introData.source_code_url} className="w-full sm:w-auto">
              <MagicButton
                title="Source Code"
                icon={<FaGithub />}
                position="left"
              />
            </Link>
          )}
        </div>
      </div>

      <OverlayCard image={introData.image} />
    </div>
  );
};
