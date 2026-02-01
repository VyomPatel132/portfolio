import { Button } from "@/components/ui";
import { workExperience } from "@/data";
import Image from "next/image";
import React from "react";

export const Experiences = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        My <span className="text-purple-300">work experiences</span>
      </h1>
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card, index) => (
          <Button
            key={card.id}
            borderRadius="1.75rem"
            className="flex-1 text-white border-neutral-200 dark:border-slate-800"
            duration={Math.floor(Math.random() * 10000) + 10000}
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <Image
                src={card.thumbnail}
                alt={card.title}
                width={200}
                height={200}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">{card.title}</h1>
                <p className="text-start text-[#bec1dd] mt-3 font-semibold">{card.desc}</p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};
