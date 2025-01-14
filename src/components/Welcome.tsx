import Image from "next/image";
import profilePic from "@/assets/mike_profile_600_square_tiny.jpg";
import { ReactNode } from "react";
import Tag from "@/components/Tag";
import { TagType } from "@/types/Tag.type";
import { Tech } from "@/types/Tag.type";

const Welcome = (): ReactNode => {
  return (
    <div className="">
      <div className="flex items-center justify-center h-full">
        <div className="w-72 pr-4 prose  justify-items-end text-right text-[--foreground]">
          <h1 className="prose-h1 mb-2 ">
            <span className="text-5xl text-[--foreground]">Hello!</span>
            <br />
            <span className="text-[--primary]">I&apos;m Mike</span>
          </h1>
          <h3 className="prose-h3 mt-0 text-[--foreground]">
            and I&apos;m happy you&apos;re here.
          </h3>
          <p className="">
            I&apos;m a Bay Area-based full-stack software engineer specializing
            in <Tag label={Tech.Typescript} />, <Tag label={Tech.React} />, <Tag label={Tech.Node} />, and <Tag label={Tech.NextJS} />.
          </p>
          <p className="">
            I love building with AI and strive to design with functional simplicity.
          </p>
        </div>

        <div className="w-52 rounded-full boder border-2 border-[--primary] overflow-hidden">
          <Image src={profilePic} alt="" objectFit="contain" />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
