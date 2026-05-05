'use client';

import { MagicButton, PinContainer } from "@/components/ui";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { FaLocationArrow } from "react-icons/fa6";

export const RecentProjects = ({ data }: { data: HomeFeaturedProjectSectionData }) => {
  const router = useRouter();

  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        {data.title_prefix}{" "}
        <span className="text-purple-300">{data.title_highlight}</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {data.featured_projects.map((project, index) => (
          <div
            key={index}
            className="sm:h-164 lg:min-h-130 h-128 flex items-center justify-center sm:w-142.5 w-[80vw]"
          >
            <PinContainer href={project.live_link} title={project.project_title}>
              <div className="relative flex items-center justify-center sm:w-142.5 w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <Image src="/bg.png" alt="background" width={1920} height={1080} />
                </div>
                <Image
                  src={project.image}
                  alt={project.project_title}
                  width={500}
                  height={500}
                  className="z-10 absolute bottom-0"
                />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {project.project_title}
              </h1>
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                {project.project_description}
              </p>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {project.tech_stack.map((tech, index) => (
                    <div
                      key={tech.name}
                      className="border border-white/20 rounded-full bg-white lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{ transform: `translateX(-${5 * index * 2}px)` }}
                    >
                      <Image
                        src={tech.logo}
                        alt={tech.name}
                        width={50}
                        height={50}
                        className="p-2"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center">
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple-300">Check Live Site</p>
                    <FaLocationArrow className="ms-3" color="#cbacf9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mt-10">
        <MagicButton
          title="View All Projects"
          icon={<FaLocationArrow />}
          position="right"
          handleClick={() => router.push("/projects")}
        />
      </div>
    </div>
  );
};
