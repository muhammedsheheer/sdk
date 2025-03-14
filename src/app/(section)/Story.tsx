import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Story: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#06130A] py-12 md:h-screen md:py-24">
      <div className="absolute right-[10%] top-[20%] hidden md:block">
        <Link href={"/table-booking"}>
          <Button
            className="relative z-40 mt-4 flex items-center justify-center gap-3 px-10 py-7 uppercase"
            variant="imageoutline"
          >
            Book Now
          </Button>
        </Link>
      </div>
      <div className="absolute left-[42%] top-[42%] z-50 hidden md:block">
        <div className="flex flex-col gap-6">
          <h6 className="font-sofia_sans text-center text-xl font-[400] uppercase text-[#DCCABC] md:text-3xl">
            OUR STORY
          </h6>
          <p className="w-full max-w-[400px] bg-[#06130A] px-4 text-center font-lora text-sm font-[400] lowercase text-[#9C9E9F] md:text-start">
            Welcome to Nova, where gastronomy meets entertainment for an
            unparalleled experience in Park Royal! At Nova, we invite you to
            enjoy the finest steaks and sushi whilst you enjoy the lively
            atmosphere as we host live music and DJ nights, ensuring that your
            dining experience is not just a meal but a celebration. Nova is your
            ultimate destination for those seeking a perfect blend of exquisite
            cuisine and vibrant entertainment. Join us, and let Nova in Park
            Royal redefine your expectations of gastronomic delight and
            nightlife.
          </p>
        </div>
      </div>
      <div className="absolute left-[10%] top-1/2 hidden md:block">
        <Image
          src={"/images/home/story/bg.png"}
          width={281}
          height={74}
          alt="logo"
          className="h-[200px] w-full"
        />
      </div>
      <div className="absolute left-[35%] top-[35%] hidden md:block">
        <Image
          src={"/images/home/story/s.png"}
          width={281}
          height={74}
          alt="logo"
          className="h-full w-full"
        />
      </div>
      <div className="absolute left-[25%] top-[32%] z-50 hidden md:block">
        <Image
          src={"/images/home/story/d.png"}
          width={281}
          height={74}
          alt="logo"
          className="h-full w-full"
        />
      </div>
      <div className="absolute left-[29%] top-[70%] z-50 hidden md:block">
        <Image
          src={"/images/home/story/k.png"}
          width={281}
          height={74}
          alt="logo"
          className="h-full w-full"
        />
      </div>
      <div
        className="absolute left-[25%] top-[35%] z-10 hidden md:block"
        style={{
          transform: "rotate(18deg) translate(50px, 50px)",
        }}
      >
        <h1
          className="scale-x-[1] scale-y-[1.5] text-center font-open_sans text-8xl font-[600] uppercase md:text-[180px]"
          style={{
            background: "linear-gradient(180deg, #E6C688 0%, #06130A 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          D
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 px-4 md:hidden md:gap-6">
        <h6 className="font-sofia_sans text-center text-xl font-[400] uppercase text-[#DCCABC] md:text-3xl">
          OUR STORY
        </h6>
        <p className="w-full max-w-[450px] text-center font-lora text-sm font-[400] lowercase text-[#9C9E9F] md:text-start md:text-base">
          Welcome to Nova, where gastronomy meets entertainment for an
          unparalleled experience in Park Royal! At Nova, we invite you to enjoy
          the finest steaks and sushi whilst you enjoy the lively atmosphere as
          we host live music and DJ nights, ensuring that your dining experience
          is not just a meal but a celebration. Nova is your ultimate
          destination for those seeking a perfect blend of exquisite cuisine and
          vibrant entertainment. Join us, and let Nova in Park Royal redefine
          your expectations of gastronomic delight and nightlife.
        </p>
        <div>
          <Link href={"/table-booking"}>
            <Button
              className="relative z-40 mt-4 flex items-center justify-center gap-3 px-10 py-7 uppercase"
              variant="imageoutline"
            >
              Book Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Story;
