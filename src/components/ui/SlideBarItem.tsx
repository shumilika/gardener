import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface SlideBarItemProps{
    title:string;
    slug:string;
    image:string;
}

const SlideBarItem:React.FC<SlideBarItemProps> = ({title, slug, image}) => {
    return (
        <Link href={`/services/${slug}`} className='group h-min w-[350px] flex flex-row justify-center items-center gap-[15px] p-[20px] rounded-[10px] border 
        border-t-[3px] border-[#218544]'>
            <div className='w-[50px] h-[50px] relative flex-none rounded-[10px]'>
                <div className='absolute inset-0 w-full h-full'>
                    <Image src={image} width={500} height={500} alt=''
                    className='w-full h-full object-cover object-center rounded-[10px]'
                    />
                </div>
            </div>
            <div className='flex flex-row w-full h-min justify-center items-center'>
                <div className='flex flex-col w-full items-start'>
                    <h5 className='text-[18px] font-semibold leading-[1.6em]'>{title}</h5>
                </div>
                <div className='flex-none relative transform-none duration-300 group-hover:translate-x-[-10px] '>
                    <ArrowRightIcon className='size-5 text-black'/>
                </div>
            </div>
        </Link>
    );
};

export default SlideBarItem;