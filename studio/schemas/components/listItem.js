export default {
  name: "listItem",
  title: "List Item",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    },
    {
      title: "Body",
      name: "body",
      type: "array",
      of: [
        {
          type: "block",
          styles: [],
          marks: {
            decorators: [],
          },
        },
      ],
    },
    {
      name: "link",
      title: "Link",
      type: "link",
    },
  ],
};
