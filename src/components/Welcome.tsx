import Image from "next/image";
import profilePic from "@/assets/mike_profile_600_square_tiny.jpg";
import { ReactNode } from "react";
import Tag from "@/components/Tag";
import { Tech } from "@/types/Tag.type";

const Welcome = (): ReactNode => {
  return (
    <div className="">
      <div className="flex lg:flex-row flex-col-reverse items-center justify-center h-full">
        <div className="max-w-lg lg:pr-4 prose justify-items-center lg:justify-items-end text-center lg:text-right text-[--foreground]">
          <h1 className="prose-h1 mb-0 mtext-2xl lg:text-5xl">
            <div className="flex flex-row lg:flex-col">
              <div className="lg:text-5xl text-[--foreground] mr-2 lg:mr-0 ">
                Hello!
              </div>
              <div className="text-[--primary]">I&apos;m Mike</div>
            </div>
          </h1>
          <h3 className="text-sm lg:text-xl prose-h3 mt-0 text-[--foreground]">
            and I&apos;m happy you&apos;re here.
          </h3>
          <p className="text-sm md:text-base">
            I&apos;m a Bay Area-based full-stack software engineer specializing
            in <Tag label={Tech.Typescript} />, <Tag label={Tech.React} />,{" "}
            <Tag label={Tech.Node} />, and <Tag label={Tech.NextJS} />.
            <br />
            <br />I love building with AI and strive to design with functional
            simplicity.
          </p>
        </div>

        <div className="w-32 md:w-48 lg:w-56 rounded-full boder border-2 border-[--primary] overflow-hidden">
          <Image src={profilePic} alt="" objectFit="contain" />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
