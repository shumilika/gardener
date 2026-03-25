"use client";
import ServiceHeader from "@/components/common/ServiceHeader";
import { blogCards } from "@/lib/data";
import { notFound } from "next/navigation";
import { TvIcon } from "@heroicons/react/16/solid";
import React from "react";
import BlogHeader from "@/components/common/BlogHeader";
import CallToAction from "@/components/sections/CallToAction";
import Footer from "@/components/common/Footer";
import BlogBody from "@/components/common/BlogBody";
import { useAppData } from "@/context/AppContext";
import { handleChangeDateFormat } from "@/services/dateFormat";

interface ItemPageProps {
  params: {
    slug: string;
  };
}

const page = ({ params }: ItemPageProps) => {
  const { articles, loading } = useAppData();

  const blogs = articles.find((s) => s.slug === params.slug);
  if (!blogs) {
    notFound();
  }
  return (
    <div>
      <BlogHeader
        title={blogs.title}
        date={handleChangeDateFormat({ date: blogs.createdAt })}
        image={blogs.imageUrl}
      />
      <BlogBody content={blogs.contentBlocks} />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default page;
