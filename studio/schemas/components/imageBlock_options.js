export default {
  name: "imageBlockOptions",
  title: "Options",
  type: "object",
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    {
      name: "fullWidth",
      type: "boolean",
      title: "Full width",
      description: "Extend horizontally past container to edges of browser",
    },
    {
      name: "logos",
      type: "boolean",
      title: "Logos",
      description: "Is this a list of logos",
    },
    {
      name: "marginTop",
      type: "boolean",
      title: "Top Margin",
      description: "Make grid tight to component above",
    },
    {
      name: "marginBottom",
      type: "boolean",
      title: "Bottom Margin",
      description: "Make grid tight to component below",
    },
  ],
};
