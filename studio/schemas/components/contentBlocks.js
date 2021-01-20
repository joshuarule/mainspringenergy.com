import { FaQuoteRight } from "react-icons/fa";
import { MdTextFields } from "react-icons/md";
import { BiLinkAlt } from "react-icons/bi";

export default {
  name: "contentBlocks",
  title: "Content Blocks",
  type: "object",
  fields: [
    {
      name: "blocks",
      title: "Blocks",
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
        { type: "blockquote", icon: FaQuoteRight },
        { type: "textColumns" },
        { type: "link", title: "Link - Full Width", icon: BiLinkAlt },
        { type: "richTextObj", icon: MdTextFields },
        { type: "dynamicBlock" },
      ],
    },
  ],
};
