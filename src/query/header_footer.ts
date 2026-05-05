import { groq } from "next-sanity";

const header_query = groq`*[_type == 'header'][0]{
  title,
  nav_links
}`;

const footer_query = groq`*[_type == 'footer'][0]{
  title,
  copyright_text,
  social_links[]{
    _type,
    platform,
    icon{
      _type,
      alt,
      link,
      "imageUrl": image.asset->url,
    }
  },
  footer_banner,
}`;

export { header_query, footer_query };