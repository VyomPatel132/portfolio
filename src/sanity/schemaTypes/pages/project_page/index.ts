import { modes } from "@/lib";
import { defineField, defineType } from "sanity";

export const project = defineType({
  name: "project_page",
  title: "Project Page",
  type: "document",
  groups: [
    {
      name: "main",
      title: "Main",
      default: true,
    },
    {
      name: "seo",
      title: "SEO",
    },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "This field is only used for CMS.",
      group: "main",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200,
        slugify: (input: string) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
      group: "main",
    }),
    defineField({
      name: "header",
      title: "Header",
      type: "reference",
      to: [{ type: "header" }],
      group: "main",
    }),
    defineField({
      name: "section",
      title: "Section",
      type: "array",
      of: [{ type: "project_hero_section" }, { type: "project_listing_section" }],
      group: "main",
    }),
    defineField({
      name: "footer",
      title: "Footer",
      type: "reference",
      to: [{ type: "footer" }],
      group: "main",
    }),
    defineField({
      name: "section_theme",
      title: "Section Theme",
      initialValue: "bg-white",
      type: "string",
      group: "main",
      options: { list: modes, direction: "horizontal", layout: "radio" },
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
      group: "seo",
    }),
  ],
});
