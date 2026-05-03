import { defineField, defineType } from "sanity";

export const rgbColors = defineType({
  name: "rgb_colors",
  title: "RGB Colors",
  type: "object",
  fields: [
    defineField({
      name: "r",
      title: "R",
      type: "number",
    }),
    defineField({
      name: "g",
      title: "G",
      type: "number",
    }),
    defineField({
      name: "b",
      title: "B",
      type: "number",
    }),
  ],
});
