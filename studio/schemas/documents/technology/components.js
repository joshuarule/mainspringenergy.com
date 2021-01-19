export const technology_primarySection = {
  name: "technology_primarySection",
  title: "Primary Section",
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
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    },
    {
      name: "link",
      title: "Link",
      type: "link",
    },
    {
      name: "list",
      title: "List",
      type: "list",
    },
  ],
};

export const technology_secondarySection = {
  name: "technology_secondarySection",
  title: "Secondary Section",
  type: "object",
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    {
      name: "title",
      title: "Title",
      type: "sectionTitle",
    },
    {
      name: "image",
      title: "Image",
      type: "figure",
    },
    {
      name: "link",
      title: "Link",
      type: "link",
    },
  ],
};
