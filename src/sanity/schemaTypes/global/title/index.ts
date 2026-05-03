import { defineField, defineType } from "sanity";

export const title = defineType({
  name: "title",
  title: "Title",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "sub_title",
      title: "Sub Title",
      type: "string",
    }),
    defineField({
      name: "caption",
      title: "Caption",
      type: "string",
      description: "The text written here will apear after sub title",
    }),
  ],
});
