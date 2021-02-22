export default {
  name: "technology",
  type: "document",
  title: "Technology",
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
      name: "heroVideo",
      title: "Hero Video",
      type: "video",
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: "primarySection",
      title: "Primary Section",
      type: "technology_primarySection",
    },
    {
      name: "secondarySection",
      title: "Secondary Section",
      type: "technology_secondarySection",
    },
    {
      name: "technology_downloads",
      title: "Downloads",
      type: "downloads",
    },
  ],
};
