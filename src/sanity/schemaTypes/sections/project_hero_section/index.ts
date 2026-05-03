import { defineField, defineType } from "sanity";

export const projectHero = defineType({
  name: "project_hero_section",
  title: "Project Hero Section",
  type: "object",
  fields: [
    defineField({
      name: 'badge',
      title: 'Top Badge Text',
      type: 'string'
    }),
    defineField({
      name: 'title_prefix',
      title: 'Title (Plain Text)',
      type: 'string'
    }),
    defineField({
      name: 'title_highlight',
      title: 'Title (Highlighted Text)',
      type: 'string'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
  ],
});
