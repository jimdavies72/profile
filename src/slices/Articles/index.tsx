import Bounded from "@/components/Bounded";
import { createClient } from "@/prismicio";
import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";
import clsx from "clsx";

/**
 * Props for `Articles`.
 */
export type ArticlesProps = SliceComponentProps<Content.ArticlesSlice>;

/**
 * Component for "Articles" Slices.
 */
const Articles = async ({ slice }: ArticlesProps): Promise<JSX.Element> => {
  const client = createClient();

  const articles = await Promise.all(
    slice.primary.articles.map(async (item) => {
      if (isFilled.contentRelationship(item.article)) {
        return await client.getByID<Content.ArticleDocument>(item.article.id);
      }
    }),
  );

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="max-w-2xl text-balance text-center text-5xl font-medium md:text-7xl">
        <PrismicText field={slice.primary.heading} />
      </div>
      <div className="mx-auto mt-6 max-w-md text-balance text-center text-slate-300">
        <PrismicRichText field={slice.primary.body} />
      </div>

      <div className="mt-20 grid gap-16">
        {articles.map(
          (article, index) =>
            article && (
              <div
                key={article.id}
                className="relative grid gap-4 opacity-85 transition-opacity duration-300 hover:cursor-pointer hover:opacity-100 md:grid-cols-2 md:gap-8 lg:grid-cols-3"
              >
                <div className="col-span-1 flex flex-col justify-center gap-4">
                  <div className="text-4xl">
                    <PrismicText field={article.data.heading} />
                  </div>
                  <div className="max-w-md">
                    <PrismicRichText field={article.data.body} />
                  </div>

                  <PrismicNextLink
                    document={article}
                    className="after:absolute after:inset-0 hover:underline"
                  >
                    Read <PrismicText field={article.data.heading} /> article
                    &gt;
                  </PrismicNextLink>
                </div>
                <PrismicNextImage
                  field={article.data.image}
                  quality={100}
                  className={clsx(
                    "rounded-xl lg:col-span-2",
                    index % 2 && "md:-order-1",
                  )}
                />
              </div>
            ),
        )}
      </div>
    </Bounded>
  );
};

export default Articles;
