import { defineField, defineType } from "sanity";

export const sectionSidebar = defineType({
  name: "section_sidebar",
  title: "Section Sidebar",
  type: "document",
  fields: [
    defineField({
      name: "label",
      type: "string",
      description: "Only used in CMS.",
    }),
    defineField({
      name: "content",
      type: "array",
      of: [{ type: "title_description_side_image_Section" }],
    }),
  ],
});
