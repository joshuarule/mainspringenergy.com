export default {
  name: "dynamicBlock",
  title: "Dynamic Block",
  type: "object",
  fields: [
    {
      name: "name",
      title: "Dynamic block name",
      type: "string",
      options: {
        list: [{ title: "Vision Illustration", value: "visionIllustration" }],
      },
      description: "Custom components created in codebase",
    },
  ],
};
