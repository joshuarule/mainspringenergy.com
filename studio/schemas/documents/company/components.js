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
        title: 'Hero Body',
        name: 'heroBody',
        type: 'array',
        of: [
          {
            type: 'block',
            styles: [],
            marks: {
              decorators: [{title: 'Strong', value: 'strong'}],
            },
          },
        ],
      },
    ],
  };