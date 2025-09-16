'use client';
import Hero from "@/components/sections/Hero";
import InfoBanner from "@/components/sections/InfoBanner";
import Introduction from "@/components/sections/Introduction";

export default function Home() {
  return (
    <div>
      <Hero/>
       <Introduction/>
       <InfoBanner/>
    </div>
  );
}
