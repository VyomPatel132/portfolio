import { modes } from "@/lib";
import { defineField, defineType } from "sanity";

export const titleBlog = defineType({
  name: "title_blog",
  title: "Blog",
  type: "object",
  fields: [
    defineField({
      name: "image",
      title: "Image",
      type: "custom_image",
    }),
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
    defineField({
      name: "section_theme",
      title: "Section Theme",
      type: "string",
      initialValue: "bg-white",
      options: { list: modes, direction: "horizontal", layout: "radio" },
    }),
  ],
  preview: {
    prepare: () => {
      return {
        title: "Blog",
      };
    },
  },
});
