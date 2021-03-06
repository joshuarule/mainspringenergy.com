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
      name: "sectionId",
      title: "#SectionHash",
      type: "string",
      description: "The value to use for linking to this item on the page",
    },
    {
      name: "title",
      title: "Title",
      type: "array",
      of: [
        {
          type: "block",
          styles: [],
          lists: [],
          marks: {
            decorators: [],
            annotations: [],
          },
        },
      ],
    },
    {
      name: "image",
      title: "Image",
      type: "figure",
    },
    {
      name: "body",
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
