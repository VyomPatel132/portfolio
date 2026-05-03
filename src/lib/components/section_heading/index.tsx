import { BlockDecoratorProps } from "sanity";

export const SectionHeading = (props: BlockDecoratorProps) => (
  <h2 className="bg-gray-400">{props.children}</h2>
);
