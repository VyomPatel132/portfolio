import { defineField, defineType } from "sanity";

export const gridSection = defineType({
  name: "home_grid_section",
  title: "Home Grid Section",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "grid_items",
      title: "Grid Items",
      type: "array",
      of: [{ type: "grid_item" }],
    }),
  ],
});
