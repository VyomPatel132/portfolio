import { defineField, defineType } from "sanity";

export const projectDetail = defineType({
  name: "project_detail",
  title: "Project Detail",
  type: "document",
  fields: [
    defineField({
      name: "project_title",
      title: "Project Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "project_title",
        maxLength: 96,
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 96),
      },
    }),
    defineField({
      name: "project_description",
      title: "Project Description",
      type: "text",
      rows: 5,
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
    }),
    defineField({
      name: "year",
      title: "Year",
      type: "string",
    }),
    defineField({
      name: "project_image",
      title: "Project Preview Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "live_link",
      title: "Live Url",
      type: "url",
    }),
    defineField({
      name: "source_code_url",
      title: "Source Code Url",
      type: "url",
    }),
    defineField({
      name: "about_project",
      title: "About Project",
      type: "array",
      of: [{ type: "block" }],
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
    defineField({
      name: "project_status",
      title: "Project Status",
      type: "string",
      options: {
        list: [
          { title: "Completed", value: "completed" },
          { title: "In Progress", value: "in_progress" },
          { title: "Planned", value: "planned" },
        ],
      },
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
    }),
    defineField({
      name: "key_features",
      title: "Key Features",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "challenges_solutions",
      title: "Challenges and Solutions",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "challenge",
              title: "Challenge",
              type: "text",
              rows: 3,
            }),
            defineField({
              name: "solution",
              title: "Solution",
              type: "text",
              rows: 3,
            }),
          ],
        },
      ],
    }),
  ],
});
