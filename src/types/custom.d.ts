type AceternityIconProps = {
  order: string;
};

type CardProps = {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  description?: string;
};

type SanityBase = {
  _key?: string;
  _type: string;
};

type ButtonPropsData = SanityBase & {
  label: string;
  link?: string | null;
};

type HomeHeroSectionData = SanityBase & {
  _type: "home_hero_section"; // Literal type for discrimination
  title: string;
  tag_line: string;
  section_theme: string;
  heading_purple: string;
  heading_white: string;
  hero_description: string;
  get_in_touch_button: ButtonPropsData;
  my_work_button: ButtonPropsData;
};

type GridItemVariant =
  | "feature"
  | "tech_stack"
  | "globe"
  | "email_cta"
  | "inside_scoop"
  | "grid_feature";

type GridItem = {
  _type: string;
  title: string;
  description?: string;
  variant?: GridItemVariant;
  tech_list?: string[];
  img?: string;
  spareImg?: string;
  className?: string;
  imgClassName?: string;
  titleClassName?: string;
};

type HomeGridSectionData = SanityBase & {
  _type: "home_grid_section";
  title: string;
  grid_items: GridItem[];
};

type ProjectHeroSectionData = SanityBase & {
  _type: "project_hero_section";
  badge: string;
  description: string;
  title_highlight: string;
  title_prefix: string;
}

type ExperienceItem = {
  _type: string;
  title: string;
  description: string;
  icon: string;
  className?: string;
}

type HomeExperienceSectionData = SanityBase & {
  _type: "home_experience_section";
  title_prefix: string;
  title_highlight: string;
  experiences: ExperienceItem[];
};
