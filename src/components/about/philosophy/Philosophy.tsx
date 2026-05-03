import React from "react";

export const Philosophy = () => {
  return (
    <section className="mt-24 mb-24 p-8 md:p-12 rounded-3xl bg-linear-to-r from-[#04071d] to-[#0c0e23] border border-white/10">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
          Development Philosophy
        </h2>
        <p className="text-gray-400 leading-relaxed">
          I believe that great software is built at the intersection of rigorous
          logic and intuitive design. Whether it&apos;s optimizing a Next.js
          route or hand-crafting a CSS animation from a Figma file, my goal is
          always the same: to create products that feel as good as they look.
        </p>
      </div>
    </section>
  );
};
