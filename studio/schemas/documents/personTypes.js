export default {
  name: "personTypes",
  title: "Person Types",
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
