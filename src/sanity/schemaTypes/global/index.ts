import { button } from "./button";
import { customImage } from "./custom_image";
import { labelLink } from "./label_link";
import { rgbColors } from "./rgb";
import { richText } from "./rich_text";
import { seo } from "./seo";
import { metaAttribute } from "./seo/meta_attribute";
import { metaTag } from "./seo/meta_tag";
import { openGraph } from "./seo/open_graph";
import { title } from "./title";
import { titleContent } from "./title_content";

export const globalTypes = [
  seo,
  title,
  button,
  metaTag,
  richText,
  labelLink,
  openGraph,
  rgbColors,
  customImage,
  titleContent,
  metaAttribute,
];
