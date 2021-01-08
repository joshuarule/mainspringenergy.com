export default {
  name: "richTextObj",
  title: "Rich Text",
  type: "object",
  fields: [
    {
      name: "richText",
      title: "Rich Text",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
  ],
};
