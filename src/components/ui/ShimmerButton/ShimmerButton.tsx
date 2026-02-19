import { cn } from "@/utils/cn";
import React from "react";

export const ShimmerButton: React.FC<ShimmerButtonProps> = (props) => {
  const { title, icon, handleClick, otherClasses, position } = props;

  return (
    <button
      onClick={handleClick}
      className={cn(
        "relative inline-flex h-12 overflow-hidden rounded-xl p-px focus:outline-none",
        otherClasses,
      )}
    >
      <span className="absolute inset-[-1000%] animate-[shimmer_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#1e2631_0%,#dcacfa_50%,#1e2631_100%)]" />
      <span
        className={cn(
          "inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 px-7 py-1 text-sm font-medium text-white backdrop-blur-3xl gap-2",
          otherClasses,
        )}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};
