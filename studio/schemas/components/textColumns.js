export default {
  name: "textColumns",
  title: "Text Columns",
  type: "object",
  fields: [
    {
      name: "columnAmount",
      title: "Number of Columns",
      type: "string",
      options: {
        layout: "radio",
        direction: "horizontal",
        list: ["2", "3", "4"],
      },
    },
    {
      name: "columns",
      title: "Columns",
      type: "array",
      of: [{ type: "textColumn" }],
    },
  ],
};
