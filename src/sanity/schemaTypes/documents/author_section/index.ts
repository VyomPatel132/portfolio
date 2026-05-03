import { modes } from "@/lib";
import { defineField, defineType } from "sanity";

export const author = defineType({
  name: "author_section",
  title: "Author Section",
  type: "document",
  fields: [
    defineField({
      name: "author_Name",
      title: "Author Name",
      type: "string",
    }),
    defineField({
      name: "company",
      title: "Company",
      type: "label_link",
    }),
    defineField({
      name: "author_Image",
      title: "Author Image",
      type: "custom_image",
    }),
    defineField({
      name: "author_Post",
      title: "Author Post",
      type: "string",
    }),
    defineField({
      name: "social_Icon",
      title: "Social Icon",
      type: "array",
      of: [{ type: "custom_image" }],
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
    select: {
      title: "author_Name",
      image: "author_Image.image",
    },
    prepare: (select) => {
      const { title, image } = select;
      if (!title) {
        return {
          title: "Author",
          media: image && image,
        };
      }
      return {
        title: title,
        media: image && image,
      };
    },
  },
});
