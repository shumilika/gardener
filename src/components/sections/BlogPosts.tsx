import { blogCards } from '@/lib/data';
import React from 'react';
import BlogCard from '../ui/BlogCard';
import FadeInSection from '../common/FadeInSection';

const BlogPosts = () => {
    return (
        <div className='w-full h-min flex flex-col justify-center items-center py-[30px] pt-[130px] pb-[150px]'>
            <div className='flex flex-col justify-center items-center w-full h-min max-w-[1200px] gap-[75px]'>
                <div className='flex flex-col justify-center items-center gap-[20px] max-w-[650px]'>
                    <div>
                      <FadeInSection>
                          <h2 className='font-semibold text-[45px] leading-[1.2em]'>
                            Explore our blog
                        </h2>
                      </FadeInSection>
                    </div>
                    <div className='flex flex-col items-center '>
                        <FadeInSection delay={0.2}>
                            <p className='text-[#555] text-[18px] text-center leading-[1.9em]'>
                            Whether you're a seasoned gardener or just getting started, our blog is your go-to 
                            resource for all things gardening.
                        </p>
                        </FadeInSection>
                    </div>
                </div>
                <div className='grid gap-8 w-full h-min grid-cols-3'>
                    {blogCards.slice(0,3).map((item,id)=>
                    <BlogCard title={item.title} image={item.image} slug={item.slug} date={item.date} key={id}/>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BlogPosts;