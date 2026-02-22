import { defineField, defineType } from "sanity";

export const metaAttribute = defineType({
  name: "meta_attribute",
  title: "Meta Attribute",
  type: "object",
  fields: [
    defineField({
      name: "attribute_key",
      title: "Key",
      type: "string",
    }),
    defineField({
      name: "attribute_type",
      title: "type",
      type: "string",
      options: {
        list: ["string", "image"],
      },
      initialValue: "string",
    }),
    defineField({
      name: "attribute_value_image",
      title: "Value",
      type: "custom_image",
      hidden: ({ parent }) =>
        !parent?.attribute_type?.toString()?.includes("image"),
    }),
    defineField({
      name: "attribute_value_string",
      title: "Value",
      type: "string",
      hidden: ({ parent }) =>
        !parent?.attribute_type?.toString()?.includes("string"),
    }),
  ],
  preview: {
    select: {
      title: "attribute_key",
    },
    prepare: ({ title }) => {
      return {
        title: title,
      };
    },
  },
});
