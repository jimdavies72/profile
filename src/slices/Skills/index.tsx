import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import Bounded from "@/components/Bounded";

import AnimatedContent from "./AnimatedContent";

/**
 * Props for `Skills`.
 */
export type SkillsProps = SliceComponentProps<Content.SkillsSlice>;

/**
 * Component for "Skills" Slices.
 */
const Skills = ({ slice }: SkillsProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <AnimatedContent slice={slice} />
    </Bounded>
  );
};

export default Skills;
