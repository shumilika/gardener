import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ArrowUpRightIcon from '../icons/ArrowUpRightIcon';

interface BlogCardProps{
    image:string;
    title:string;
    slug:string;
    date:string;
}

const BlogCard:React.FC<BlogCardProps> = ({image, title, slug, date}) => {
    return (
        <div className='h-min w-full flex flex-col items-center justify-center rounded-[15px]'>
            <Link href={`/blog/${slug}`} className='group w-full h-full flex flex-col items-center justify-end gap-[30px]'>
                <div className='flex flex-col items-center relative w-full h-[329px]'>
                    <div className='absolute inset-0'>
                        <Image src={image} width={500} height={500} alt=''
                        className='block object-cover object-center w-full h-full rounded-[15px]'/>
                        <div className='absolute inset-0 w-full h-full flex flex-col justify-center rounded-[15px]
                        items-center 
                        group-hover:bg-gradient-to-b from-black/23 to-black/71'>
                            <ArrowUpRightIcon className='size-20 text-white hidden
                            group-hover:block'/>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center gap-[10px] w-full h-min'>
                    <div>
                        <p className='text-[#7a7a7a] text-[14px] leading-[1.9em]'>
                            {date}
                        </p>
                    </div>
                    <div>
                        <h4 className='text-[20px] font-semibold leading-[1.5em]'>
                            {title}
                        </h4>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default BlogCard;