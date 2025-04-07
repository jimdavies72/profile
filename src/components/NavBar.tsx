"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { PrismicNextLink } from "@prismicio/next";
import { asLink, Content } from "@prismicio/client";

import SiteLogo from "@/components/SiteLogo";
import ButtonLink from "@/components/ButtonLink";

import { FaGithub, FaEnvelope } from "react-icons/fa6";
import { MdMenu, MdClose } from "react-icons/md";
import clsx from "clsx";

type NavBarProps = {
  settings: Content.SettingsDocument;
};

export default function NavBar({ settings }: NavBarProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const icons = {
    github: <FaGithub />,
    contactme: <FaEnvelope />,
  };

  return (
    <nav aria-label="Main" className="px-4 py-4 md:px-6 md:py-6">
      <div className="mx-auto flex max-w-6xl flex-col justify-between py-2 font-medium text-white md:flex-row md:items-center">
        <div className="flex items-center justify-between">
          <Link href="/" className="z-50" onClick={() => setOpen(false)}>
            <SiteLogo />
            <span className="sr-only">{settings.data.site_title}</span>
          </Link>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            className="block p-2 text-3xl text-white md:hidden"
          >
            <MdMenu />
            <span className="sr-only">Open menu</span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={clsx(
            "fixed bottom-0 left-0 right-0 top-0 z-40 flex flex-col items-end gap-4 bg-[#070815] pr-4 pt-14 transition-transform duration-300 ease-in-out motion-reduce:transition-none md:hidden",
            open ? "translate-x-0" : "translate-x-[100%]",
          )}
        >
          <button
            type="button"
            className="fixed right-4 top-8 mb-4 block p-2 text-3xl text-white md:hidden"
            aria-expanded={open}
            onClick={() => setOpen(false)}
          >
            <MdClose />
            <span className="sr-only">Close Menu</span>
          </button>

          <div className="mt-10 grid justify-items-end gap-8">
            {settings.data.navigation.map((item) => {
              if (item.cta_button) {
                return (
                  <ButtonLink
                    key={item.label}
                    field={item.link}
                    onClick={() => setOpen(false)}
                    aria-current={
                      pathname.includes(asLink(item.link) as string)
                        ? "page"
                        : undefined
                    }
                  >
                    <div className="inline-flex items-center gap-2">
                      {item.icon && icons[item.icon]} {item.label}
                    </div>
                  </ButtonLink>
                );
              }
              return (
                <PrismicNextLink
                  key={item.label}
                  field={item.link}
                  className="block px-3 text-2xl first:mt-8"
                  onClick={() => setOpen(false)}
                  aria-current={
                    pathname.includes(asLink(item.link) as string)
                      ? "page"
                      : undefined
                  }
                >
                  <div className="inline-flex gap-2">
                    {item.icon && icons[item.icon]} {item.label}
                  </div>
                </PrismicNextLink>
              );
            })}
          </div>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden gap-6 md:flex">
          {settings.data.navigation.map((item) => {
            if (item.cta_button) {
              return (
                <li key={item.label}>
                  <ButtonLink
                    field={item.link}
                    aria-current={
                      pathname.includes(asLink(item.link) as string)
                        ? "page"
                        : undefined
                    }
                  >
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
                  aria-current={
                    pathname.includes(asLink(item.link) as string)
                      ? "page"
                      : undefined
                  }
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
