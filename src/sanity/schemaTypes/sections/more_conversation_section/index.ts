import { modes } from "@/lib";
import { defineField, defineType } from "sanity";

export const moreConversion = defineType({
  name: "more_conversation_section",
  title: "More Conversation Section",
  type: "object",
  fields: [
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
      name: "image",
      title: "Image",
      type: "custom_image",
    }),
    defineField({
      name: "section_theme",
      title: "Section Theme",
      type: "string",
      initialValue: "bg-white",
      options: { list: modes, direction: "horizontal", layout: "radio" },
    }),
  ],
  preview: {
    prepare: () => {
      return {
        title: "More Conversation Section",
      };
    },
  },
});
