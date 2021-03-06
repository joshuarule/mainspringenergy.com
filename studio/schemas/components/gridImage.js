export default {
  name: "gridImage",
  title: "Image",
  type: "object",
  options: {
    collapsible: true,
  },
  preview: {
    select: {
      title: "image.alt",
      media: "image.src",
    },
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
      name: "path",
      title: "Path",
      placeholder: "/vision",
      description: "Path or Url to send user to on image click",
      type: "string",
    },
  ],
};
