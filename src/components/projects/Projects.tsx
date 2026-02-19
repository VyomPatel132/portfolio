import { FilterTab } from "./filter_tab";
import { Hero } from "./hero";
import { ProjectsListing } from "./projects_listing";

export const Projects = () => {
  return (
    <main className="relative bg-[#000319] flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-hidden">
      <div className="max-w-7xl w-full">
        <Hero />
        <FilterTab />
        <ProjectsListing />
      </div>
    </main>
  );
};
