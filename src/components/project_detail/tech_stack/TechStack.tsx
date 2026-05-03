import React from "react";
import { IoRocket } from "react-icons/io5";

export const TechStack = ({ techStack }: { techStack: TechStack[] }) => {
  return (
    <div className="rounded-xl border border-white/8 bg-white/2 backdrop-blur-md p-6">
      <div className="flex items-center gap-2 mb-4">
        <IoRocket className="text-purple-400 text-lg" />
        <h3 className="text-base font-semibold text-white">Tech Stack</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <span
            key={tech.name}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300"
          >
            {tech.name}
          </span>
        ))}
      </div>
    </div>
  );
};
