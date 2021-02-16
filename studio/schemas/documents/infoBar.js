export default {
  name: "infoBar",
  title: "Info Bar",
  type: "document",
  fields: [
    {
      name: "visible",
      title: "Show on site",
      type: "boolean",
      description: "Should this be shown at the top of the home page?",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "link",
      title: "Link",
      type: "link",
    },
  ],
};
