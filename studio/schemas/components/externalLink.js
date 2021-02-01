export default {
  name: "externalLink",
  title: "External Link",
  type: "object",
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    {
      name: "label",
      title: "Label",
      type: "string",
    },
    {
      name: "url",
      title: "URL",
      type: "url",
      description: "full url (https://domain.com)",
    },
  ],
};
