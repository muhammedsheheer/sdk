import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <video
          src="/video/bg.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-40 flex h-full flex-col items-center justify-center gap-3 text-white">
        <h1
          className="text-center font-open_sans text-8xl font-[600] uppercase md:text-9xl"
          style={{
            background: "linear-gradient(180deg, #E6C688 0%, #06130A 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          SDK
        </h1>
      </div>
    </section>
  );
};

export default Hero;
