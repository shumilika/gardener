import Footer from '@/components/common/Footer';
import MainHeader from '@/components/common/MainHeader';
import CallToAction from '@/components/sections/CallToAction';
import BlogCard from '@/components/ui/BlogCard';
import { blogCards, headerSubtitle } from '@/lib/data';
import React from 'react';

const page = () => {
    return (
        <div>
            <MainHeader title='Blog' subtitle={headerSubtitle} image='url(/assets/images/main-header-blog.avif)'/>
            <div className='w-full h-min flex flex-col justify-center items-center px-[30px] py-[150px]'>
                <div className='max-w-[1200px] w-full h-min flex flex-col justify-center items-center'>
                    <div className='grid grid-cols-3 gap-x-8 gap-y-14 w-full h-min'>
                        {
                            blogCards.map((item,id)=>
                            <BlogCard title={item.title} slug={item.slug} image={item.image} date={item.date} key={id} />
                            )
                        }
                    </div>
                </div>
            </div>
            <CallToAction/>
            <Footer/>
        </div>
    );
};

export default page;