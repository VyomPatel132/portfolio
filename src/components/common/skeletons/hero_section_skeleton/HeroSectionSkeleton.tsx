import React from "react";

export const HeroSectionSkeleton = () => {
  return (
    <div className="pb-20 pt-36 relative overflow-hidden">
      <div className="opacity-20 pointer-events-none">
        <div className="absolute -top-40 -left-10 md:-left-32 md:-top-20 h-screen w-full bg-white/10 blur-[100px] rounded-full" />
        <div className="absolute top-10 left-full h-[80vh] w-[50vw] bg-purple-500/10 blur-[100px] rounded-full" />
        <div className="absolute top-28 left-80 h-[80vh] w-[50vw] bg-blue-500/10 blur-[100px] rounded-full" />
      </div>

      <div className="absolute flex h-screen w-full items-center justify-center bg-white dark:bg-[#000319] top-0 left-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[40px_40px]" />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white mask-[radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-[#000319]" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <div className="h-4 w-48 bg-gray-800 rounded-full animate-pulse mb-6" />

          <div className="flex flex-col items-center gap-3 mb-8 w-full">
            <div className="h-10 md:h-12 lg:h-14 w-full bg-gray-800 rounded-xl animate-pulse" />
            <div className="h-10 md:h-12 lg:h-14 w-3/4 bg-purple-900/20 rounded-xl animate-pulse" />
          </div>

          <div className="flex flex-col items-center gap-2 mb-10 w-full max-w-lg">
            <div className="h-4 w-full bg-gray-800/60 rounded-md animate-pulse" />
            <div className="h-4 w-5/6 bg-gray-800/60 rounded-md animate-pulse" />
          </div>

          <div className="flex gap-6">
            <div className="h-12 w-40 bg-purple-600/20 border border-purple-500/10 rounded-lg animate-pulse" />
            <div className="h-12 w-40 bg-gray-800 rounded-lg animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};
