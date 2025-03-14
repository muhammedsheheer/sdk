import Image from "next/image";
import React from "react";

const Gallery: React.FC = () => {
  return (
    <section className="h-full w-full bg-[#0B1D11] py-12 md:py-24">
      <div className="flex flex-col gap-10 md:gap-24">
        <div className="flex flex-col items-center justify-center gap-2">
          <span className="font-birthstone text-4xl font-[400] tracking-[0.76px] text-[#C9AB81]">
            gallery{" "}
          </span>
          <h6 className="font-sofia_sans text-center text-4xl font-[400] uppercase text-[#DCCABC] md:text-5xl">
            sdk gallery{" "}
          </h6>
        </div>
        <div className="flex w-full flex-col bg-[#0B1D11] md:flex-row">
          <div className="grid w-full grid-cols-1 gap-4 bg-[#0B1D11] px-4 md:w-[55%] md:grid-cols-2 md:px-0">
            <Image
              src={"/images/home/gallery/image1.png"}
              width={281}
              height={74}
              alt="image"
              className="h-[300px] w-full md:h-[350px]"
            />
            <Image
              src={"/images/home/gallery/image2.png"}
              width={281}
              height={74}
              alt="image"
              className="h-[300px] w-full md:h-[350px]"
            />
            <Image
              src={"/images/home/gallery/image3.png"}
              width={281}
              height={74}
              alt="image"
              className="h-[300px] w-full md:h-[350px]"
            />
            <Image
              src={"/images/home/gallery/image4.png"}
              width={281}
              height={74}
              alt="image"
              className="h-[300px] w-full md:h-[350px]"
            />
          </div>
          <div className="relative flex w-full flex-col gap-2 md:w-[45%]">
            <div className="absolute -top-6 left-4 hidden md:block">
              <div className="z-0 flex flex-col">
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(90deg, #2C8C4C 0%, #101512 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(90deg, #2C8C4C 0%, #101512 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(90deg, #2C8C4C 0%, #101512 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(90deg, #2C8C4C 0%, #101512 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(90deg, #2C8C4C 0%, #101512 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(90deg, #2C8C4C 0%, #101512 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(90deg, #2C8C4C 0%, #101512 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(90deg, #2C8C4C 0%, #101512 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
              </div>
            </div>
            {/* second one  */}
            <div className="absolute -top-6 left-[48%] z-20 hidden md:block">
              <div className="z-0 flex flex-col">
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(90deg, #2C8C4C 0%, #101512 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(90deg, #2C8C4C 0%, #101512 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(90deg, #2C8C4C 0%, #101512 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(90deg, #2C8C4C 0%, #101512 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(90deg, #2C8C4C 0%, #101512 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(90deg, #2C8C4C 0%, #101512 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(90deg, #2C8C4C 0%, #101512 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(90deg, #2C8C4C 0%, #101512 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
              </div>
            </div>
            {/* tird one  */}
            <div className="absolute -top-6 left-[25%] hidden md:block">
              <div className="z-0 flex flex-col">
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(90deg, #2C8C4C 0%, #101512 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(90deg, #2C8C4C 0%, #101512 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(90deg, #2C8C4C 0%, #101512 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(90deg, #2C8C4C 0%, #101512 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(90deg, #2C8C4C 0%, #101512 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(90deg, #2C8C4C 0%, #101512 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(90deg, #2C8C4C 0%, #101512 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(90deg, #2C8C4C 0%, #101512 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
              </div>
            </div>
            {/* fourth one  */}
            <div className="absolute -top-6 left-[72%] z-30 hidden md:block">
              <div className="flex flex-col">
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(90deg, #2C8C4C 0%, #101512 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(90deg, #2C8C4C 0%, #101512 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(90deg, #2C8C4C 0%, #101512 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(90deg, #2C8C4C 0%, #101512 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(90deg, #2C8C4C 0%, #101512 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(90deg, #2C8C4C 0%, #101512 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(90deg, #2C8C4C 0%, #101512 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
                <div>
                  <h1
                    className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(90deg, #2C8C4C 0%, #101512 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SDK{" "}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
