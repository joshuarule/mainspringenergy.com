export const vision_sources = {
  name: "vision_sources",
  title: "Sources",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "sourceList",
      title: "Source List",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
