import React from "react";
import { CanvasRevealEffect } from "@/components/ui";
import { AceternityIcon, Card } from "@/components/custom";

export const Approach = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading">
        My <span className="text-purple-300">approach</span>
      </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-4">
        <Card
          title="Discovery & Strategy"
          icon={<AceternityIcon order="phase 1" />}
          description="We start by understanding your business goals, target audience, and product vision. I define the technical approach, architecture, and roadmap to ensure clarity before development begins."
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card
          title="Design & Development"
          icon={<AceternityIcon order="phase 2" />}
          description="I translate strategy into scalable, maintainable code. From building reusable components to implementing responsive and accessible UI, every detail is crafted for performance and usability."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
        </Card>
        <Card
          title="Testing, Optimization & Launch"
          icon={<AceternityIcon order="phase 3" />}
          description="Before launch, I rigorously test across devices and browsers, optimize performance, and ensure production readiness. After deployment, I remain available for iterations and continuous improvement."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
};
