import React from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";

import AnimatedContent from "./AnimatedContent";

import Bounded from "@/components/Bounded";
import Image from "next/image";

import StarBackground from "./StarBackground";
import background from "./background.jpg";

import { RiNextjsLine, RiTailwindCssFill, RiVercelFill } from "react-icons/ri";
import { SiPrismic, SiNpm, SiTypescript } from "react-icons/si";

const icons = {
  nextjs: <RiNextjsLine />,
  tailwind: <RiTailwindCssFill />,
  vercel: <RiVercelFill />,
  prismic: <SiPrismic />,
  npm: <SiNpm />,
  typescript: <SiTypescript />,
};

/**
 * Props for `Integrations`.
 */
export type IntegrationsProps = SliceComponentProps<Content.IntegrationsSlice>;

/**
 * Component for "Integrations" Slices.
 */
const Integrations = ({ slice }: IntegrationsProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative overflow-hidden"
    >
      <Image
        src={background}
        alt=""
        fill
        className="object-cover"
        quality={90}
      />

      <StarBackground />
      
      <div className="relative">
        <div className="mx-auto max-w-2xl text-balance text-center text-5xl font-medium md:text-7xl">
          <PrismicText field={slice.primary.heading} />
        </div>
        <div className="mx-auto mt-6 max-w-md text-balance text-center text-slate-300">
          <PrismicRichText field={slice.primary.body} />
        </div>

        <AnimatedContent slice={slice} />
      </div> 
    </Bounded>
  );
};

export default Integrations;
