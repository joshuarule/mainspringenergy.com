export default {
  name: "sectionTitle",
  type: "object",
  title: "Section Title",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "subtitle",
      type: "string",
      title: "Subtitle",
    },
    {
      name: "link",
      type: "link",
      title: "Link",
      description: "Link displayed under title / subtitle",
    },
    {
      name: "col_1",
      title: "Text Column 1",
      type: "text",
    },
    {
      name: "col_2",
      title: "Text Column 2",
      type: "text",
    },
    {
      name: "border",
      type: "boolean",
      title: "Top border",
    },
  ],
};
