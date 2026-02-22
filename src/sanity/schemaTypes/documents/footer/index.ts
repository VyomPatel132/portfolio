import { defineField, defineType } from "sanity";

export const footer = defineType({
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "footer_logo",
      title: "Footer Logo",
      type: "custom_image",
    }),
    defineField({
      name: "footer_links",
      title: "Footer Links",
      type: "array",
      of: [{ type: "label_link" }],
    }),
    defineField({
      name: "contact_link",
      title: "Contect Links",
      type: "label_link",
    }),
    defineField({
      name: "copyright_text",
      title: "Copyright Text",
      type: "string",
    }),
    defineField({
      name: "contact_no",
      title: "Contact No",
      type: "string",
    }),
  ],
});
