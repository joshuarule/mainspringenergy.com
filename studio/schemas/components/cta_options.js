export default {
  name: "cta_options",
  title: "Options",
  type: "object",
  options: {
    collapsible: true,
    collapsible: true,
  },
  fields: [
    {
      name: "swap",
      title: "Image on Right",
      type: "boolean",
      options: {
        layout: "checkbox",
      },
    },
    {
      name: "size",
      title: "Large Image (2/3 of row)",
      type: "boolean",
      options: {
        layout: "checkbox",
      },
    },
  ],
};
