import { defineField, defineType } from "sanity";

export const experiencedTechSection = defineType({
  name: "about_experinced_tech_section",
  title: "About Experienced Tech Section",
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
      name: "tech_stack",
      title: "Tech Stack",
      type: "array",
      of: [
        {
          type: "object",
          name: "tech",
          fields: [
            defineField({
              name: "name",
              title: "Technology Name",
              type: "string",
            }),
            defineField({
              name: "logo",
              title: "Logo",
              type: "image",
              options: {
                hotspot: true,
              },
            }),
          ],
          preview: {
            select: {
              title: "name",
              media: "logo",
            },
          },
        },
      ],
    }),
  ],
});
