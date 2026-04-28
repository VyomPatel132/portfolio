type HomeSections = HomeHeroSectionData | HomeGridSectionData | HomeExperienceSectionData;
type ProjectSections = ProjectHeroSectionData;

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
}
