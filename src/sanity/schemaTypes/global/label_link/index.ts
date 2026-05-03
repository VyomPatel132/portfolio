import { defineField, defineType } from "sanity";

export const labelLink = defineType({
  name: "label_link",
  title: "Label Link",
  type: "object",
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "string",
    }),
  ],
});
