export default {
  name: "patents",
  title: "Patents",
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
      name: "title",
      title: "Page Title",
      type: "string",
    },
    {
      name: "body",
      title: "Body Text",
      type: "richTextObj",
    },
  ],
};
