"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

import { GridContainer } from "./grid";

import IconFile from "/public/icon-file.svg";
import IconHand from "/public/icon-hand.svg";
import IconHand2 from "/public/icon-hand-02.svg";
import IconMockup from "/public/mockup.svg";
import gsap from "gsap";

export function SectionHero() {
  const textHeroRef = useRef(null);
  const mockupLeftRef = useRef(null);
  const mockupRightRef = useRef(null);

  useEffect(() => {
    const textHero = textHeroRef.current;
    const mLeft = mockupLeftRef.current;
    const mRight = mockupRightRef.current;

    gsap.fromTo(
      textHero,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power4.out",
      }
    );

    gsap.fromTo(
      mLeft,
      {
        rotate: 0,
      },
      {
        rotate: -10,
        duration: 1,
      }
    );

    gsap.fromTo(
      mRight,
      {
        rotate: 0,
      },
      {
        rotate: 10,
        duration: 1,
      }
    );
  }, []);

  return (
    <section
      className="relative w-full bg-green-primary h-section-hero bg-hero bg-no-repeat bg-top border-t 
    border-t-green-border pt-16 overflow-hidden"
    >
      <GridContainer className="flex flex-col items-center">
        <div
          className="w-full max-w-text-hero text-center opacity-0"
          ref={textHeroRef}
        >
          <h3 className=" text-xl font-medium text-green-actived mb-4">
            Novo curso focado em instagram
          </h3>
          <h1 className="text-white text-7xl/normal font-semibold mb-4">
            Destrave as suas habilidades
          </h1>
          <div className="flex items-center justify-center gap-10">
            <button className="flex items-center gap-2">
              <Image src={IconFile} alt="Icon File" />
              <span className="text-white font-medium">
                Assinar lista de espera
              </span>
            </button>
            <button
              className="py-4 px-5 bg-green-btn rounded-full 
            text-green-primary font-bold"
            >
              Começar agora
            </button>
          </div>
        </div>
        <div className="relative w-full max-w-area-icons h-28 mt-4">
          <Image
            src={IconHand}
            alt="Icon Hand"
            className="absolute left-0 bottom-0"
          />
          <Image
            src={IconHand2}
            alt="Icon Hand"
            className="absolute top-0 right-0"
          />
        </div>
        <div className="absolute -bottom-44 w-full max-w-area-mockups flex justify-between">
          <Image
            src={IconMockup}
            alt="Mockup"
            ref={mockupLeftRef}
            className="relative top-[1.1rem] left-[3.3rem]"
          />
          <Image
            src={IconMockup}
            alt="Mockup"
            ref={mockupRightRef}
            className="relative top-[1.1rem] right-[3.3rem]"
          />
        </div>
      </GridContainer>
    </section>
  );
}
