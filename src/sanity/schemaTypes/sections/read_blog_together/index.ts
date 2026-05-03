import { defineType } from "sanity";

export const readBlogTogether = defineType({
  name: "read_blog_together",
  title: "Read Blog Together",
  type: "reference",
  to: [{ type: "blog_detail_page" }],
});
