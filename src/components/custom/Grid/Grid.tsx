import { BentoGrid, BentoGridItem } from "@/components/ui";
import { gridItems } from "@/data";
import React from "react";

export const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map((item, index) => (
          <BentoGridItem key={index} {...item} />
        ))}
      </BentoGrid>
    </section>
  );
};
