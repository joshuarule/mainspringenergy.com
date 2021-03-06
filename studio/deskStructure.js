import S from "@sanity/desk-tool/structure-builder";
import { FiSettings } from "react-icons/fi";
import { AiFillAlert } from "react-icons/ai";

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Pages")
        .child(
          S.list()
            .title("Pages")
            .showIcons(false)
            .items([
              S.listItem()
                .title("Home")
                .child(S.document().schemaType("home").documentId("home")),
              S.listItem()
                .title("Solutions")
                .child(
                  S.document().schemaType("solutions").documentId("solutions")
                ),
              S.listItem()
                .title("Technology")
                .child(
                  S.document().schemaType("technology").documentId("technology")
                ),
              S.listItem()
                .title("Vision")
                .child(S.document().schemaType("vision").documentId("vision")),
              S.listItem()
                .title("Careers")
                .child(
                  S.document().schemaType("careers").documentId("careers")
                ),
              S.listItem()
                .title("Company")
                .child(
                  S.document().schemaType("company").documentId("company")
                ),
              S.listItem()
                .title("Roles")
                .child(S.document().schemaType("roles").documentId("roles")),
              S.listItem()
                .title("Role")
                .child(S.document().schemaType("role").documentId("role")),
              S.listItem()
                .title("Privacy")
                .child(
                  S.document().schemaType("privacy").documentId("privacy")
                ),
              S.listItem()
                .title("Patents")
                .child(
                  S.document().schemaType("patents").documentId("patents")
                ),
              S.listItem()
                .title("Terms")
                .child(S.document().schemaType("terms").documentId("terms")),
            ])
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            "home",
            "solutions",
            "technology",
            "vision",
            "careers",
            "roles",
            "roles",
            "role",
            "company",
            "settings",
            "infoBar",
            "terms",
            "privacy",
            "patents",
          ].includes(listItem.getId())
      ),
      S.divider(),
      S.listItem()
        .title("Info Bar")
        .icon(AiFillAlert)
        .child(S.document().schemaType("infoBar").documentId("infoBar")),
      S.divider(),
      S.listItem()
        .title("Settings")
        .icon(FiSettings)
        .child(S.document().schemaType("settings").documentId("settings")),
    ]);
