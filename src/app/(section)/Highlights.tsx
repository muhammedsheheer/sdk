"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const images = [
  "/images/home/highlights/image1.png",
  "/images/home/highlights/image2.png",
  "/images/home/highlights/image3.png",
  "/images/home/highlights/image1.png",
  "/images/home/highlights/image2.png",
  "/images/home/highlights/image3.png",
  "/images/home/highlights/image2.png",
  "/images/home/highlights/image3.png",
];

const Highlights: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageWidth, setImageWidth] = useState(0);
  const imagesPerView = 3;

  useEffect(() => {
    const updateWidth = () => {
      const imgElement = document.querySelector(".slide-image");
      if (imgElement) {
        setImageWidth(imgElement.clientWidth + 16);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const handleNext = () => {
    if (currentIndex < images.length - imagesPerView) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <section className="relative h-full w-full bg-[#06130A] px-4 py-12 md:px-12 md:py-16 2xl:px-20">
      <div className="absolute right-[10%] top-0 hidden md:block">
        <Link href={"/menu"}>
          <Button
            className="relative z-40 mt-4 flex items-center justify-center gap-3 px-10 py-7 uppercase"
            variant="imageoutline"
          >
            View Menu
          </Button>
        </Link>
      </div>
      <div className="flex flex-col gap-6 md:gap-14">
        <div className="flex flex-col items-center justify-center gap-2 md:pb-8">
          <span className="font-birthstone text-2xl font-[400] tracking-[0.76px] text-[#C9AB81]">
            highlights{" "}
          </span>
          <h6 className="font-sofia_sans text-center text-4xl font-[400] uppercase text-[#DCCABC] md:text-5xl">
            This Week at a Glance{" "}
          </h6>
          <div className="md:hidden">
            <Link href={"/menu"}>
              <Button
                className="relative z-40 mt-4 flex items-center justify-center gap-3 px-10 py-7 uppercase"
                variant="imageoutline"
              >
                View Menu
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * imageWidth}px)`,
            }}
          >
            {images.map((img, index) => (
              <div
                key={index}
                className="slide-image w-full flex-shrink-0 px-2 md:w-1/3"
              >
                <Image
                  src={img}
                  alt={`Slide ${index + 1}`}
                  width={300}
                  height={200}
                  className="h-[300px] w-full object-cover md:h-[450px]"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-6 flex items-center justify-between px-10">
          <button
            onClick={handlePrev}
            className={`mt-3 rounded-full bg-[#33804D] p-3 text-[#fff] ring-1 ring-[#33804D] transition ${
              currentIndex === 0
                ? "cursor-not-allowed opacity-50"
                : "hover:bg-[#C9AB81] hover:text-black"
            }`}
            disabled={currentIndex === 0}
          >
            <ArrowLeft className="h-6 w-6" />
          </button>
          <div className="flex justify-center gap-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`h-1 w-1 rotate-45 transition-all ${
                  currentIndex === index ? "bg-black" : "bg-[#C9AB81]"
                }`}
              />
            ))}
          </div>
          <button
            onClick={handleNext}
            className={`mt-3 rounded-full bg-[#33804D] p-3 text-[#fff] ring-1 ring-[#33804D] transition ${
              currentIndex >= images.length - imagesPerView
                ? "cursor-not-allowed opacity-50"
                : "hover:bg-[#C9AB81] hover:text-black"
            }`}
            disabled={currentIndex >= images.length - imagesPerView}
          >
            <ArrowRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
