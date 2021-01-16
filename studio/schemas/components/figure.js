export default {
  name: "figure",
  title: "Image",
  type: "object",
  options: {
    collapsible: true,
  },
  fields: [
    {
      name: "options",
      title: "Options",
      type: "imageBlockOptions",
    },
    {
      name: "src",
      title: "source",
      type: "image",
    },
    {
      name: "alt",
      title: "Alt Text",
      description: "Describe the image",
      placeholder: "exterior of mainspring headquarters",
      type: "string",
    },
  ],
};
