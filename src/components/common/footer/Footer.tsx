import React from "react";
import { MagicButton } from "@/components/ui";
import { socialMedia } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";
import { useSanityQuery } from "@/hooks";
import { footer_query } from "@/query";
import { FooterData } from "@/types/header";
import { urlFor } from "@/sanity/lib/image";

export const Footer = () => {
  const { data: footerData, loading } =
    useSanityQuery<FooterData>(footer_query);
  const heading = footerData?.footer_banner.heading;
  const highlighted_word = footerData?.footer_banner.highlighted_word;
  const heading_parts = heading?.split(highlighted_word || "") || [];

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
          {heading_parts[0]}{" "}
          <span className="text-purple-300">{highlighted_word}</span>{" "}
          {heading_parts[1]}
        </h1>
        <p className="text-[#c1c2d3] md:mt-10 my-5 text-center">
          {footerData?.footer_banner.subtitle}
        </p>
        {footerData?.footer_banner.button_link && (
          <Link href={footerData?.footer_banner.button_link}>
            <MagicButton
              title={footerData?.footer_banner.button_text || ""}
              icon={<FaLocationArrow />}
              position="right"
            />
          </Link>
        )}
      </div>

      <div className="flex mt-16 p-5 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          {footerData?.copyright_text || "© 2024 Vyom. All rights reserved."}
        </p>

        <div className="flex items-center md:gap-3 gap-6 mt-6">
          {footerData?.social_links.map((profile, index) => (
            <Link
              key={index}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-150 bg-opacity-75 bg-[#000319] rounded-lg border border-[#ffffff20]"
              href={profile.url}
            >
              <Image
                src={urlFor(profile.icon).url()}
                alt={profile.platform}
                width={20}
                height={20}
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};
