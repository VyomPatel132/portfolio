import { modes } from "@/lib";
import { defineField, defineType } from "sanity";

export const homeHero = defineType({
  name: "home_hero_section",
  title: "Home Hero Section",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "hero_image",
      title: "Hero Image",
      type: "custom_image",
    }),
    defineField({
      name: 'hero_title',
      title: 'Hero Title',
      type: 'string',
    }),
    defineField({
      name: 'hero_description',
      title: 'Hero Description',
      type: 'text',
    }),
    defineField({
      name: 'title_image',
      title: 'Title Image',
      type: 'custom_image',
    }),
    defineField({
      name: 'my_work_button',
      title: 'My Work Button',
      type: 'button',
    }),
    defineField({
      name: 'get_in_touch_button',
      title: 'Get In Touch Button',
      type: 'button',
    }),
    defineField({
      name: 'bottom_description',
      title: 'Bottom Description',
      type: 'text',
    }),
    defineField({
      name: 'section_theme',
      title: 'Section Theme',
      type: 'string',
      initialValue:'bg-white',
      options:{ list: modes, direction: 'horizontal', layout: 'radio'}
    }),
  ],
});
