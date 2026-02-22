import type { StructureResolver } from "sanity/structure";
import { AiOutlineGlobal } from "react-icons/ai";
import { HiOutlineTerminal } from "react-icons/hi";

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
    ]);
