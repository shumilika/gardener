import { gallery } from '@/lib/data';
import Image from 'next/image';
import React from 'react';



const Gallery = () => {
    return (
        <div className='flex flex-none justify-center items-center px-[30px] pb-[150px] pt-[130px] h-min w-full flex-col'>
            <div className='flex gap-[75px] flex-col justify-center items-center max-w-[1200px] w-full h-min'>
                <div className='max-w-[650px] flex flex-col justify-center items-center gap-[20px] h-min w-full'>
                    <div>
                        <h2 className='font-semibold text-[45px] leading-[1.2em]'>Our recent works</h2>
                    </div>
                    <div>
                        <p className='text-[18px] leading-[1.9em] text-[#555] text-center'>
                            We take a personalized approach to every project, ensuring that each garden we create is a reflection 
                            of our client’s unique vision and lifestyle.</p>
                    </div>
                </div>
                <div className='grid auto-rows-fr grid-cols-[repeat(3,minmax(200px,1fr))] grid-rows-[repeat(6,minmax(0,1fr))]
                flex-none gap-[30px] h-[900px] justify-center w-full
                '>
                
                    
                   {gallery.map((item,id)=>
                   <div className={`${item.gridRow} w-full h-full rounded-[10px]`} key={id}>
                         <Image src={item.url} width={500} height={500} alt=''
                         className='w-full h-full object-cover object-center rounded-[10px]'
                         />
                    </div>
                )}
                    
                
                    
                </div>
            </div>
        </div>
    );
};

export default Gallery;