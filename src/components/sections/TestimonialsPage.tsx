'use client';
import { testimonials } from '@/lib/data';
import { StarIcon } from '@heroicons/react/24/solid';
import React, { useEffect, useRef, useState } from 'react';
import TestimonialAutor from '../ui/TestimonialAutor';

const TestimonialsPage = () => {
     const listRef = useRef<HTMLUListElement>(null);
    const [listWidth, setListWidth] = useState(0);
     const duplicatedTestimonials = [...testimonials, ...testimonials];

       useEffect(() => {
        if (listRef.current) {
            const width = listRef.current.scrollWidth / 2;
            setListWidth(width);
        }
    }, []);

    const customStyle = { '--scroll-width': `${listWidth}px` } as React.CSSProperties;

    return (
        <div className='flex flex-col justify-center items-center w-full h-min py-[30px] pt-[130px] pb-[150px] bg-[#f7f7f7]'>
            <div className='max-w-[1200px] h-min w-full flex flex-col gap-[75px] justify-center items-center'>
                <div className='flex flex-row gap-[10px] justify-center items-center w-full h-min flex-grow-0 flex-shrink-0 basis-auto'>
                    <div className='flex flex-col flex-grow flex-shrink-0 basis-0 max-w-[400px] items-start'>
                        <h2 className='text-[45px] leading-[1.2em] font-semibold'>
                            Trusted by 1000+ customers
                        </h2>
                    </div>
                    <div className='flex flex-col items-end w-full gap-[10px] flex-grow flex-shrink-0 basis-0'>
                        <div className='w-min h-min flex flex-col justify-center items-end flex-grow-0 flex-shrink-0 basis-auto'>
                            <div className='flex flex-row items-center flex-grow-0 flex-shrink-0 basis-auto w-full  gap-[10px]'>
                                   <div className='flex flex-col w-full items-end'>
                                     <h3 className='font-semibold text-[36px] leading-[1.3em]'>4.9</h3>
                                   </div>
                                <div className='flex flex-row w-full justify-end'>
                                    <StarIcon className='size-3.5 text-[#FFC966]'/>
                                    <StarIcon className='size-3.5 text-[#FFC966]'/>
                                    <StarIcon className='size-3.5 text-[#FFC966]'/>
                                    <StarIcon className='size-3.5 text-[#FFC966]'/>
                                    <StarIcon className='size-3.5 text-[#FFC966]'/>
                                    
                                </div>
                                
                            </div>
                            <div className='flex flex-col w-full items-start whitespace-pre'>
                                    <h6 className='font-semibold text-[16px] leading-[1.6em] text-[#555]'>
                                        From 2000+ ratings
                                    </h6>
                                </div>
                        </div>
                    </div>
                </div>
                <div className='w-full h-min flex flex-row justify-center items-center '>
                  <style>
                {`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(calc(-1 * var(--scroll-width)));
                    }
                }
                .animate-scroll {
                    animation: scroll 80s linear infinite;
                    will-change: transform;
                }
               
                `}
            </style>
                   <div className='flex-flex-col justify-center items-center w-full h-full overflow-hidden
                   p-[10px] mask-x-from-95% mask-x-to-100%'>
                     <ul className='flex flex-row w-full h-min gap-[30px]  animate-scroll '
                     ref={listRef}
                     style={customStyle} >
                        {duplicatedTestimonials.map((member,id)=>
                        <li className='h-[339px] w-[350px]' key={id}>
                            <TestimonialAutor name={member.name} image={member.image} 
                            content={member.content} stars={member.stars} subtitle={member.subtitle} />
                        </li>
                        )}
                    </ul>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialsPage;