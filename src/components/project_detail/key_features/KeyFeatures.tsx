import React from "react";
import { Button } from "@/components/ui";
import { HiCheckCircle } from "react-icons/hi2";

export const KeyFeatures = ({
  features,
  featureColors,
}: {
  features: string[];
  featureColors: string[];
}) => {
  return (
    <section>
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
        Key Features
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.map((feature, i) => (
          <Button
            key={i}
            borderRadius="0.75rem"
            className="flex gap-3 text-white border-neutral-200 dark:border-slate-800 items-start"
            duration={Math.floor(Math.random() * 10000) + 10000}
            as="div"
            variant="grid"
            colSpan={1}
          >
            <div className="flex gap-4 px-4 py-4">
              <HiCheckCircle
                className={`mt-1 shrink-0 text-lg ${
                  featureColors[i % featureColors.length]
                }`}
              />
              <span className="text-sm md:text-base text-gray-300 leading-relaxed">
                {feature}
              </span>
            </div>
          </Button>
        ))}
      </div>
    </section>
  );
};
