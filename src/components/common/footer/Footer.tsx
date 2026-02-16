import React from "react";
import { MagicButton } from "@/components/ui";
import { socialMedia } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="w-full pb-10 bg-[#000319]">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
          width={100}
          height={100}
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to elevate <span className="text-purple-300">your</span> digital presence?
        </h1>
        <p className="text-[#c1c2d3] md:mt-10 my-5 text-center">
          I&apos;m available for freelance and collaboration opportunities. 
          Let&apos;s discuss how I can help bring your ideas to life.
        </p>
        <Link href="mailto:vyomp59@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </Link>
      </div>

      <div className="flex mt-16 p-5 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2026 Vyom
        </p>

        <div className="flex items-center md:gap-3 gap-6 mt-6">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-150 bg-opacity-75 bg-[#000319] rounded-lg border border-[#ffffff20]"
            >
              <Image
                src={profile.img}
                alt={profile.img}
                width={20}
                height={20}
              />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};
