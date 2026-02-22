import { defineField, defineType } from "sanity";

export const openGraph = defineType({
  name: "open_graph",
  title: "Open Graph",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "custom_image",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
  ],
});
