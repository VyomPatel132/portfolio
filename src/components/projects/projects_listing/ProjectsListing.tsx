"use client";

import { CardItem } from "@/components/common";
import { CardBody, CardContainer, MagicButton } from "@/components/ui";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { FaLocationArrow } from "react-icons/fa6";

const colors = ["blue", "purple", "green", "orange", "pink", "cyan"];
const randomColor = colors[Math.floor(Math.random() * colors.length)];

export const ProjectsListing = ({ data }: { data: ProjectListingSectionData }) => {
  const router = useRouter();

  return (
    <div className="py-2 pb-48">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8 mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {data.project_listing.map((project, index) => (
          <div key={index} className="group">
            <CardContainer className="inter-var h-full">
              <CardBody className="bg-[#000319]/70 backdrop-blur-md relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/10 border border-white/15 w-full h-full rounded-3xl p-5 sm:p-6 transition-all duration-300">
                <CardItem
                  translateZ="50"
                  as="p"
                  className={cn(
                    "flex items-center justify-between mb-4 px-3 py-1 text-xs font-medium rounded-full",
                    `bg-${randomColor}-500/20`,
                    `text-${randomColor}-400`,
                    `border border-${randomColor}-500/30`,
                  )}
                >
                  {project.category || "Project"}
                </CardItem>

                <CardItem
                  translateZ="60"
                  rotateX="10"
                  rotateY="-10"
                  className="w-full h-56 sm:h-64 lg:h-72 overflow-hidden rounded-2xl mb-6 relative"
                >
                  <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/40 to-black/80 z-10" />
                  <div className="relative w-full h-full bg-[#0f1629] rounded-2xl overflow-hidden">
                    <Image
                      src="/bg.png"
                      alt="bg"
                      fill
                      className="object-cover opacity-40"
                    />
                    <Image
                      src={project.project_image.image}
                      alt={project.project_image.alt || project.project_title}
                      fill
                      className="object-contain object-bottom z-20 p-4 transition-transform duration-500 group-hover/card:scale-105"
                    />
                  </div>
                </CardItem>

                <CardItem
                  translateZ="40"
                  as="h2"
                  className="text-xl md:text-2xl font-bold text-white mb-2 line-clamp-1 cursor-pointer"
                  onClick={() => router.push(`/projects/${project.slug}`)}
                >
                  {project.project_title}
                </CardItem>

                <CardItem
                  translateZ="30"
                  as="p"
                  className="text-sm md:text-base text-gray-300 line-clamp-2 mb-6"
                >
                  {project.project_description}
                </CardItem>

                <div className="flex items-center justify-between mt-auto">
                  <CardItem translateZ="20" className="flex items-center">
                    {project.tech_stack.map((tech, idx) => (
                      <div
                        key={tech.name}
                        className="border border-white/20 rounded-full bg-white lg:w-10 lg:h-10 w-9 h-9 flex justify-center items-center -ml-3 first:ml-0 shadow-md"
                        style={{ zIndex: project.tech_stack.length - idx }}
                      >
                        <Image
                          src={tech.logo.logo}
                          alt={tech.logo.alt || tech.name}
                          width={30}
                          height={30}
                          className="p-1.5"
                        />
                      </div>
                    ))}
                  </CardItem>

                  <button
                    onClick={() => router.push(`${project.project_image.link}`)}
                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors cursor-pointer"
                  >
                    <p className="text-sm md:text-base font-medium">
                      Check Live Site
                    </p>
                    <FaLocationArrow className="text-sm" />
                  </button>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        ))}
      </div>

      {/* <div className="flex items-center justify-center mt-10 mb-36">
        <MagicButton
          title="Load More"
          icon={<IoIosArrowDown />}
          position="right"
        />
      </div> */}
    </div>
  );
};
