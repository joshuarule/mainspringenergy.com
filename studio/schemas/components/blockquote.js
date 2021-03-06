import { FaQuoteRight } from "react-icons/fa";

export default {
  name: "blockquote",
  title: "Blockquote",
  type: "object",
  icon: FaQuoteRight,
  fields: [
    {
      name: "options",
      title: "Options",
      type: "blockquoteOptions",
    },
    {
      name: "text",
      title: "Quote Text",
      type: "text",
    },
    {
      name: "author",
      title: "Author",
      type: "string",
    },
  ],
};
