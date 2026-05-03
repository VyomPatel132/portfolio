import { modes } from "@/lib";
import { defineField, defineType } from "sanity";

export const newsLetter = defineType({
  name: "news_letter",
  title: "News Letter",
  type: "document",
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
      name: "input_placeholder",
      title: "Input Placeholder",
      type: "string",
    }),
    defineField({
      name: "subscribe_button",
      title: "Subscribe Button",
      type: "string",
    }),
    defineField({
      name: "background_image",
      title: "Background Image",
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
});
