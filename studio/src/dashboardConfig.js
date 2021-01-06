export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId: "5ff5e1e5d3e2e62cc276f4ea",
                  title: "Mainspring CMS",
                  name: "mainspringcms",
                  apiId: "776e14c7-e053-4842-a1e5-9d0ea920f065",
                },
                {
                  buildHookId: "5ff5dfc6cc38342197f5b342",
                  title: "Mainspring Website",
                  name: "mainspring",
                  apiId: "f39b9e6c-127a-4e75-a036-f85d7a4eb5e6",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value: "https://github.com/joshuarule/mainspringenergy.com",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://mainspring.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
