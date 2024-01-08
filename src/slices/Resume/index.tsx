import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { MdFileDownload } from "react-icons/md";

/**
 * Props for `Resume`.
 */
export type ResumeProps = SliceComponentProps<Content.ResumeSlice>;

/**
 * Component for "Resume" Slices.
 */
const Resume = ({ slice }: ResumeProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="flex px-4 justify-between items-center">
        <Heading as="h4" size="sm">
          {slice.primary.heading}
        </Heading>
        <div
          className={clsx(
            "group relative flex w-fit text-slate-800 items-center justify-center overflow-hidden rounded-md border-2 border-slate-900 bg-slate-50 px-4 py-2 font-bold transition-transform ease-out hover:scale-105"
          )}
        >
          <span className="absolute inset-0 z-0 h-full translate-y-9 bg-yellow-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0 "></span>
          <span className="relative flex items-center justify-center gap-2 ">
            <Link
              href={"/saikumar_resume1.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              locale={false}
              download
            >
              {slice.primary.button_text}
            </Link>
            <MdFileDownload />
          </span>
        </div>
      </div>
      <div className="mt-4 relative rounded-2xl border-2 border-slate-800 bg-slate-900 px-4 py-10 md:px-8 md:py-20 h-[100vh] w-full">
        <Image
          src={"/resume.jpg"}
          alt="resume"
          fill
          style={{ objectFit: "contain" }}
          quality={100}
          priority
        />
      </div>
    </Bounded>
  );
};

export default Resume;
