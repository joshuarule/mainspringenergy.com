export const person_image = {
  name: "personImage",
  title: "Image",
  type: "image",
  accept: "jpg",
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: "alt",
      title: "Alt",
      description: "Describe the image",
      type: "string",
    },
  ],
  validation: (Rule) => Rule.required(),
};

export const person_category = {
  title: "Type",
  name: "personCategory",
  type: "reference",
  to: [{ type: "personTypes" }],
};
