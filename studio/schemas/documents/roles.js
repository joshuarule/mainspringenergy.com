export default {
  name: "roles",
  title: "Roles",
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
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "secondaryTitle",
      title: "Section Title",
      type: "string",
    },
    {
      name: "body",
      title: "Body",
      type: "richTextObj",
    },
  ],
};
