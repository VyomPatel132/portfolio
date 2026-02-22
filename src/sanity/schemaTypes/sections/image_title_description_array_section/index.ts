import { modes, variant } from "@/lib";
import { defineField, defineType } from "sanity";

export const imageTitleDescriptionArray = defineType({
  name: "image_title_description_array_section",
  title: "Image Title Description Array Section",
  type: "object",
  fields: [
    defineField({
      name: "title_subtitle",
      title: "Title Subtitle",
      type: "title",
    }),
    defineField({
      name: "title_blogs",
      title: "Title Blogs",
      type: "array",
      of: [
        {
          type: "title_blog",
        },
      ],
    }),
    defineField({
      name: "section_theme",
      title: "Section Theme",
      type: "string",
      initialValue: "bg-white",
      options: { list: modes, direction: "horizontal", layout: "radio" },
    }),
    defineField({
      name: "align",
      title: "Align",
      type: "string",
      initialValue: "center",
      options: {
        list: [
          { title: "Left", value: "left" },
          { title: "Center", value: "center" },
        ],
        direction: "horizontal",
        layout: "radio",
      },
    }),
    defineField({
      name: "background",
      title: "Background",
      type: "string",
      initialValue: "withBackground",
      options: {
        list: [
          { title: "With-Background", value: "withBackground" },
          { title: "Without-Background", value: "withoutBackground" },
        ],
        direction: "horizontal",
        layout: "radio",
      },
    }),
    defineField({
      name: "variant",
      title: "Variant",
      type: "string",
      initialValue: "primary",
      options: { list: variant, direction: "horizontal", layout: "radio" },
    }),
  ],
  preview: {
    prepare: () => {
      return {
        title: "Image Title Description Array Section",
      };
    },
  },
});
