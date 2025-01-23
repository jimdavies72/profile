
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";
import { Content, isFilled } from "@prismicio/client";
import ButtonLink from "@/components/ButtonLink";
import StarGrid from "@/components/StarGrid";
import Bounded from "@/components/Bounded";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="text-center"
    >
      <div className="relative">
        <StarGrid />

        {isFilled.richText(slice.primary.intro_heading) && (
          <div className="text-balance px-[20%] text-left text-2xl font-medium md:text-4xl">
            <PrismicText field={slice.primary.intro_heading} />
          </div>
        )}

        {isFilled.richText(slice.primary.heading) && (
          <div className="mt-8 text-balance text-center text-5xl font-medium md:text-7xl">
            <PrismicRichText
              field={slice.primary.heading}
              components={{
                heading1: ({ children }) => (
                  <h2 className="text-balance text-center text-5xl font-medium md:text-7xl">
                    {children}
                  </h2>
                ),
                em: ({ children }) => (
                  <em className="bg-gradient-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
                    {children}
                  </em>
                ),
              }}
            />
          </div>
        )}

        {isFilled.richText(slice.primary.body) && (
          <div className="mx-auto mt-6 max-w-md text-balance text-slate-300">
            <PrismicRichText field={slice.primary.body} />
          </div>
        )}

        {isFilled.link(slice.primary.button_link) && (
          <ButtonLink className="mt-8" field={slice.primary.button_link}>
            {slice.primary.button_label}
          </ButtonLink>
        )}

        {isFilled.image(slice.primary.image) && (
          <div className="hero__image glass-container mt-16 w-fit">
            <div className="hero__glow absolute inset-0 -z-10 bg-blue-500/30 blur-2xl filter" />
            <PrismicNextImage
              className="rounded-lg"
              field={slice.primary.image}
            />
          </div>
        )}
      </div>
    </Bounded>
  );
};

export default Hero;
