export const company_hero = {
  name: "company_hero",
  title: "Company Hero",
  type: "object",
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    {
      name: "heroImage",
      title: "Hero Image",
      type: "figure",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "textCol1",
      title: "Text Column 1",
      type: "text",
    },
    {
      name: "textCol2",
      title: "Text Column 2",
      type: "text",
    },
  ],
};

export const company_investors = {
  name: "company_investors",
  title: "Company Investors",
  type: "object",
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "logos",
      title: "Investors Image Grid",
      type: "imageGrid",
    },
  ],
};
