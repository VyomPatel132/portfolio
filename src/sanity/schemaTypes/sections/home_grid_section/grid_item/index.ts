import { defineField, defineType } from "sanity";

export const gridItems = defineType({
  name: "grid_item",
  title: "Grid Item",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Heading Text",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Sub Description",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "variant",
      title: "Card Variant (Layout)",
      type: "string",
      options: {
        list: [
          { title: "Big Feature (Laptop/Image)", value: "feature" },
          { title: "Tech Stack (Skills List)", value: "tech_stack" },
          { title: "Globe (Collaboration)", value: "globe" },
          { title: "Copy Email (CTA)", value: "email_cta" },
          { title: "Inside Scoop (Code Snippet)", value: "inside_scoop" },
          { title: "Grid Feature (Background Graphic)", value: "grid_feature" },
        ],
        layout: "radio",
      },
    }),
    defineField({
      name: "tech_list",
      title: "Tech List",
      type: "array",
      of: [{ type: "string" }],
      hidden: ({ parent }: any) => parent.variant !== "tech_stack",
    }),
    defineField({
      name: "image",
      title: "Card Image",
      type: "custom_image",
    }),
    defineField({
      name: "spare_image",
      title: "Spare Image",
      type: "custom_image",
    }),
    defineField({
      name: "className",
      title: "Grid Column Span (Tailwind)",
      type: "string",
      initialValue: "md:col-span-1",
    }),
    defineField({
      name: "imgClassName",
      title: "Grid Image ClassName",
      type: "string",
    }),
    defineField({
      name: "titleClassName",
      title: "Grid Title ClassName",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "description",
      cardImage: "image.image.asset",
      spareImage: "spare_image.image.asset",
    },
    prepare(selection) {
      const { title, subtitle, cardImage, spareImage } = selection;

      return {
        title: title || "Untitled Grid Item",
        subtitle: subtitle || "No Variant Selected",
        // Use cardImage if it exists, otherwise use spareImage
        media: cardImage || spareImage, 
      };
    },
  },
});
