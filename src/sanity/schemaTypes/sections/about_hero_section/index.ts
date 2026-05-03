import { defineField, defineType } from "sanity";

export const aboutHero = defineType({
  name: "about_hero_section",
  title: "About Hero Section",
  type: "object",
  fields: [
    defineField({
      name: "badge",
      title: "Small Badge Text",
      type: "string",
      description: "e.g., 'Building the future of the web'",
    }),
    defineField({
      name: "name",
      title: "Display Name",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "profile_image",
      title: "Profile Image",
      type: "custom_image",
    }),
    defineField({
      name: "stats",
      title: "Quick Stats",
      type: "array",
      of: [
        {
          type: "object",
          name: "stat",
          fields: [
            {
              name: "value",
              title: "Value",
              type: "string",
              description: "e.g. 2.8+",
            },
            {
              name: "label",
              title: "Label",
              type: "string",
              description: "e.g. YEARS EXPERIENCE",
            },
          ],
          preview: {
            select: {
              title: "label",
              subtitle: "value",
            },
          },
        },
      ],
    }),
  ],
});
