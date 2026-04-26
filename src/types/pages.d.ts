type HomeSections = HomeHeroSectionData;

export type HomePageData = {
  _type: string;
  title: string;
  slug: string;
  sections: HomeSections[];
};
