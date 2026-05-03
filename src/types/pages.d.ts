type HomeSections =
  | HomeHeroSectionData
  | HomeGridSectionData
  | HomeExperienceSectionData
  | HomeFeaturedProjectSectionData
  | HomeApproachSectionData;
type ProjectSections = ProjectHeroSectionData | ProjectListingSectionData;
type AboutHeroSections = AboutHeroSectionData | AboutExperincedTechSectionData;

export type HomePageData = {
  _type: string;
  title: string;
  slug: string;
  sections: HomeSections[];
};

export type ProjectsPageData = {
  _type: string;
  title: string;
  slug: string;
  sections: ProjectSections[];
};

export type ProjectDetailPageData = {
  _type: string;
  category: string;
  project_title: string;
  project_description: string;
  image: string;
  live_link: string;
  source_code_url: string;
  about_project: string;
  tech_stack: TechStack[];
  project_status: string;
  role: string;
  key_features: string[];
  challenges_solutions: {
    challenge: string;
    solution: string;
  }[];
}

export type AboutPageData = {
  _type: string;
  title: string;
  slug: string;
  sections: AboutHeroSections[];
}
