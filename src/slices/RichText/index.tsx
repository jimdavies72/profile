import type { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import {
  PrismicRichText,
  SliceComponentProps,
  JSXMapSerializer,
  PrismicImage,
} from "@prismicio/react";

import Bounded from "@/components/Bounded";

const components: JSXMapSerializer = {
  hyperlink: ({ node, children }) => {
    return (
      <PrismicNextLink
        className="cursor-pointer whitespace-nowrap text-yellow-200 no-underline"
        field={node.data}
      >
        {children}
      </PrismicNextLink>
    );
  },
  label: ({ node, children }) => {
    if (node.data.label === "codespan") {
      return <code>{children}</code>;
    }
  },
  image: ({ node, children }) => {
    return <PrismicImage className="rounded-sm" field={node} />;
  },
};

/**
 * Props for `RichText`.
 */
type RichTextProps = SliceComponentProps<Content.RichTextSlice>;

/**
 * Component for "RichText" Slices.
 */
const RichText = ({ slice }: RichTextProps): JSX.Element => {
  return (
    <Bounded>
      <div className="prose prose-lg prose-slate prose-invert">
        <PrismicRichText
          field={slice.primary.content}
          components={components}
        />
      </div>
    </Bounded>
  );
};

export default RichText;
