import { defineField, defineType } from "sanity";

export const experienceItem = defineType({
  name: "experience_item",
  title: "Experience Item",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Job Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Job Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "icon",
      title: "Icon/Illustration",
      type: "custom_image",
      options: { hotspot: true },
    }),
    defineField({
      name: "className",
      title: "Classname",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "icon.image.asset",
    },
  }
});
