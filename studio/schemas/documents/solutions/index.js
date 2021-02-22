export default {
  name: "solutions",
  title: "Solutions",
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
      name: "solutions_primary",
      title: "Primary Section",
      type: "solutions_primary",
    },
    {
      name: "body",
      title: "Body",
      type: "contentBlocks",
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: "solutions_specs",
      title: "Product Specs",
      type: "solutions_specs",
    },
    {
      name: "solutions_downloads",
      title: "Downloads",
      type: "downloads",
    },
    {
      name: "solutions_form",
      title: "Solutions Form",
      type: "solutions_form",
    },
  ],
};
