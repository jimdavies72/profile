import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PrismicText, SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

import Bounded from "@/components/Bounded";
import StarGrid from "@/components/StarGrid";
import { PrismicNextImage } from "@prismicio/next";
import { asText } from "@prismicio/client";

type Params = { uid: string };

export default async function Page({ params }: { params: Promise<Params> }) {
  const { uid } = await params;
  const client = createClient();
  const page = await client.getByUID("article", uid).catch(() => notFound());

  return (
    <Bounded as="article">
      <div className="relative grid place-items-center text-center">
        <StarGrid />
        <h1 className="text-5xl font-medium md:text-7xl">
          <PrismicText field={page.data.heading} />
          <div className="mt-2 text-lg text-yellow-500">
            {page.data.article_type}
          </div>
        </h1>

        <p className="mb-4 mt-8 max-w-xl text-balance text-center text-lg text-slate-300">
          <PrismicText field={page.data.body} />
        </p>
        <PrismicNextImage
          field={page.data.image}
          className="rounded-lg"
          quality={100}
        />
      </div>

      <div className="mx-auto">
        <SliceZone slices={page.data.slices} components={components} />
      </div>
    </Bounded>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { uid } = await params;
  const client = createClient();
  const page = await client.getByUID("article", uid).catch(() => notFound());

  return {
    title: `${page.data.meta_title || asText(page.data.heading) + " Article"}`,
    description: page.data.meta_description,
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("article");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
