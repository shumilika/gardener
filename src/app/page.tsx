'use client';
import FrequentlyAskedQuestions from "@/components/sections/FrequentlyAskedQuestions";
import Hero from "@/components/sections/Hero";
import InfoBanner from "@/components/sections/InfoBanner";
import Introduction from "@/components/sections/Introduction";
import OurServices from "@/components/sections/OurServices";

export default function Home() {
  return (
    <div>
      <Hero/>
       <Introduction/>
       <InfoBanner/>
       <OurServices/>
       <FrequentlyAskedQuestions/>
    </div>
  );
}
