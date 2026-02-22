import { Template } from "sanity";
import { OLD_PAGE_ID_LIST } from "../helper/defaults";

export const getPageId = (new_id: string) => OLD_PAGE_ID_LIST[new_id] ?? new_id;

export const InitialValueTemplates = {
    HEADER: getPageId('header'),
    FOOTER: getPageId('footer'),
    CATEGORIES: getPageId('category'),
    HOME: getPageId('home'),
    SETTING: getPageId("setting"),
    BLOG_DETAIL_SIDE_CONTENT: getPageId("blog_detail_side_content"),
};

export const templateBuilders: Template[] = [
  {
    id: InitialValueTemplates.BLOG_DETAIL_SIDE_CONTENT,
    title: "Blog Detail Side Content",
    schemaType: "blog_detail_side_content",
    value: {
      type: "blog_detail_side_content",
    },
  },
]

export default [...templateBuilders.map((template) => template)]