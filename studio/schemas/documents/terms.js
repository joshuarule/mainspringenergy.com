export default {
  name: "terms",
  title: "Terms",
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
      name: "list",
      title: "Privacy Statement Items",
      type: "list",
    },
  ],
};
