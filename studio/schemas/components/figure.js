export default {
  name: "figure",
  title: "Image",
  type: "object",
  options: {
    collapsible: true,
  },
  fields: [
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
    {
      name: "caption",
      title: "Caption",
      type: "richTextObj",
      options: {
        collapsible: true,
      },
    },
    {
      name: "options",
      title: "Options",
      type: "imageBlockOptions",
    },
  ],
};
