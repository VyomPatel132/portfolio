import { defineField, defineType } from "sanity";

export const blogDetail = defineType({
  name: "blog_detail_page",
  title: "Blog Detail Page",
  type: "document",
  groups: [
    {
      name: "main",
      title: "Main",
      default: true,
    },
    {
      name: "seo",
      title: "SEO",
    },
    {
      name: "sidebar",
      title: "Sidebar",
    },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "This field is only used for CMS.",
      group: "main",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input: string) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
      group: "main",
    }),
    defineField({
      name: "header",
      title: "Header",
      type: "reference",
      to: [{ type: "header" }],
      group: "main",
    }),
    defineField({
      name: "banner_title",
      title: "Banner Title",
      type: "string",
      group: "main",
    }),
    defineField({
      name: "button",
      title: "Button",
      type: "button",
      group: "main",
    }),
    defineField({
      name: "hero_image",
      title: "Hero Image",
      type: "custom_image",
      group: "main",
    }),
    defineField({
      name: "publish_date",
      title: "Publish Date",
      type: "date",
      group: "main",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "array",
      of: [{ type: "reference", to: [{ type: "category" }] }],
      group: "main",
    }),
    defineField({
      name: "banner_desc",
      title: "Banner Desc",
      type: "text",
      group: "main",
    }),
    defineField({
      name: "recommended_blog",
      title: "Recommended Blog",
      type: "title",
      group: "main",
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "rich_text",
      group: "main",
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "author_section" }],
      group: "main",
    }),
    defineField({
      name: "news_letter_section",
      title: "News Letter Section",
      type: "reference",
      to: [{ type: "news_letter" }],
      group: "main",
    }),
    defineField({
      name: "footer",
      title: "Footer",
      type: "reference",
      to: [{ type: "footer" }],
      group: "main",
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
      group: "seo",
    }),
    defineField({
      name: "share_text",
      title: "Share Text",
      type: "string",
      group: "sidebar",
    }),
    defineField({
      name: "contant_card_title",
      title: "Contant Card Title",
      type: "string",
      group: "sidebar",
    }),
    defineField({
      name: "contant",
      title: "Contant",
      type: "array",
      of: [
        {
          type: "section_sidebar",
        },
      ],
      group: "sidebar",
    }),
  ],
  preview: {
    select: {
      title: "title",
      image: "hero_image.image",
    },
    prepare: (select) => {
      const { title, image } = select;
      if (!title) {
        return {
          title: "Blog Detail",
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
