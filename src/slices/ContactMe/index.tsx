import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Content, isFilled } from "@prismicio/client";

import Bounded from "@/components/Bounded";
import StarGrid from "@/components/StarGrid";

import ContactForm from "./ContactForm";

/**
 * Props for `ContactMe`.
 */
export type ContactMeProps = SliceComponentProps<Content.ContactMeSlice>;

/**
 * Component for "ContactMe" Slices.
 */
const ContactMe = ({ slice }: ContactMeProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="text-center"
    >
      <div className="relative">
        <StarGrid />
        {isFilled.richText(slice.primary.heading) && (
          <div className="text-balance text-center text-5xl font-medium md:text-7xl">
            <PrismicRichText field={slice.primary.heading} />
          </div>
        )}

        {isFilled.richText(slice.primary.description) && (
          <div className="mx-auto mt-6 max-w-md text-balance text-slate-300">
            <PrismicRichText field={slice.primary.description} />
          </div>
        )}

        <div className="glass-container mt-16 w-full">
          <div className="absolute inset-0 -z-10 bg-blue-500/30 blur-2xl filter" />
          {slice.primary.form_enabled ? (
            <ContactForm
              service_id={process.env.EMAILJS_SERVICE_ID || ""}
              template_id={process.env.EMAILJS_TEMPLATE_ID || ""}
              public_key={process.env.EMAILJS_PUBLIC_KEY || ""}
              recaptcha_site_key={
                process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""
              }
            />
          ) : (
            <div className="flex w-full justify-center flex-row gap-4 rounded-lg bg-[#070815] p-4 text-slate-300">
              <h3>Contact form is temporarily unavailable</h3>
            </div>
          )}
        </div>
      </div>
    </Bounded>
  );
};

export default ContactMe;
