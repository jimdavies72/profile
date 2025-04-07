import { Content, isFilled, asDate, asText, asHTML } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";

import StarGrid from "@/components/StarGrid";
import { MdOutlineWork } from "react-icons/md";

import { SliceComponentProps } from "@prismicio/react";

import Bounded from "@/components/Bounded";
import AnimatedContent from "./AnimatedContent";

/**
 * Props for `CareerHistory`.
 */
export type CareerHistoryProps =
  SliceComponentProps<Content.CareerHistorySlice>;

/**
 * Component for "CareerHistory" Slices.
 */
const CareerHistory = ({ slice }: CareerHistoryProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="text-center"
    >
      <div className="relative grid place-items-center text-center">
        <StarGrid />

        {isFilled.richText(slice.primary.heading) && (
          <div className="text-balance text-center text-5xl font-medium lg:text-7xl">
            <PrismicRichText field={slice.primary.heading} />
          </div>
        )}

        {isFilled.richText(slice.primary.body) && (
          <div className="mt-4 max-w-lg text-balance text-lg text-yellow-500">
            <PrismicRichText field={slice.primary.body} />
          </div>
        )}
      </div>

      <div className="relative mt-16 space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent lg:before:ml-[19.45rem] lg:before:translate-x-0">
        {slice.primary.jobs.map((item, index) => (
          <div key={index} className="lg:mx-auto lg:w-[70%]">
            <div className="mb-3 lg:flex lg:space-x-4">
              <div className="flex items-center space-x-4 lg:space-x-2 lg:space-x-reverse">
                {/* Icon */}
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-yellow-100/60 bg-orange-600 lg:order-1">
                  <MdOutlineWork className="text-2xl text-slate-300" />
                </div>
                {/* Date */}
                <time className="text-sm font-bold text-indigo-300 lg:w-28">
                  {item.current_job
                    ? `${asDate(item.date_from)?.toLocaleDateString("en-GB")} to Present`
                    : `${asDate(item.date_from)?.toLocaleDateString("en-GB")} to ${asDate(item.date_to)?.toLocaleDateString("en-GB")}`}
                </time>
              </div>
              {/* Title */}

              <div className="ml-14 text-left lg:ml-0">
                <div className="flex flex-col place-items-baseline lg:flex-row lg:space-x-2">
                  <div className="text-md font-bold text-slate-400 lg:text-xl">
                    <PrismicRichText field={item.company_name} />
                  </div>
                  {item.job_type !== "N/A" && (
                    <div className="mb-2 text-sm font-semibold text-slate-400 lg:mb-0">
                      ({item.job_type})
                    </div>
                  )}
                </div>
                <div>
                  <PrismicRichText field={item.location} />
                </div>
              </div>
            </div>
            {/* Card */}
            <AnimatedContent>
              <div className="ml-14 mt-4 grid rounded-sm border border-blue-50/20 bg-gradient-to-b from-slate-50/15 to-slate-50/5 pb-4 pl-4 pr-4 pt-2 text-left backdrop-blur-sm lg:ml-44">
                {isFilled.richText(item.job_title) && (
                  <div className="text-md mb-4 font-bold lg:text-lg">
                    <PrismicRichText field={item.job_title} />
                  </div>
                )}
                <PrismicRichText
                  field={item.job_description}
                  components={{
                    heading3: ({ children }) => (
                      <h3 className="text-md mb-4 font-bold lg:text-lg">
                        {children}
                      </h3>
                    ),
                    paragraph: ({ children }) => (
                      <p className="mb-2 text-sm text-slate-300">{children}</p>
                    ),
                    list: ({ children }) => (
                      <ul className="mb-7 pl-4 last:mb-0 lg:pl-6">
                        {children}
                      </ul>
                    ),
                    listItem: ({ children }) => (
                      <li className="mb-1 list-disc pl-1 text-sm text-slate-300 last:mb-0 lg:pl-2">
                        {children}
                      </li>
                    ),
                  }}
                />
              </div>
            </AnimatedContent>
          </div>
        ))}
      </div>
    </Bounded>
  );
};

export default CareerHistory;
