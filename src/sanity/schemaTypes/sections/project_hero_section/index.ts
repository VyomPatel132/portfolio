import { defineField, defineType } from "sanity";

export const projectHero = defineType({
  name: "project_hero_section",
  title: "Project Hero Section",
  type: "object",
  groups: [
    {
      name: "hero",
      title: "Hero",
      default: true,
    },
    {
      name: "features",
      title: "Key Features",
    },
    {
      name: "challenges",
      title: "Challenges & Solutions",
    },
  ],
  fields: [
    defineField({
      name: "project_title",
      title: "Project Title",
      type: "string",
      validation: (Rule) => Rule.required(),
      group: "hero",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      validation: (Rule) => Rule.required(),
      description: "e.g. Web Development, Mobile App, etc.",
      group: "hero",
    }),
    defineField({
      name: "established_year",
      title: "Established Year",
      type: "string",
      validation: (Rule) => Rule.required(),
      group: "hero",
    }),
    defineField({
      name: "short_description",
      title: "Short Description",
      type: "text",
      rows: 3,
      group: "hero",
    }),
    defineField({
      name: "preview_image",
      title: "Preview / Showcase Image",
      type: "image",
      options: { hotspot: true },
      group: "hero",
    }),
    defineField({
      name: "live_demo_url",
      title: "Live Demo URL",
      type: "url",
      group: "hero",
    }),
    defineField({
      name: "source_code_url",
      title: "Source Code URL",
      type: "url",
      group: "hero",
    }),
    defineField({
      name: "project_category",
      title: "Project Category",
      type: "string",
      description: "Sidebar label e.g. Data Visualization",
      group: "hero",
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: ["Completed", "In Progress", "Archived"],
        layout: "radio",
      },
      initialValue: "Completed",
      group: "hero",
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
      description: "e.g. Full Stack Developer",
      group: "hero",
    }),
    defineField({
      name: "tech_stack",
      title: "Tech Stack",
      type: "array",
      of: [{ type: "string" }],
      description: "e.g. React, D3.js, Chart.js, REST API",
      group: "hero",
    }),
    defineField({
      name: "key_features",
      title: "Key Features",
      type: "array",
      of: [
        defineField({
          name: "feature",
          title: "Feature",
          type: "object",
          fields: [
            defineField({
              name: "text",
              title: "Feature Description",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "completed",
              title: "Completed",
              type: "boolean",
              initialValue: true,
            }),
          ],
          preview: {
            select: { title: "text", subtitle: "completed" },
            prepare({ title, subtitle }) {
              return {
                title,
                subtitle: subtitle ? "✅ Completed" : "🔲 Pending",
              };
            },
          },
        }),
      ],
      group: "features",
    }),
    defineField({
      name: "challenges_and_solutions",
      title: "Challenges & Solutions",
      type: "array",
      of: [
        defineField({
          name: "challenge_solution",
          title: "Challenge & Solution",
          type: "object",
          fields: [
            defineField({
              name: "challenge",
              title: "Challenge",
              type: "text",
              rows: 2,
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "solution",
              title: "Solution",
              type: "text",
              rows: 3,
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: { title: "challenge", subtitle: "solution" },
            prepare({ title, subtitle }) {
              return {
                title: `⚡ ${title}`,
                subtitle,
              };
            },
          },
        }),
      ],
      group: "challenges",
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'category' },
    prepare: ({ title, subtitle }) => {
      return {
        title: title ?? "Project Hero Section",
        subtitle,
      };
    }
  }
});
