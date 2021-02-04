export default {
  name: "sectionTitleOptions",
  title: "Options",
  type: "object",
  options: {
    collapsible: true,
    collapsed: true,
  },
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
      title: "Decrease Top Margin",
      type: "boolean",
      options: {
        layout: "checkbox",
      },
    },
    {
      name: "bottomMargin",
      title: "Decrease Bottom Margin",
      type: "boolean",
      options: {
        layout: "checkbox",
      },
    },
  ],
};
