export default {
  name: "sectionTitle",
  title: "Section Title",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
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
    {
      name: "options",
      type: "sectionTitleOptions",
      title: "Options",
    },
  ],
};
