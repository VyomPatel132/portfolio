import { ShimmerButton } from "@/components/ui";
import { categories } from "@/data";
import { cn } from "@/utils/cn";
import React from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoChevronDown } from "react-icons/io5";

export const FilterTab = ({ data }: { data: ProjectListingSectionData }) => {
  return (
    <section className="relative z-20 w-full px-4 py-8 md:py-14">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Search Bar */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-3xl group">
            <HiMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-purple-400 transition-colors w-5 h-5 z-10" />
            <input
              type="text"
              placeholder={data.search_placeholder}
              className="w-full bg-[#000319]/50 backdrop-blur-xl border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-purple-500/50 transition-all"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
