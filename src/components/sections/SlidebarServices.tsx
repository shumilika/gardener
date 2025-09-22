import { services } from '@/lib/data';
import React from 'react';
import SlideBarItem from '../ui/SlideBarItem';

interface SlidebarServicesProps{
    slug:string;
}

const SlidebarServices:React.FC<SlidebarServicesProps> = ({slug}) => {
    return (
        <div className='w-full max-w-[350px] h-min flex flex-col justify-center items-start gap-[20px]'>
            <div className='flex flex-col w-full items-start'>
                <p className='text-[#7a7a7a] text-[14px] leading-[1.9em]'>Other services</p>
            </div>
            <div className='w-full h-min flex flex-col justify-start items-start gap-[10px]'>
           {services
                .filter(item => item.slug !== slug)
                .map((item, id) => (
                    <SlideBarItem title={item.title} slug={item.slug} image={item.image} key={id} />
            ))}
            </div>
        </div>
    );
};

export default SlidebarServices;