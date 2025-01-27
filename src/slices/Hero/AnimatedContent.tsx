"use client";

import { useRef } from "react";

import { PrismicRichText, PrismicText } from "@prismicio/react";
import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";

import ButtonLink from "@/components/ButtonLink";
import StarGrid from "@/components/StarGrid";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";

export default function AnimatedContent({
  slice,
}: {
  slice: Content.HeroSlice;
}) {
  const container = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  gsap.registerPlugin(useGSAP);

  useGSAP(
    () => {
      if (prefersReducedMotion) {
        gsap.set(
          ".hero__intro, .hero__heading, .hero__body, .hero__button, .hero__image",
          { opacity: 1 },
        );
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

      tl.fromTo(
        ".hero__intro",
        { scale: 0.5 },
        { scale: 1, duration: 0.5, opacity: 1 },
      );

      tl.fromTo(
        ".hero__heading",
        { scale: 0.5 },
        { scale: 1, duration: 1.4, opacity: 1 },
        "-=0.5",
      );

      tl.fromTo(
        ".hero__body",
        { y: 20 },
        { y: 0, duration: 1.2, opacity: 1 },
        "-=0.6",
      );

      tl.fromTo(
        ".hero__button",
        { scale: 1.5 },
        { scale: 1, duration: 1.3, opacity: 1 },
        "-=0.8",
      );

      tl.fromTo(
        ".hero__image",
        { y: 100 },
        { y: 0, duration: 1.3, opacity: 1 },
        "+=0.3",
      );

      tl.fromTo(
        ".hero__glow",
        { scale: 0.5 },
        { scale: 1, duration: 1.8, opacity: 1 },
        "-=1",
      );
    },
    { scope: container },
  );

  return (
    <div className="relative" ref={container}>
      <StarGrid />

      {isFilled.richText(slice.primary.intro_heading) && (
        <div className="hero__intro text-balance text-center text-2xl font-medium opacity-0 md:px-[20%] md:text-left md:text-4xl">
          <PrismicText field={slice.primary.intro_heading} />
        </div>
      )}

      {isFilled.richText(slice.primary.heading) && (
        <div className="hero__heading mt-8 text-balance text-center text-5xl font-medium opacity-0 md:text-7xl">
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
        <div className="hero__body mx-auto mt-6 max-w-md text-balance text-slate-300 opacity-0">
          <PrismicRichText field={slice.primary.body} />
        </div>
      )}

      {isFilled.link(slice.primary.button_link) && (
        <ButtonLink
          className="hero__button mt-8 opacity-0"
          field={slice.primary.button_link}
        >
          {slice.primary.button_label}
        </ButtonLink>
      )}

      {isFilled.image(slice.primary.image) && (
        <div className="hero__image glass-container mt-16 w-fit opacity-0">
          <div className="hero__glow absolute inset-0 -z-10 bg-blue-500/30 blur-2xl filter" />
          <PrismicNextImage
            priority={true}
            className="rounded-lg"
            field={slice.primary.image}
          />
        </div>
      )}
    </div>
  );
}
