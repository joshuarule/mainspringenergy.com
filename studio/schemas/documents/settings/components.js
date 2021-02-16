export const settings_socialNetwork = {
  name: "socialNetwork",
  title: "Social Network",
  type: "object",
  fields: [
    {
      name: "visible",
      label: "Show on site",
      type: "boolean",
      description: "Should this be visible on the site?",
    },
    {
      name: "icon",
      type: "svgUploadPreview",
      title: "Icon",
    },
    {
      name: "title",
      title: "Network name",
      description: "The name of the social network (Facebook, Youtube, etc)",
      type: "string",
    },
    {
      name: "handle",
      title: "Account handle",
      description: "The handle of the account (mainspringenergy, mainspring)",
      type: "url",
    },
    {
      name: "url",
      title: "Account url",
      description: "The url of the homepage (https://www.youtube.com/snl)",
      type: "url",
    },
  ],
};
