export default {
  name: "sectionTitleOptions",
  title: "Options",
  type: "object",
  fields: [
    {
      name: "border",
      type: "boolean",
      title: "Top border",
    },
    {
      name: "smallTitleSize",
      title: "Decrease Title Size",
      type: "boolean",
      options: {
        layout: "checkbox",
      },
    },
    {
      name: "topMargin",
      title: "Remove Top Margin",
      type: "boolean",
      options: {
        layout: "checkbox",
      },
    },
    {
      name: "bottomMargin",
      title: "Remove Bottom Margin",
      type: "boolean",
      options: {
        layout: "checkbox",
      },
    },
  ],
};
