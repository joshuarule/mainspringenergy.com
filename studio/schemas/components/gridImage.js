export default {
  name: "gridImage",
  title: "Image",
  type: "object",
  options: {
    collapsible: true,
  },
  fields: [
    {
      name: "image",
      title: "Image",
      type: "figure",
    },
    {
      name: "title",
      title: "Title",
      description: "Text to overlay image",
      type: "string",
    },
    {
      name: "url",
      title: "url",
      description: "URL to send user to on image click",
      type: "string",
    },
  ],
};
