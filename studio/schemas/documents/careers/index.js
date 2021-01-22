export default {
  name: "careers",
  title: "Careers",
  __experimental_actions: ["update", "publish"],
  type: "document",
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
      type: "heroRichText",
    },
    {
      name: "body",
      title: "Content Blocks",
      type: "contentBlocks",
    },
  ],
};
