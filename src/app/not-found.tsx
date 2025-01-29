"use client";

import Bounded from "@/components/Bounded";
import NotFoundLogo from "@/components/NotFoundLogo";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";


export default function NotFound() {

  const container = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  gsap.registerPlugin(useGSAP);

  useGSAP(
    () => {
      if (prefersReducedMotion) {
        gsap.set(".notfound__image, .notfound__message ", { x: 0, y: 0, opacity: 1 });
        return;
      }

      const tl = gsap.timeline({defaults: { ease: "bounce.out" }});

      tl.fromTo(
        ".notfound__image",
        {
          y: -220,
        },
        { y: 0, duration: 1.2, opacity: 1 },
      );

      tl.fromTo(".notfound__message", { y: -50 }, 
        { duration:2, y: 0}, "-=0.9" );

    },
    { scope: container },
  );

  return (
    <Bounded>
      <div
        className="mx-auto flex h-[68vh] flex-col items-center justify-center"
        ref={container}
      >
        <div className="notfound__image opacity-0">
          <NotFoundLogo />
        </div>
        <h1 className="notfound__message text-lg text-[#FFD60A] md:text-xl">
          The page you are looking for cannot be found
        </h1>
      </div>
    </Bounded>
  );
}
