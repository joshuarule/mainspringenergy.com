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
      of: [{ type: "sourceListItem" }],
    },
  ],
};

export const vision_sources_item = {
  name: "sourceListItem",
  title: "Source",
  type: "object",
  options: {
    collapsible: true,
  },
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Text to overlay image",
      type: "string",
    },
    {
      name: "url",
      title: "URL to Source",
      placeholder: "https://linkToSource.com/source1",
      description: "Url for more info",
      type: "url",
    },
  ],
};
