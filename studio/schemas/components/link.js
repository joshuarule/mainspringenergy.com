export default {
  name: "link",
  title: "Link",
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
      name: "path",
      title: "Path",
      type: "string",
      description: "/pagename or full url (https://domain.com)",
    },
  ],
};
