import { Hero, Philosophy, TechStack } from "@/components/about";
import Image from "next/image";
import React from "react";

const mockAboutData = {
  name: "Vyom Patel",
  title: "Frontend & Full-Stack Developer",
  profileImage: "/image_4f1003.jpg",
  bio: "With over 2.8 years of professional experience, I specialize in building scalable, high-performance web applications using the MERN stack and Next.js. I bridge the gap between complex design and functional, high-performance code.",
  skills: [
    "Next.js 15",
    "React.js",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "Tailwind CSS",
    "Sanity.io",
    "Figma to Code",
  ],
  stats: [
    { label: "Years Experience", value: "2.8+" },
    { label: "Projects Completed", value: "15+" },
    { label: "Design Tools", value: "Figma/XD" },
  ],
};

export const AboutContainer = () => {
  return (
    <main className="relative bg-[#000319] flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <Hero data={mockAboutData} />
        <TechStack data={mockAboutData} />
        <Philosophy />
      </div>

      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30">
        <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-purple-600 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[5%] w-72 h-72 bg-blue-600 rounded-full blur-[120px]" />
      </div>
    </main>
  );
};
