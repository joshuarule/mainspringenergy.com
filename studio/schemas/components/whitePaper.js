export default {
  name: "whitePaper",
  title: "Download",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "image",
      title: "Preview Image",
      type: "figure",
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "src",
      title: "File",
      type: "fileSrc",
      options: {
        storeOriginalFilename: true,
      },
    },
  ],
};
