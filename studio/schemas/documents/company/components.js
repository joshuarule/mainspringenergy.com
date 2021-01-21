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
      title: "Hero Body",
      name: "heroBody",
      type: "array",
      of: [
        {
          type: "block",
          styles: [],
          marks: {
            decorators: [{ title: "Strong", value: "strong" }],
          },
        },
      ],
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
