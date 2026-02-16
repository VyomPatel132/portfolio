import { cn } from "@/utils/cn";
import React from "react";

export const MagicButton: React.FC<MagicButtonProps> = (props) => {
  const {
    title,
    icon,
    position,
    handleClick,
    otherClasses,
    variant = "gradient",
  } = props;

  const showSpin = variant === "gradient";

  const variantClasses =
    variant === "primary"
      ? "bg-gradient-to-r from-cyan-100 to-purple-400 text-black"
      : variant === "outline"
      ? "bg-transparent border-2 border-cyan-400 text-cyan-400"
      : "bg-slate-950 text-white";

  return (
    <button
      className="relative inline-flex h-12 overflow-hidden rounded-lg p-px focus:outline-none md:w-60 md:mt-10"
      onClick={handleClick}
    >
      {showSpin && (
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      )}
      <span
        className={cn(
          "inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg px-7 text-sm font-medium backdrop-blur-3xl gap-2",
          variantClasses,
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
