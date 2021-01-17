export default {
  name: "imageGrid",
  title: "Image Grid",
  type: "object",
  preview: {
    select: {
      title: "images[0].image.alt",
      subtitle: "images",
      media: "images[0].image.src",
    },
    prepare(selection) {
      const { title, media, subtitle } = selection;
      return {
        title: "Image Grid",
        media,
        subtitle: `${subtitle.length} - images`,
      };
    },
  },
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
    {
      name: "caption",
      title: "Caption",
      type: "richTextObj",
      options: {
        collapsible: true,
      },
    },
    {
      name: "options",
      title: "Options",
      type: "imageBlockOptions",
    },
  ],
};
