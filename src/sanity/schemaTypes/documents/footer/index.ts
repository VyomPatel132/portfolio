import { defineField, defineType } from "sanity";

export const footer = defineType({
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "footer_banner",
      title: "Footer Banner",
      type: "footer_banner",
    }),
    defineField({
      name: "copyright_text",
      title: "Copyright Text",
      type: "string",
      description: 'e.g. "Copyright © 2026 Vyom Patel. All rights reserved."',
    }),
    defineField({
      name: "social_links",
      title: "Social Links",
      type: "array",
      of: [
        {
          type: "object",
          name: "social_item",
          fields: [
            defineField({
              name: "platform",
              title: "Platform",
              type: "string",
              options: {
                list: [
                  { title: "GitHub", value: "github" },
                  { title: "WhatsApp", value: "whatsapp" },
                  { title: "LinkedIn", value: "linkedin" },
                  { title: "Instagram", value: "instagram" },
                  { title: "Twitter/X", value: "twitter" },
                  { title: "YouTube", value: "youtube" },
                ],
              },
            }),
            defineField({
              name: "url",
              title: "URL",
              type: "url",
            }),
            defineField({
              name: "icon",
              title: "Icon",
              type: "image",
            })
          ],
          preview: {
            select: { title: "platform", subtitle: "url" },
          },
        },
      ],
    }),
  ],
});