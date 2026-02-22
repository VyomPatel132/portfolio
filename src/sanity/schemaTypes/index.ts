import { type SchemaTypeDefinition } from "sanity";
import { documentsTypes } from "./documents";
import { globalTypes } from "./global";
import { sectionType } from "./sections";
import { pagesTypes } from "./pages";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [...documentsTypes, ...globalTypes, ...sectionType, ...pagesTypes],
};
