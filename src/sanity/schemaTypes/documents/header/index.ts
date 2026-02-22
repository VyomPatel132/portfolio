import { defineField, defineType } from "sanity";

export const header = defineType({
  name: "header",
  title: "Header",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "custom_image",
    }),
    defineField({
      name: "nav_links",
      title: "Nav Links",
      type: "array",
      of: [{ type: "label_link" }],
    }),
    defineField({
      name: "button",
      title: "Button",
      type: "button",
    }),
  ],
});
