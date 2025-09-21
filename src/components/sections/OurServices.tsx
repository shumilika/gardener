import { services } from '@/lib/data';
import React from 'react';
import ServiceItem from '../ui/ServiceItem';

const OurServices = () => {
    return (
        <div className='bg-white px-[30px] pt-[130px] pb-[150px] h-min w-full items-center justify-center flex flex-none'>
            <div className='flex flex-col items-center justify-center max-w-[1200px] gap-[75px] flex-none h-min w-full'>
            <div className='max-w-[650px] flex flex-col gap-[20px] items-center justify-center h-min flex-none w-full'>
                <div className='flex justify-start flex-shrink-0'>
                    <h2 className='font-semibold text-[45px] text-center'>Our services</h2>
                </div>
                <div className='flex justify-start flex-shrink-0'>
                    <p className='text-[18px] text-[#555] text-center'>
                        Our team combines expertise with creativity to transform outdoor spaces into 
                        breathtaking landscapes that enhance the beauty of any property.
                    </p>
                </div>
            </div>
            <div className='grid auto-rows-fr grid-cols-3 flex-none gap-[30px] justify-center h-min w-full'>
            {services.slice(0, 3).map((item, id)=>
                <ServiceItem title={item.title} slug={item.slug} description={item.description} image={item.image} key={id}/>
            )}
            </div>
            </div>
        </div>
    );
};

export default OurServices;