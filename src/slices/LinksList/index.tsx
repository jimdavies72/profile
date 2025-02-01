import Bounded from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `LinksList`.
 */
export type LinksListProps = SliceComponentProps<Content.LinksListSlice>;

/**
 * Component for "LinksList" Slices.
 */
const LinksList = ({ slice }: LinksListProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="mt-8">
        {slice.primary.links.map((item) => (
          <div key={item.label}>
            {/* {item.link_type} */}
            <div className="mb-4 text-lg md:text-xl cursor-pointer whitespace-nowrap text-yellow-200 no-underline">
              <PrismicNextLink field={item.link}>{item.label}</PrismicNextLink>
            </div>
          </div>
        ))}
      </div>
    </Bounded>
  );
};

export default LinksList;
