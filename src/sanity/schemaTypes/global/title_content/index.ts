import { defineField, defineType } from "sanity";

export const titleContent = defineType({
  name: "title_content",
  title: "Title Content",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "rich_text",
    }),
  ],
  preview: {
    prepare: () => {
      return {
        title: "Title Content",
      };
    },
  },
});
