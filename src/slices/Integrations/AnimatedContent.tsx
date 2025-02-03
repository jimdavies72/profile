"use client";

import React from "react";
import clsx from "clsx";

import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";

import StylizedLogoMark from "./StylizedLogoMark";
import { RiNextjsLine, RiTailwindCssFill, RiVercelFill } from "react-icons/ri";
import { SiPrismic, SiNpm, SiTypescript } from "react-icons/si";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";

export default function AnimatedContent({
  slice,
}: {
  slice: Content.IntegrationsSlice;
}) {
  const icons = {
    nextjs: <RiNextjsLine />,
    tailwind: <RiTailwindCssFill />,
    vercel: <RiVercelFill />,
    prismic: <SiPrismic />,
    npm: <SiNpm />,
    typescript: <SiTypescript />,
  };

  const container = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  gsap.registerPlugin(useGSAP);

  useGSAP(
    () => {
      if (prefersReducedMotion) {
        gsap.set(container.current, { opacity: 1 });
        return;
      }

      const tl = gsap.timeline({
        repeat: -1,
        defaults: { ease: "power2.inOut" },
      });

      tl.to(".pulsing-logo", {
        keyframes: [
          {
            filter: "brightness(2)",
            opacity: 1,
            duration: 0.4,
            ease: "power2.in",
          },
          {
            filter: "brightness(1)",
            opacity: 0.7,
            duration: 0.9,
          },
        ],
      });

      tl.to(
        ".signal-line",
        {
          keyframes: [
            { backgroundPosition: "0% 0%" },
            {
              backgroundPosition: "100% 100%",
              stagger: {
                from: "center",
                each: 0.3,
              },
              duration: 1,
            },
          ],
        },
        "-=1.4",
      );

      tl.to(
        ".pulsing-icon",
        {
          keyframes: [
            {
              opacity: 1,
              stagger: {
                from: "center",
                each: 0.3,
              },
              duration: 1,
            },
            {
              opacity: 0.4,
              duration: 1,
              stagger: {
                from: "center",
                each: 0.3,
              },
            },
          ],
        },
        "-=2",
      );
    },
    { scope: container },
  );

  return (
    <div className="mt-20 flex flex-col items-center md:flex-row" ref={container}>
      {slice.primary.icons.map((item, index) => (
        <React.Fragment key={index}>
          {index === Math.floor(slice.primary.icons.length / 2) && (
            <>
              <PrismicNextLink
                field={slice.primary.link}
                className="inline-flex min-h-11 items-center"
              >
                <StylizedLogoMark />
              </PrismicNextLink>
              
              <div className="signal-line rotate-180 bg-gradient-to-t" />
            </>
          )}
          <div className="pulsing-icon flex aspect-square shrink-0 items-center justify-center rounded-full border border-blue-50/30 bg-blue-50/25 p-3 text-3xl text-blue-100 opacity-80 md:text-4xl lg:text-4xl">
            {item.icon && icons[item.icon]}
          </div>

          {index !== slice.primary.icons.length - 1 && (
            <div
              className={clsx(
                "signal-line",
                index >= Math.floor(slice.primary.icons.length / 2)
                  ? "rotate-180"
                  : "rotate-0",
              )}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
