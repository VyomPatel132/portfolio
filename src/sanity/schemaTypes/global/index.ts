import { button } from "./button";
import { customImage } from "./custom_image";
import { labelLink } from "./label_link";
import { richText } from "./rich_text";
import { seo } from "./seo";
import { metaAttribute } from "./seo/meta_attribute";
import { metaTag } from "./seo/meta_tag";
import { openGraph } from "./seo/open_graph";
import { title } from "./title";
import { titleContent } from "./title_content";

export const globalTypes = [
  customImage,
  labelLink,
  button,
  richText,
  titleContent,
  title,
  seo,
  metaTag,
  openGraph,
  metaAttribute
];
