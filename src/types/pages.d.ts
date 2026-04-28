type HomeSections = HomeHeroSectionData | HomeGridSectionData;
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
