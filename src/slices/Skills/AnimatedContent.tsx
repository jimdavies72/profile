"use client";

import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, PrismicText } from "@prismicio/react";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import {
  FaNodeJs,
  FaReact,
  FaPython,
  FaHand,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
} from "react-icons/fa6";

import { IoLogoJavascript, IoTerminal } from "react-icons/io5";

import { TbBrandNextjs, TbBrandCSharp, TbCsv } from "react-icons/tb";

import {
  SiTypescript,
  SiJson,
  SiNpm,
  SiMongodb,
  SiMysql,
  SiVercel,
  SiJira,
  SiTrello,
  SiConfluence,
  SiPrismic,
} from "react-icons/si";

import { LuCodeXml } from "react-icons/lu";

import { RiTailwindCssFill } from "react-icons/ri";

import { VscVscode } from "react-icons/vsc";

import { BiLogoNetlify, BiLogoHeroku } from "react-icons/bi";
import { useCallback, useEffect, useState } from "react";
import Score from "@/components/Score";

export default function AnimatedContent({
  slice,
}: {
  slice: Content.SkillsSlice;
}) {
  const icons = {
    node: <FaNodeJs />,
    javascript: <IoLogoJavascript />,
    react: <FaReact />,
    nextjs: <TbBrandNextjs />,
    csharp: <TbBrandCSharp />,
    typescript: <SiTypescript />,
    python: <FaPython />,
    npm: <SiNpm />,
    mongodb: <SiMongodb />,
    mysql: <SiMysql />,
    json: <SiJson />,
    softskill: <FaHand />,
    xml: <LuCodeXml />,
    csv: <TbCsv />,
    html: <FaHtml5 />,
    css: <FaCss3Alt />,
    tailwind: <RiTailwindCssFill />,
    vscode: <VscVscode />,
    terminal: <IoTerminal />,
    netlify: <BiLogoNetlify />,
    heroku: <BiLogoHeroku />,
    vercel: <SiVercel />,
    jira: <SiJira />,
    trello: <SiTrello />,
    confluence: <SiConfluence />,
    github: <FaGithub />,
    prismic: <SiPrismic />,
  };

  const [scrollSize, setScrollSize] = useState(5);
  const [scrollDelay, setScrollDelay] = useState(5000);

  useEffect(() => {
    const handleDeviceDetection = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobile =
        /iphone|ipad|ipod|android|blackberry|windows phone/g.test(userAgent);
      const isTablet =
        /(ipad|tablet|playbook|silk)|(android(?!.*mobile))/g.test(userAgent);

      if (isMobile) {
        setScrollSize(2);
        setScrollDelay(1500);
      } else if (isTablet) {
        setScrollSize(3);
        setScrollDelay(3000);
      } else {
        setScrollSize(5);
        setScrollDelay(5000);
      }
    };

    handleDeviceDetection();
    window.addEventListener("resize", handleDeviceDetection);

    return () => {
      window.removeEventListener("resize", handleDeviceDetection);
    };
  }, []);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
      slidesToScroll: scrollSize,
    },
    [Autoplay({ playOnInit: true, delay: scrollDelay })],
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative grid place-items-center text-center">
      {isFilled.richText(slice.primary.heading) && (
        <div className="skills__heading text-balance text-center text-5xl font-medium md:text-7xl">
          <PrismicRichText field={slice.primary.heading} />
        </div>
      )}

      {isFilled.richText(slice.primary.body) && (
        <div className="skills__body mx-auto mb-16 mt-6 max-w-md text-balance text-center text-slate-300">
          <PrismicRichText field={slice.primary.body} />
        </div>
      )}

      <div
        ref={emblaRef}
        className="skills__container container cursor-grabbing overflow-hidden md:max-w-4xl"
      >
        <ul className="flex flex-row">
          {slice.primary.skill
            .filter((item) => item.show)
            .map((item) => (
              <li
                key={item.skill_name}
                className="mx-2 flex flex-col rounded-sm border border-blue-100/60 bg-black p-4 text-center"
              >
                <div
                  style={{ color: item.icon_colour }}
                  className="mb-6 w-fit text-6xl"
                >
                  {item.icon && icons[item.icon]}
                </div>
                <div className="whitespace-nowrap text-lg md:text-xl mb-3 text-slate-300">
                  {item.skill_name}
                </div>
                <div className="mt-2 text-left">
                  <Score score={item.experience_level || 1} maxScore={5} />
                </div>
              </li>
            ))}
        </ul>
        <div className="mt-5 hidden flex-row gap-6 text-xl md:flex">
          <button className="embla__prev" onClick={scrollPrev}>
            Prev
          </button>
          <button className="embla__next" onClick={scrollNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
