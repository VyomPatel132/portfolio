import { groq } from "next-sanity";
import { home_grid_section, home_hero_section } from "./sections";

const homePage = groq`*[_type == 'home'][0]{
  _type,
  title,
  "slug": slug.current,
  "sections": section[]{
    (_type == "home_hero_section") => {
      ${home_hero_section}
    },
    (_type == "home_grid_section") => {
      ${home_grid_section}
    }
  }
}`;

export { homePage };
