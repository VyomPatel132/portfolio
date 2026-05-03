import { defineField, defineType } from "sanity";

export const seo = defineType({
  name: "seo",
  title: "SEO",
  type: "object",
  fields: [
    defineField({
      name: "meta_title",
      title: "Meta Title",
      type: "string",
    }),
    defineField({
      name: "meta_description",
      title: "Meta Description",
      type: "string",
    }),
    defineField({
      name: "meta_image",
      title: "Meta Image",
      type: "custom_image",
    }),
    defineField({
      name: "meta_tags",
      title: "Meta Tags",
      type: "array",
      of: [{ type: "meta_tag" }],
    }),
    defineField({
      name: "open_graph",
      title: "Open Graph",
      type: "open_graph",
    }),
  ],
});
