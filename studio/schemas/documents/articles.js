export default {
  name: "articles",
  title: "Articles",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "date",
      title: "Published Date",
      type: "date",
    },
    {
      name: "image",
      title: "Preview Image",
      type: "figure",
    },
    {
      name: "url",
      title: "External Url",
      type: "url",
    },
  ],
};
