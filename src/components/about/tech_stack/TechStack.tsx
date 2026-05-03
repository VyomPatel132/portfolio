import { Button } from "@/components/ui";
import Image from "next/image";
import React from "react";

export const TechStack = ({
  data,
}: {
  data: AboutExperincedTechSectionData;
}) => {
  if (!data || !data.tech_stack) return null;

  return (
    <section className="py-12">
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center">
        {data.title_prefix}{" "}
        <span className="text-purple-400">{data.title_highlight}</span>
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {data.tech_stack.map((tech: any, i: number) => (
          <Button
            key={i}
            borderRadius="1rem"
            className="flex gap-3 text-white border-neutral-200 dark:border-slate-800 items-start"
            duration={Math.floor(Math.random() * 10000) + 10000}
          >
            <div className="flex flex-row items-center justify-start gap-5 w-full">
              <div className="shrink-0 w-12 h-12 rounded-full bg-white flex justify-center items-center shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                {tech.logo && (
                  <Image
                    src={tech.logo}
                    alt={tech.name || "tech icon"}
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                )}
              </div>

              <div className="flex flex-col items-start">
                <span className="text-lg md:text-xl font-bold text-white tracking-tight">
                  {tech.name}
                </span>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </section>
  );
};
