import { InfiniteMovingCards } from "@/components/ui";
import { companies, testimonials } from "@/data";
import Image from "next/image";
import React from "react";

export const Testimonial = () => {
  return (
    <div className="py-20" id="testimonial">
      <h1 className="heading">
        Kinds words from
        <span className="text-purple-300"> satisfied clients</span>
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map((company, index) => (
            <div key={index} className="flex md:max-w-60 max-w-32 gap-2">
              <Image
                src={company.img}
                alt={company.name}
                width={100}
                height={100}
                className="md:w-10 w-5"
              />
              <Image
                src={company.nameImg}
                alt={company.name}
                width={100}
                height={100}
                className="md:w-24 w-20"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
