import { groq } from "next-sanity";
import { home_approach_section, home_experience_section, home_featured_project_section, home_grid_section, home_hero_section, project_hero_section } from "./sections";

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
    },
    (_type == "home_featured_project_section") => {
      ${home_featured_project_section}
    },
    (_type == "home_experience_section") => {
      ${home_experience_section}
    },
    (_type == "home_approach_section") => {
      ${home_approach_section}
    }
  }
}`;

const projectPage = groq`*[_type == 'project_page'][0]{
  _type,
  title,
  "slug": slug.current,
  "sections": section[]{
    (_type == "project_hero_section") => {
      ${project_hero_section}
    }
  }
}`;

export { homePage, projectPage };
