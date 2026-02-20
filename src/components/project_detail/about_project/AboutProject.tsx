import React from "react";

export const AboutProject = ({ about }: { about: string[] }) => {
  return (
    <section>
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
        About This Project
      </h2>
      <div className="space-y-5">
        {about.map((paragraph, i) => (
          <p key={i} className="text-gray-400 text-base leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
};
