import { BsFillPersonFill } from "react-icons/bs";
export default {
  name: "settings",
  title: "Site Settings",
  type: "document",
  icon: BsFillPersonFill,
  fields: [
    {
      name: "seo",
      title: "Default SEO",
      type: "seo",
    },
    {
      name: "address",
      title: "Mainspring Office Address",
      type: "address",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      placeholder: "contact@mainspring.com",
    },
    {
      name: "phone",
      title: "Phone",
      type: "string",
      placeholder: "+1 555-555-5555",
    },
    {
      name: "map",
      title: "Map Image",
      type: "figure",
    },
    {
      name: "satellite",
      title: "Satellite Image",
      type: "figure",
    },
    {
      title: "Social Networks",
      name: "socialNetworks",
      type: "array",
      of: [{ type: "socialNetwork" }],
    },
  ],
};
