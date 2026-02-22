import { defineField, defineType } from "sanity";

export const customImage = defineType({
  name: "custom_image",
  title: "Custom Image",
  type: "object",
  fields: [
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "caption",
      title: "Caption",
      type: "string",
    }),
    defineField({
      name: "alt",
      title: "Alt",
      type: "string",
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "string",
    }),
  ],
  preview: {
    select: {
      imageUrl: "image.asset",
      alt: "alt",
    },
    prepare(select) {
      const { imageUrl, alt } = select;
      return {
        title: alt,
        media: imageUrl && imageUrl,
      };
    },
  },
});
