export default {
  name: "contentBlocks",
  title: "Content Blocks",
  type: "array",
  options: {
    editModal: "fullscreen",
  },
  of: [
    { type: "sectionTitle" },
    { type: "figure" },
    { type: "imageGrid" },
    { type: "video" },
    { type: "cta" },
    { type: "list" },
    { type: "blockquote" },
    { type: "textColumns" },
    { type: "link", title: "Link - Full Width" },
    { type: "richTextObj" },
  ],
};
