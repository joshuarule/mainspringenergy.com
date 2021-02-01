export default {
  name: "privacy",
  title: "Privacy",
  __experimental_actions: ["update", "publish", "create"],
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
