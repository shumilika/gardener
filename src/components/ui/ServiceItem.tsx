import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

interface ServiceItemProps{
    title: string;
    description:string;
    image:string;
    slug:string;
}

const ServiceItem:React.FC<ServiceItemProps> = ({title,description,image,slug}) => {
    return (
       <div className='bg-cover bg-center h-auto w-full rounded-[15px]' style={{backgroundImage:image}}>
       <Link href={`/services/${slug}`} className='group'>
         <div 
        className='bg-gradient-to-b from-black/23 to-black/71 w-full h-[400px] p-[40px] rounded-[15px] items-start cursor-pointer        
        group-hover:from-black/70 to-black/71
        '>
            <div 
            className='flex flex-col justify-center items-center flex-nowrap flex-grow flex-shrink-0 basis-0 gap-[20px]
            w-full'>
                <div 
                className='w-full flex items-start flex-grow flex-shrink-0 basis-0 flex-col gap-[10px] justify-start '>
                    <div className='w-full h-[260px] invisible
                    group-hover:visible
                    '>
                        <p className='text-[16px] text-[#ddd]'>
                        {description}
                    </p>
                    </div>
                </div>
                <div className='flex flex-row flex-none gap-[10px] w-full h-min justify-center items-center'>
                    <div className='flex flex-col justify-start flex-shrink-0 flex-grow basis-0 h-auto whitespace-pre-wrap'>
                        <h3 className='font-semibold  text-[22px] text-white'>{title}</h3>
                    </div>
                    <div className='flex justify-end flex-none'>
                        <ArrowRightIcon className='size-7 text-white'/>
                    </div>
                </div>
            </div>
        </div>
       </Link>
       </div>
    );
};

export default ServiceItem;