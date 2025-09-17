import React from 'react';
import { PlayCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Accordion from '../Accordion';

const FrequentlyAskedQuestions = () => {
    return (
        <div className='bg-[#f7f7f7] px-[30px] py-[150px] flex flex-col flex-none items-center justify-center h-min w-full'>
            <div className='flex flex-col flex-none max-w-[1200px] justify-center items-center h-min w-full flex-nowrap gap-[10px]'>
                <div className='flex flex-row items-center justify-center gap-[75px] flex-none w-full h-min'>
                    <div className='bg-[url(/assets/images/youtubelink.avif)] bg-cover bg-center w-full h-auto self-stretch flex-grow flex-shrink-0 basis-0
                    rounded-[15px]'>
                       <Link href='https://www.youtube.com/' className='group'>
                        <div className='flex flex-col justify-center items-center w-full h-full bg-black/20 rounded-[15px]
                        group-hover:bg-black/50'>
                            <PlayCircleIcon className='size-20 text-white
                            group-hover:size-25'/>
                        </div>
                       </Link>
                    </div>
                    <div className='flex-grow flex-shrink-0 basis-0 h-auto'>
                    <Accordion/>
                    </div>
                </div>
            </div>            
        </div>
    );
};

export default FrequentlyAskedQuestions;