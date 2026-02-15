import React from "react";
import { cn } from "@/utils/cn";
import {
  ContainerTextFlip,
  MagicButton,
  Spotlight,
  TextGenerateEffect,
} from "@/components/ui";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";
import { roleItems } from "@/data";

export const Hero = () => {
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
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,rgba(228,228,231,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(228,228,231,0.03)_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]",
          )}
        />

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-[#000319]" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js
          </h2>

          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi, I&apos;m Vyom Patel, a
            <ContainerTextFlip words={roleItems} />
            based in India
          </p>

          <div className="flex gap-6">
            <Link href="#about">
              <MagicButton
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </Link>
            <Link href="mailto:vyomp59@gmail.com">
              <MagicButton title="Get in touch" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
