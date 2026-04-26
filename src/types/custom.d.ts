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
