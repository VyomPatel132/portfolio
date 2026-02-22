import { defineField, defineType } from "sanity";

export const footerBanner = defineType({
  name: "footer_banner",
  title: "Footer Banner",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "banner_title",
      title: "Banner Title",
      type: "string",
    }),
  ],
});
