import { groq } from "next-sanity";
import { home_approach_section, home_experience_section, home_featured_project_section, home_grid_section, home_hero_section, project_hero_section, project_listing_section } from "./sections";

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
    },
    (_type == "project_listing_section") => {
      ${project_listing_section}
    }
  }
}`;

const projectDetailPage = groq`*[_type == 'project_detail' && slug.current == $slug][0]{
_type,
category,
project_title,
project_description,
"image": project_image.asset->url,
live_link,
source_code_url,
about_project,
tech_stack[] {
  name,
  "logo": logo.asset->url
},
project_status,
role,
key_features[],
challenges_solutions[]{
  challenge,
  solution,
},
}`;

export { homePage, projectPage, projectDetailPage };
