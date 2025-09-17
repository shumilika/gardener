import Link from 'next/link';
import React from 'react';

const CallToAction = () => {
    return (
        <div className='flex px-[30px] py-[100px] bg-[#218544] w-full h-min justify-center'>
            <div className='max-w-[1200px] w-full h-min flex flex-col justify-center items-center'>
                <div className='flex flex-row justify-center items-center w-full h-min gap-[10px] text-white'>
                    <div className='flex flex-col justify-start flex-grow flex-shrink-0 basis-0'>
                        <h2 className='text-[45px] font-semibold leading-[1.2em]'>Need gardening service?</h2>
                    </div>
                    <div className='flex flex-col justify-end flex-none'>
                        <Link href={'/contact'} className='py-[10px] px-[20px] border border-white rounded-[10px]
                        hover:border-white/50 hover:text-white/50
                        '>
                        Request a quote
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CallToAction;