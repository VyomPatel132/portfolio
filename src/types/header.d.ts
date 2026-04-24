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
