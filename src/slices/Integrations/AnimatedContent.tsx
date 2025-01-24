import React from "react";
import { Content } from "@prismicio/client";

import { RiNextjsLine, RiTailwindCssFill, RiVercelFill } from "react-icons/ri";
import { SiPrismic, SiNpm, SiTypescript } from "react-icons/si";
import StylizedLogoMark from "./StylizedLogoMark";
import clsx from "clsx";
import { PrismicNextLink } from "@prismicio/next";

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

  return (
    <div className="mt-20 flex flex-col items-center md:flex-row">
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
