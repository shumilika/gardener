'use client';
import Footer from "@/components/common/Footer";
import BlogPosts from "@/components/sections/BlogPosts";
import CallToAction from "@/components/sections/CallToAction";
import FrequentlyAskedQuestions from "@/components/sections/FrequentlyAskedQuestions";
import Gallery from "@/components/sections/Gallery";
import Hero from "@/components/sections/Hero";
import InfoBanner from "@/components/sections/InfoBanner";
import Introduction from "@/components/sections/Introduction";
import OurServices from "@/components/sections/OurServices";
import TestimonialsPage from "@/components/sections/TestimonialsPage";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Introduction/>
      <InfoBanner/>
      <OurServices/>
      <FrequentlyAskedQuestions/>
      <Gallery/>
      <TestimonialsPage/>
      <BlogPosts/>
      <CallToAction/>
      <Footer/>
    </div>
  );
}
