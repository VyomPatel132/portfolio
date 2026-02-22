import { templateBuilders } from "./initial_value_templates";

export const initialValueTemplates = templateBuilders.map((template) => ({
  id: template.id,
  type: "initialValueTemplateItem",
  templateId: template.schemaType,
  title: template.title,
}));

export default [...initialValueTemplates];
