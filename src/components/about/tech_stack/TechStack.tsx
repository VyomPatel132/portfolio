import React from "react";

export const TechStack = ({ data }: { data: any }) => {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">
        My <span className="text-purple-400">Tech Stack</span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {data.skills.map((skill: string, i: number) => (
          <div
            key={i}
            className="bg-[#10132E] border border-white/10 rounded-xl p-6 text-center text-white 
                           hover:border-purple-500/50 hover:bg-[#161a3d] transition-all duration-300 group"
          >
            <span className="group-hover:text-purple-400 transition-colors font-medium">
              {skill}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
