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
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Numbered", value: "number" },
          ],
        },
      ],
    },
  ],
};
