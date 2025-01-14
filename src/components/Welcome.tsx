import Image from "next/image";
import profilePic from "@/assets/mike_profile_600_square_tiny.jpg";

type Props = {};

const Welcome = (props: Props) => {
  return (
    <div className="">
      <div className="flex items-center justify-center h-full">
        <div className="w-72 pl-14">
          <h1>Hi, I&apos;m Mike</h1>
          <p>Some other intro text</p>
        </div>

        <div className="w-52 rounded-full boder border-2 border-[--primary] overflow-hidden">
          <Image src={profilePic} alt="" objectFit="contain" />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
