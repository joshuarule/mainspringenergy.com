export default {
  name: "sectionTitleObj",
  title: "Section Title",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "smallTitleSize",
      title: "Decrease Title Size",
      type: "boolean",
      options: {
        layout: "checkbox",
      },
    },
  ],
};
