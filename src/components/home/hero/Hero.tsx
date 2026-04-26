import React from "react";
import { cn } from "@/utils/cn";
import {
  MagicButton,
  Spotlight,
  TextGenerateEffect,
} from "@/components/ui";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

export const Hero = ({ data }: { data: HomeHeroSectionData }) => {
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
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            {data.tag_line}
          </h2>

          <TextGenerateEffect
            words={`${data.heading_white} ${data.heading_purple}`}
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            {data.hero_description}
          </p>

          <div className="flex gap-6">
            <Link href={data.my_work_button.link || "#about"}>
              <MagicButton
                title={data.my_work_button.label}
                icon={<FaLocationArrow />}
                position="right"
                variant="primary"
              />
            </Link>
            <Link href={data.get_in_touch_button.link || "#contact"}>
              <MagicButton title={data.get_in_touch_button.label} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
