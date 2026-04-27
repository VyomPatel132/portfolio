type HomeSections = HomeHeroSectionData | HomeGridSectionData;

export type HomePageData = {
  _type: string;
  title: string;
  slug: string;
  sections: HomeSections[];
};
