import { defineField, defineType } from "sanity";

export const footerBanner = defineType({
  name: "footer_banner",
  title: "Footer Banner",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      description: 'e.g. "Ready to elevate your digital presence?"',
    }),
    defineField({
      name: "highlighted_word",
      title: "Highlighted Word",
      type: "string",
      description:
        'The word in the heading to highlight in purple, e.g. "your"',
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "text",
      rows: 2,
      description:
        'e.g. "I\'m available for freelance and collaboration opportunities..."',
    }),
    defineField({
      name: "button_text",
      title: "Button Text",
      type: "string",
      description: 'e.g. "Let\'s get in touch"',
    }),
    defineField({
      name: "button_link",
      title: "Button Link",
      type: "url",
      description: "URL the button points to (e.g. mailto: or contact page)",
      validation: (Rule) =>
        Rule.uri({
          allowRelative: true,
          scheme: ["https", "http", "mailto"],
        }),
    }),
  ],
});
