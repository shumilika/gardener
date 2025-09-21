import Image from 'next/image';
import React from 'react';
import StarRating from '../sections/StarRating';

interface TestimonialAutorProps{
    name:string;
    image:string;
    subtitle:string;
    stars:number;
    content:string;
}

const TestimonialAutor:React.FC<TestimonialAutorProps> = ({name, image, subtitle, stars, content}) => {
    return (
        <div className='rounded-[15px] border border-[#218544] border-t-[5px] w-[350px]'>
            <div className='p-[40px] flex flex-col gap-[20px] h-auto'>
            <div className='flex flex-col w-full'>
                <div className='flex flex-row gap-[20px] w-full'>
                    <div className='flex flex-col items-center h-[50px] w-[50px] relative rounded-[40px] flex-grow-0 flex-shrink-0 basis-auto'>
                        <div className='absolute inset-0'>
                            <Image src={image} width={500} height={500} alt=''
                            className='object-cover object-center rounded-[40px] block w-full h-full'/>
                        </div>
                    </div>
                    <div className='flex flex-col w-full flex-grow flex-shrink-0 basis-0'>
                        <div>
                            <h6 className='text-[16px] font-semibold leading-[1.6em]'>{name}</h6>
                        </div>
                        <div>
                            <p className='text-[#7a7a7a] text-[14px] leading-[1.15em]'>{subtitle}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-start w-full'>
                <p className='text-[#555] text-[16px] leading-[1.9em]'>
                    {content}
                </p>
            </div>
            <div>
                <StarRating start={stars}/>
            </div>
            </div>
        </div>
    );
};

export default TestimonialAutor;