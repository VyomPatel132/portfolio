import React from "react";
import { cn } from "@/utils/cn";
import { Spotlight, TextGenerateEffect } from "@/components/ui";

interface HeroProps {
  projectCount?: number;
  categoryCount?: number;
  data: ProjectHeroSectionData;
}

export const Hero: React.FC<HeroProps> = (props) => {
  const { projectCount = 0, categoryCount = 0, data } = props;

  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="absolute flex h-screen w-full items-center justify-center bg-white dark:bg-[#000319] top-0 left-0">
        <div
          className={cn(
            "absolute inset-0",
            "bg-size-[40px_40px]",
            "bg-[linear-gradient(to_right,rgba(228,228,231,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(228,228,231,0.03)_1px,transparent_1px)]",
            "dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]",
          )}
        />

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white mask-[radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-[#000319]" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="inline-block rounded-lg border border-purple-500/40 px-3 py-1 text-sm text-purple-300 mb-6">
            {data.badge}
          </h2>

          <p className="text-center md:tracking-wider mb-4 text-[30px] md:text-4xl lg:text-6xl">
            {data.title_prefix}{" "}
            <span className="bg-linear-to-r from-purple-400 via-purple-300 to-cyan-100 bg-clip-text text-transparent">
              {data.title_highlight}
            </span>
          </p>

          <TextGenerateEffect
            words="Explore my collection of web applications, tools, and creative solutions built with modern technologies"
            className="text-center text-[24px]"
          />

          <div className="flex items-center justify-center gap-3 mt-6 text-sm text-zinc-500">
            <span className="text-cyan-400">•</span>
            <span>{projectCount} Projects</span>
            <span className="text-purple-400">•</span>
            <span>{categoryCount} Categories</span>
          </div>
        </div>
      </div>
    </div>
  );
};
