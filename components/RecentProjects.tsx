"use client";

import { projects } from "@/data";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

const RecentProjects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="py-20">
        <h1 className="heading">
          A small selection of{" "}
          <span className="text-purple">recent projects</span>
        </h1>
        <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
          {projects.map((item) => (
            <div
              className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
              key={item.id}
            >
              <CardContainer className="inter-var">
                <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] sm:w-96 w-[80vw] h-full rounded-xl p-6 border" style={{ backgroundColor: "#13162D" }}>
                  <CardItem
                    translateZ="50"
                    className="lg:text-2xl md:text-xl text-base font-bold text-neutral-600 dark:text-white line-clamp-1"
                  >
                    {item.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="lg:text-xl lg:font-normal font-light text-sm text-neutral-500 mt-2 dark:text-neutral-300 line-clamp-2"
                    style={{ color: "#BEC1DD", margin: "1vh 0" }}
                  >
                    {item.des}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <div className="relative w-full overflow-hidden h-[20vh] lg:h-[30vh]">
                      <Image
                        src={item.img}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                      />
                    </div>
                  </CardItem>
                  <div className="flex justify-between items-center mt-7 mb-3">
                    <div className="flex items-center">
                      {item.iconLists.map((icon, index) => (
                        <div
                          key={index}
                          className="border border-white/[.2] rounded-full bg-black lg:w-14 lg:h-14 w-12 h-12 flex justify-center items-center"
                          style={{
                            transform: `translateX(-${5 * index + 2}px)`,
                          }}
                        >
                          <Image src={icon} alt="icon" width={40} height={40} className="p-2" /> {}
                        </div>
                      ))}
                    </div>
                    <CardItem
                      translateZ={20}
                      as="a"
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center lg:text-xl md:text-xs text-sm text-purple cursor-pointer hover:underline"
                    >
                      Discover more...
                      <span className="ms-3">→</span>
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;