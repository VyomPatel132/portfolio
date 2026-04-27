import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui";

export const Grid = ({ data }: { data: HomeGridSectionData }) => {
  return (
    <section id="about">
      <BentoGrid>
        {data.grid_items.map((item, index) => (
          <BentoGridItem key={index} {...item} />
        ))}
      </BentoGrid>
    </section>
  );
};
