import { BsFillPersonFill } from "react-icons/bs";
export default {
  name: "person",
  title: "Person",
  type: "document",
  icon: BsFillPersonFill,
  preview: {
    select: {
      title: "name",
      type1: "personCategories.0.type",
      type2: "personCategories.1.type",
      type3: "personCategories.2.type",
      media: "image",
    },
    prepare(selection) {
      const { title, media, type1, type2, type3 } = selection;

      return {
        title,
        media,
        subtitle: `${type1}${type2 ? `, ${type2}` : ""}${
          type3 ? `, ${type3}` : ""
        }`,
      };
    },
  },
  fields: [
    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    },
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
      name: "personCategories",
      type: "array",
      validation: (Rule) => Rule.unique().required(),
      of: [{ type: "personCategory" }],
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
