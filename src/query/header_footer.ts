import { groq } from "next-sanity";

const header_query = groq`*[_type == 'header']{
  title,
  nav_links
}[0]`;

const footer_query = groq`*[_type == 'footer'][0]{
  title,
  copyright_text,
  social_links[]{
    ...,
    "imageUrl": icon.asset->url
  },
  footer_banner,
}`;

export { header_query, footer_query };