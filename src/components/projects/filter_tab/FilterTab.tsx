import { ShimmerButton } from "@/components/ui";
import { categories } from "@/data";
import { cn } from "@/utils/cn";
import React from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoChevronDown } from "react-icons/io5";

export const FilterTab = () => {
  return (
    <section className="relative z-20 w-full px-4 py-8 md:py-14">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Search Bar */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-3xl group">
            <HiMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-purple-400 transition-colors w-5 h-5 z-10" />
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full bg-[#000319]/50 backdrop-blur-xl border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-purple-500/50 transition-all"
            />
          </div>
        </div>

        {/* Filters & Sorting Container */}
        <div className="flex flex-col gap-8">
          {/* Categories: Centered on mobile, left-aligned on desktop */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                className={cn(
                  "px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 border cursor-pointer",
                  category.id === 0
                    ? "bg-linear-to-r from-cyan-100 to-purple-500 text-white shadow-lg shadow-purple-500/20"
                    : "bg-[#000319]/70 backdrop-blur-md border border-white/10 text-zinc-400",
                )}
              >
                {category.title}
              </button>
            ))}
          </div>

          {/* Bottom Bar: Stats and Sort */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/5">
            <p className="text-sm text-zinc-500">
              Showing <span className="text-white font-semibold">5</span>{" "}
              projects
            </p>

            <div className="w-full sm:w-auto">
              <ShimmerButton
                title="Newest First"
                icon={<IoChevronDown className="text-xs" />}
                position="right"
                otherClasses="w-full sm:w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
