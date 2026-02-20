import React from "react";

export const ChallengesSolution = ({
  challenges,
}: {
  challenges: any[];
}) => {
  return (
    <section>
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
        Challenges &amp; Solutions
      </h2>
      <div className="space-y-6">
        {challenges.map((item, i) => (
          <div
            key={i}
            className="rounded-xl border border-white/8 bg-white/2 p-6"
          >
            <h3 className="text-base font-semibold text-red-400 mb-2">
              Challenge
            </h3>
            <p className="text-sm text-gray-400 mb-4">{item.challenge}</p>
            <h3 className="text-base font-semibold text-emerald-400 mb-2">
              Solution
            </h3>
            <p className="text-sm text-gray-400">{item.solution}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
