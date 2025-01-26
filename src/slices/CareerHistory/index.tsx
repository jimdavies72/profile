import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import Bounded from "@/components/Bounded";
import AnimatedContent from "./AnimatedContent";

/**
 * Props for `CareerHistory`.
 */
export type CareerHistoryProps =
  SliceComponentProps<Content.CareerHistorySlice>;

/**
 * Component for "CareerHistory" Slices.
 */
const CareerHistory = ({ slice }: CareerHistoryProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="text-center"
    >
      <AnimatedContent slice={slice} />
    </Bounded>
  );
};

export default CareerHistory;
