export default {
  name: "feature2ColumnText",
  title: "Feature - 2 Col Text",
  type: "object",
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    {
      name: "image",
      title: "Image - (Column 1)",
      type: "figure",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "textCol1",
      title: "Text Column 1",
      type: "text",
    },
    {
      name: "textCol2",
      title: "Text Column 2",
      type: "text",
    },
  ],
};
