import { BsFillPersonFill } from "react-icons/bs";
export default {
  name: "person",
  title: "Person",
  type: "document",
  icon: BsFillPersonFill,
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
  fields: [
    {
      name: "name",
      title: "Name of Person",
      type: "string",
    },
    {
      name: "title",
      title: "Job Title",
      type: "string",
    },
    {
      name: "category",
      type: "array",
      validation: (Rule) => Rule.unique().required(),
      of: [
        {
          title: "Type",
          name: "type",
          type: "reference",
          to: [{ type: "personTypes" }],
        },
      ],
    },
    // https://stackoverflow.com/questions/58567054/how-can-i-validate-the-dimensions-of-an-uploaded-image-in-sanity
    {
      name: "image",
      title: "Image",
      type: "personImage",
    },
    {
      title: "Text",
      name: "text",
      type: "array",
      of: [
        {
          type: "block",
          styles: [],
          lists: [],
          marks: {
            decorators: [],
          },
        },
      ],
    },
  ],
};
