export default {
  name: "downloads",
  title: "Downloads",
  type: "object",
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "items",
      title: "Downloads",
      type: "array",
      of: [{ type: "whitePaper" }],
    },
  ],
};
