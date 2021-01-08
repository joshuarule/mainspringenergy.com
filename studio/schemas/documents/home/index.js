export default {
  name: "home",
  title: "Home",
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
      type: "hero",
    },
    {
      name: "cta",
      title: "Linear Generator",
      type: "cta",
    },
    {
      name: "body",
      title: "Content Blocks",
      type: "contentBlocks",
    },
  ],
};
