import { defineField, defineType } from "sanity";

export const setting = defineType({
  name: "setting",
  title: "Setting",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "telePhone",
      title: "TelePhone",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "custom_image",
    }),
  ],
});
