import type { StructureResolver } from "sanity/structure";
import { AiOutlineGlobal } from "react-icons/ai";
import { HiOutlineTerminal } from "react-icons/hi";
import { RiPagesLine } from "react-icons/ri";
import { InitialValueTemplates } from "@/desk/initial_value_templates";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Documents")
    .items([
      S.listItem()
        .title("Global")
        .icon(AiOutlineGlobal)
        .child(
          S.list()
            .title("Global")
            .items([
              S.documentTypeListItem("header")
                .title("Header")
                .icon(HiOutlineTerminal),
              S.documentTypeListItem("footer")
                .title("Footer")
                .icon(HiOutlineTerminal),
            ]),
        ),
      S.divider(),
      S.documentListItem()
        .title("Settings")
        .id(InitialValueTemplates.SETTING)
        .schemaType("setting")
        .icon(RiPagesLine),
    ]);
