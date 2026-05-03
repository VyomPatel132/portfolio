import { defineField, defineType } from "sanity";

export const experienceSection = defineType({
  name: "home_experience_section",
  title: "Home Experience Section",
  type: "object",
  fields: [
    defineField({
      name: "title_prefix",
      title: "Title Prefix",
      type: "string",
    }),
    defineField({
      name: "title_highlight",
      title: "Title Highlight",
      type: "string",
    }),
    defineField({
      name: "experiences",
      title: "Experiences",
      type: "array",
      of: [{ type: "experience_item" }],
    }),
  ],
});
