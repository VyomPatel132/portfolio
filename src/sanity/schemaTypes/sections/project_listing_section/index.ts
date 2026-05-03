import { defineField, defineType } from "sanity";

export const projectListing = defineType({
  name: "project_listing_section",
  title: "Project Listing Section",
  type: "object",
  fields: [
    defineField({
      name: "search_placeholder",
      title: "Search Placeholder",
      type: "string",
    }),
    defineField({
      name: "project_listing",
      title: "Project Listing",
      type: "array",
      of: [{ type: "reference", to: [{ type: "project_detail" }] }],
    }),
  ],
});
