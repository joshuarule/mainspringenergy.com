export default {
  name: "textColumn",
  type: "object",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      name: "richText",
      type: "array",
      title: "Text",
      of: [
        {
          type: "block",
        },
      ],
    },
  ],
};
