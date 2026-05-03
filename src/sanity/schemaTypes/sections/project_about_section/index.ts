import { defineField, defineType } from "sanity";

export const projectAbout = defineType({
  name: "project_about_section",
  title: "Project About Section",
  type: "object",
  fields: [
    defineField({
      name: "about",
      title: "About This Project",
      type: "array",
      of: [{ type: "block" }],
      description: "Rich text paragraphs for the About section",
    }),
  ],
});
