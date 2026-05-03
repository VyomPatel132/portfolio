import { defineField, defineType } from "sanity";

export const phases = defineType({
  name: "phases",
  title: "Phases",
  type: "object",
  fields: [
    defineField({
      name: "order",
      title: "Order (e.g. Phase 1)",
      type: "string",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "container_bg",
      title: "Container Background Color (Tailwind)",
      type: "string",
    }),
    defineField({
      name: "animation_speed",
      title: "Animation Speed",
      type: "number",
    }),
    defineField({
      name: "dot_colors",
      title: "Dot Colors (RGB Array)",
      type: "array",
      of: [{ type: "rgb_colors" }],
    }),
  ],
});
