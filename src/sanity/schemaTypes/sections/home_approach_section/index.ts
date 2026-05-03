import { defineField, defineType } from "sanity";

export const homeApproachSection = defineType({
  name: "home_approach_section",
  title: "Home Approach Section",
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
      name: "phases",
      title: "Phases",
      type: "array",
      of: [{ type: "phases" }],
    }),
  ],
});
