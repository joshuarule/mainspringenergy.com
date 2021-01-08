export default {
  name: "cta",
  title: "Call to Action",
  type: "object",
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    {
      name: "options",
      title: "Options",
      type: "cta_options",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "figure",
    },
    {
      name: "text",
      title: "Description",
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
