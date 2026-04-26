import type { StructureResolver } from "sanity/structure";
import { AiOutlineGlobal } from "react-icons/ai";
import { HiOutlineTerminal } from "react-icons/hi";
import { RiPagesLine } from "react-icons/ri";
import { MdOutlineCases } from "react-icons/md";
import { FaHome } from "react-icons/fa";

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
      S.listItem()
        .title("Site Pages (Unique)")
        .icon(RiPagesLine)
        .child(
          S.list()
            .title("Site Pages")
            .items([
              S.documentTypeListItem("home")
                .title("Home Page")
                .icon(FaHome),
              S.documentTypeListItem("project_page").title("Project Page").icon(MdOutlineCases),
            ]),
        ),
    ]);
