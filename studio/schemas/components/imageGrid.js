export default {
  name: "imageGrid",
  title: "Image Grid",
  type: "object",
  fields: [
    {
      name: "columns",
      title: "Number of Columns",
      type: "string",
      options: {
        layout: "radio",
        direction: "horizontal",
        list: ["2", "3", "4"],
      },
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      layout: "grid",
      of: [{ type: "gridImage" }],
      validation: (Rule) => Rule.required().min(2),
    },
  ],
};
