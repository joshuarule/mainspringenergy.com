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
      title: "Image on Left",
      type: "boolean",
      options: {
        layout: "checkbox",
      },
    },
    {
      name: "size",
      title: "Larger Image",
      type: "boolean",
      options: {
        layout: "checkbox",
      },
    },
    {
      name: "textAlign",
      title: "Align Text to Image",
      type: "string",
      options: {
        layout: "radio",
        direction: "horizontal",
        list: ["top", "center", "bottom"],
      },
    },
  ],
};
