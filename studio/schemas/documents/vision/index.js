export default {
  name: "vision",
  title: "Vision",
  type: "document",
  __experimental_actions: ["update", "publish"],
  preview: {
    select: {
      title: "seo.title",
    },
  },
  fields: [
    {
      name: "seo",
      title: "SEO",
      type: "seo",
    },
    {
      name: "hero",
      title: "Hero",
      type: "hero",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      title: "Content Blocks",
      name: "contentBlocks",
      type: "contentBlocks",
    },
    {
      name: "vision_sources",
      title: "Sources",
      type: "vision_sources",
    },
  ],
};
