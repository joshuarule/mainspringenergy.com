export const career_opportunities = {
  name: "career_opportunities",
  title: "Opportunities",
  type: "object",
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "imageGrid",
      type: "imageGrid",
      title: "Images",
    },
    {
      name: "description",
      type: "richTextObj",
      title: "body",
    },
    {
      name: "link",
      type: "link",
      title: "Link",
    },
  ],
};
