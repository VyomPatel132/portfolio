import React from "react";
import { CanvasRevealEffect } from "@/components/ui";
import { AceternityIcon, Card } from "@/components/custom";

export const Approach = ({ data }: { data: HomeApproachSectionData }) => {
  return (
    <section className="w-full py-20">
      <h1 className="heading">
        {data.title_prefix}{" "}
        <span className="text-purple-300">{data.title_highlight}</span>
      </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-4">
        {data.phases.map((phase, index) => (
          <Card
            key={index}
            title={phase.title}
            icon={<AceternityIcon order={phase.order} />}
            description={phase.description}
          >
            {phase.dot_colors ? (
              <CanvasRevealEffect
                animationSpeed={phase.animation_speed}
                containerClassName={phase.container_bg}
                colors={phase.dot_colors.map((color) => [
                  color.r,
                  color.g,
                  color.b,
                ])}
                dotSize={2}
              />
            ) : (
              <CanvasRevealEffect
                animationSpeed={phase.animation_speed}
                containerClassName={phase.container_bg}
              />
            )}
          </Card>
        ))}
      </div>
    </section>
  );
};
