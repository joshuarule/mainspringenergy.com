export default {
  name: "blockquoteOptions",
  title: "Options",
  type: "object",
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    {
      name: "offset",
      type: "boolean",
      title: "Show quote in left margin",
      default: false,
      description: "Quote will be displayed in the left margin",
    },
  ],
};
