export interface NavLink {
  _type: string;
  label: string;
  link: string;
  icon: any;
}

export interface HeaderData {
  title: string;
  nav_links: NavLink[];
}

export interface SocialLink {
  _type: string;
  platform: string;
  url: string;
  icon: any;
}

export interface FooterData {
  copyright_text: string;
  title: string;
  social_links: SocialLink[];
  footer_banner: {
    _type: string;
    button_link: string;
    button_text: string;
    heading: string;
    highlighted_word: string;
    subtitle: string;
  }
}
