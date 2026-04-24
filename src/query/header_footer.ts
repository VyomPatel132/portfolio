import { groq } from "next-sanity";

const header_query = groq`*[_type == 'header']{
  title,
  nav_links
}[0]`;

export { header_query };