"use client";

import React from "react";

import { Content, isFilled, asDate } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";

import StarGrid from "@/components/StarGrid";
import { MdOutlineWork } from "react-icons/md";
import Bounded from "@/components/Bounded";

export default function AnimatedContent({
  slice,
}: {
  slice: Content.CareerHistorySlice;
}) {
  return (
    <React.Fragment>
      <Bounded>
        <div className="relative grid place-items-center text-center">
          <StarGrid />

          {isFilled.richText(slice.primary.heading) && (
            <div className="text-balance text-center text-5xl font-medium md:text-7xl">
              <PrismicRichText field={slice.primary.heading} />
            </div>
          )}

          {isFilled.richText(slice.primary.body) && (
            <div className="mt-4 max-w-lg text-balance text-lg text-yellow-500">
              <PrismicRichText field={slice.primary.body} />
            </div>
          )}
        </div>

        <div className="relative mt-16 space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent md:before:ml-[19.45rem] md:before:translate-x-0">
          {slice.primary.jobs.map((item, index) => (
            <div key={index} className="md:mx-auto md:w-[70%]">
              <div className="mb-3 md:flex md:space-x-4">
                <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                  {/* Icon */}
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-yellow-100/60 bg-orange-600 md:order-1">
                    <MdOutlineWork className="text-2xl text-slate-300" />
                  </div>
                  {/* Date */}
                  <time className="text-sm font-bold text-indigo-300 md:w-28">
                    {item.current_job
                      ? `${asDate(item.date_from)?.toLocaleDateString("en-GB")} to Present`
                      : `${asDate(item.date_from)?.toLocaleDateString("en-GB")} to ${asDate(item.date_to)?.toLocaleDateString("en-GB")}`}
                  </time>
                </div>
                {/* Title */}

                <div className="ml-14 text-left">
                  <div className="flex flex-col md:flex-row place-items-baseline md:space-x-2">
                    <div className="text-md font-bold text-slate-400 md:text-xl">
                      <PrismicRichText field={item.company_name} />
                    </div>
                    { item.job_type !== "N/A" && (
                        <div className="font-semibold text-slate-400 text-sm mb-2 md:mb-0">
                          ({item.job_type})
                        </div>
                      )
                    }
                  </div>
                  <div>
                    <PrismicRichText field={item.location} />
                  </div>
                </div>
              </div>
              {/* Card */}
              <div className="ml-14 mt-4 grid rounded-sm border border-blue-50/20 bg-gradient-to-b from-slate-50/15 to-slate-50/5 pl-4 pr-4 pb-4 pt-2 text-left backdrop-blur-sm md:ml-44">
                {isFilled.richText(item.job_title) && (
                  <div className="txt-xl mb-4 font-bold underline">
                    <PrismicRichText field={item.job_title} />
                  </div>
                )}
                <div className="text-sm">
                  <PrismicRichText field={item.job_description} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Bounded>
    </React.Fragment>
  );
}
