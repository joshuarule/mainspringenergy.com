import { AiFillTags } from "react-icons/ai";
export default {
  name: "personTypes",
  title: "Person Types",
  icon: AiFillTags,
  type: "document",
  fields: [
    {
      type: "string",
      name: "type",
      title: "Type",
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    },
  ],
};
