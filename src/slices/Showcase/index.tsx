import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

import clsx from "clsx";

import Bounded from "@/components/Bounded";
import ButtonLink from "@/components/ButtonLink";

import { MdOutlineWork, MdLogoDev } from "react-icons/md";
import AnimatedContent from "./AnimatedContent";

const icons = {
  work: <MdOutlineWork />,
  dev: <MdLogoDev />,
};

/**
 * Props for `Showcase`.
 */
export type ShowcaseProps = SliceComponentProps<Content.ShowcaseSlice>;

/**
 * Component for "Showcase" Slices.
 */
const Showcase = ({ slice }: ShowcaseProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative"
    >
      <div className="glow absolute -z-10 aspect-square w-full max-w-xl rounded-full bg-blue-400/20 blur-3xl filter" />
      <AnimatedContent>
        <PrismicRichText
          field={slice.primary.heading}
          components={{
            heading2: ({ children }) => (
              <div className="text-balance text-center text-5xl font-medium md:text-7xl">
                {children}
              </div>
            ),
          }}
        />
      </AnimatedContent>

      <div className="mt-16 grid items-center gap-8 rounded-xl border border-blue-50/20 bg-gradient-to-b from-slate-50/15 to-slate-50/5 px-8 py-8 backdrop-blur-sm lg:grid-cols-3 lg:gap-0 lg:py-12">
        <div>
          <div className="w-fit rounded-lg bg-blue-500/35 p-4 text-3xl">
            {slice.primary.icon && icons[slice.primary.icon]}
          </div>

          <div className="mt-6 text-2xl font-normal">
            <PrismicRichText field={slice.primary.subheading} />
          </div>

          <div className="prose prose-invert mt-4 max-w-xl">
            <PrismicRichText field={slice.primary.body} />
          </div>

          <ButtonLink field={slice.primary.button_link} className="mt-6">
            {slice.primary.button_text || "Learn more"}
          </ButtonLink>
        </div>

        <PrismicNextImage
          field={slice.primary.image}
          className={clsx(
            "rounded-md border border-slate-500 opacity-90 shadow-2xl lg:col-span-2 lg:pt-0",
            slice.variation === "reverse"
              ? "lg:order-1 lg:translate-x-[15%]"
              : "lg:-order-1 lg:translate-x-[-15%]",
          )}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </Bounded>
  );
};

export default Showcase;
