"use client";
import Footer from "@/components/common/Footer";
import MainHeader from "@/components/common/MainHeader";
import CallToAction from "@/components/sections/CallToAction";
import BlogCard from "@/components/ui/BlogCard";
import { useAppData } from "@/context/AppContext";
import { headerSubtitle } from "@/lib/data";
import { handleChangeDateFormat } from "@/services/dateFormat";
import React from "react";

const page = () => {
  const { articles, loading } = useAppData();

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <MainHeader
        title="Blog"
        subtitle={headerSubtitle}
        image="url(/assets/images/main-header-blog.avif)"
      />
      <div className="w-full h-min flex flex-col justify-center items-center px-[30px] py-[150px]">
        <div className="max-w-[1200px] w-full h-min flex flex-col justify-center items-center">
          <div className="grid grid-cols-3 gap-x-8 gap-y-14 w-full h-min">
            {articles.map((item, id) => (
              <BlogCard
                title={item.title}
                slug={item.slug}
                image={item.imageUrl}
                date={handleChangeDateFormat({date:item.createdAt})}
                key={id}
              />
            ))}
          </div>
        </div>
      </div>
      <CallToAction />
      <Footer />
    </div>
  );
};

export default page;
