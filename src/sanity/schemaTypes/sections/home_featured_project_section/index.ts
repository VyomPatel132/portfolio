import { defineField, defineType } from "sanity";

export const featuredProject = defineType({
  name: "home_featured_project_section",
  title: "Home Featured Project Section",
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
      name: "featured_projects",
      title: "Featured Projects",
      type: "array",
      of: [{ type: "reference", to: [{ type: "project_detail" }] }],
    }),
  ],
});
