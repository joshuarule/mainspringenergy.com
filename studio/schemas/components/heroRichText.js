export default {
  name: "heroRichText",
  title: "Hero",
  type: "object",
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "richText",
      title: "Description",
      type: "richTextObj",
    },
    {
      name: "gallery",
      title: "Images",
      type: "gallery",
    },
    {
      name: "link",
      title: "Link",
      type: "link",
    },
  ],
};
