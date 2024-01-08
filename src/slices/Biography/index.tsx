"use client";
import Bounded from "@/components/Bounded";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Avatar from "./Avatar";
import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * Props for `Biography`.
 */
export type BiographyProps = SliceComponentProps<Content.BiographySlice>;

/**
 * Component for "Biography" Slices.
 */
const Biography = ({ slice }: BiographyProps): JSX.Element => {
  const component = useRef(null);
  useEffect(() => {
    let ctx = gsap.context(() => {
      // create as many GSAP animations and/or ScrollTriggers here as you want...
      gsap.timeline().fromTo(
        ".about-heading",
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          ease: "elastic.out(1,0.3)",
          duration: 1,
        }
      );
    }, component);
    return () => ctx.revert(); // cleanup!
  }, []);
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      ref={component}
    >
      <div className="about-heading grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr]">
        <Heading as="h1" size="xl" className=" col-start-1">
          {slice.primary.heading}
        </Heading>
        <div className="prose prose-xl prose-slate prose-invert col-start-1 ">
          <PrismicRichText field={slice.primary.description} />
        </div>
        <Button
          linkField={slice.primary.button_link}
          label={slice.primary.button_text}
          showIcon
        />
        <Avatar
          image={slice.primary.avatar}
          className="row-start-1 max-w-sm md:col-start-2 md:row-end-3 rounded "
        />
      </div>
    </Bounded>
  );
};

export default Biography;
