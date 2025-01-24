"use client";

import { PrismicNextLink } from "@prismicio/next";
import { Content } from "@prismicio/client";

import Link from "next/link";

import SiteLogo from "@/components/SiteLogo";
import ButtonLink from "@/components/ButtonLink";
import { FaGithub, FaEnvelope } from "react-icons/fa6";

const icons = {
  github: <FaGithub />,
  contactme: <FaEnvelope />,
};

type NavBarProps = {
  settings: Content.SettingsDocument;
};

export default function NavBar({ settings }: NavBarProps) {
  return (
    <nav aria-label="Main" className="px-4 py-4 md:px-6 md:py-6">
      <div className="mx-auto flex max-w-6xl flex-col justify-between py-2 font-medium text-white md:flex-row md:items-center">
        <Link href="/">
          <SiteLogo />
          <span className="sr-only">{settings.data.site_title}</span>
        </Link>

        <ul className="flex flex-col items-center gap-6 md:flex-row">
          {settings.data.navigation.map((item) => {
            if (item.cta_button) {
              return (
                <li key={item.label}>
                  <ButtonLink field={item.link}>
                    <div className="inline-flex items-center gap-2">
                      <div className="text-2xl">
                        {item.icon && icons[item.icon]}
                      </div>
                      {item.label}
                    </div>
                  </ButtonLink>
                </li>
              );
            }

            return (
              <li key={item.label}>
                <PrismicNextLink
                  field={item.link}
                  className="inline-flex min-h-11 items-center"
                >
                  <div className="inline-flex items-center gap-2">
                    <div className="text-2xl">
                      {item.icon && icons[item.icon]}
                    </div>
                    {item.label}
                  </div>
                </PrismicNextLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
