import { SectionCards } from "@/components/section-cards";
import { SectionHero } from "@/components/section-hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <SectionHero />
      <SectionCards />
    </>
  );
}
