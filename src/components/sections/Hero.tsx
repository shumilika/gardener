'use client';
import React from 'react';
import Nav from '../common/Nav';
import BookACall from './BookACall';
import { MapPinIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import { StarIcon } from '@heroicons/react/16/solid';
import Image from 'next/image';
import reviewer1 from '../../../public/assets/images/16FpqHSDpMP5wk238yiG6KHI6cY.avif'
import reviewer2 from '../../../public/assets/images/sbvkp3oVxhnvFxX2Esktsc8k4Y.avif'
import reviewer3 from '../../../public/assets/images/vHMSEWw5B42ZyOnn7b3crhvXwSY.avif'



const Hero = () => {
    const router = useRouter()
   
    return (
        <div className='bg-[url(/assets/images/font-nav.avif)] bg-blend-soft-light bg-local w-full h-screen '>
            <div className='bg-gradient-to-b from-black/50 to-black/70 w-full h-screen'>
            <Nav/>
          <div 
          className='flex-none  flex-col flex gap-[10px] h-min items-center justify-center p-0 w-full mt-[100px]'
          >
              <div className='flex m-[20px] gap-[50px] max-w-[1200px] items-center'>
                <div className='gap-[20px] flex flex-col flex-grow flex-shrink-0 basis-0'>
                    <div className='flex flex-row flex-nowrap flex-none gap-[15px] items-center 
                    justify-center relative h-min w-min '>
                    <div className='flex-none  h-[40px] w-[90px] relative'>
                       <div className='block absolute rounded-[50px] border-[2px] border-white w-[40px] bottom-0 top-0 left-0'>
                         <div className='absolute inset-0 rounded-[inherit]'>
                            <Image src={reviewer1} alt='Reviewer' width={100} height={100}
                            className='object-cover object-center w-full h-full block rounded-[inherit]'
                            />
                        </div>
                       </div>
                       <div className='block absolute rounded-[50px] border-[2px] border-white w-[40px] bottom-0 top-0 left-[calc(50%-20px)]'>
                         <div className='absolute inset-0 rounded-[inherit]'>
                            <Image src={reviewer2} alt='Reviewer' width={100} height={100}
                            className='object-cover object-center w-full h-full block rounded-[inherit]'
                            />
                        </div>
                       </div>
                        <div className='block absolute rounded-[50px] border-[2px] border-white w-[40px] bottom-0 top-0 right-0'>
                            <div className='absolute inset-0 rounded-[inherit]'>
                            <Image src={reviewer3} alt='Reviewer' width={100} height={100}
                            className='object-cover object-center w-full h-full block rounded-[inherit]'
                            />
                        </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[5px] items-start w-min h-min flex-nowrap flex-grow flex-shrink-0 basis--0 justify-center'>
                        <div className='flex flex-row flex-none items-center flex-nowrap justify-center h-min w-min gap-[1px]'>
                            <StarIcon className='size-3 text-yellow-400'/>
                            <StarIcon className='size-3 text-yellow-400'/>
                            <StarIcon className='size-3 text-yellow-400'/>
                            <StarIcon className='size-3 text-yellow-400'/>
                            <StarIcon className='size-3 text-yellow-400'/>
                        </div>
                        <div className='flex flex-col justify-start flex-shrink-0 h-auto flex-none w-auto whitespace-pre'>
                            <h6 className='text-gray-300'>From 2000+ ratings</h6>
                        </div>
                    </div>
                    </div>
                    <div className='flex-none h-[1px] w-full'></div>
                   <div
                   className='outline-none flex flex-col justify-start flex-none h-auto relative whitespace-pre-wrap w-full break-words'
                   >
                    <h1 className='text-white font-semibold text-[65px] leading-[1.15em]'>
                         Crafting gardens, cultivating dreams
                    </h1>
                   </div>
                    <div className='outline-none flex flex-none flex-col justify-start flex-shrink-0 relative h-auto whitespace-pre-wrap w-full break-words '>
                        <p className='text-gray-300 text-lg'>
                            With our expert team of gardeners and landscapers, 
                            we turn ordinary gardens into extraordinary havens of beauty.
                        </p>
                    </div>
                    <div className='flex-none h-[1px] w-full'></div>
                    <div className='flex-none h-auto w-auto relative'>
                        <div className='group bg-white rounded-[20px] border-t-[5px] border-[1px] border-green-700
                        cursor-pointer flex flex-row gap-[20px] justify-center h-min w-min relative pt-[20px] px-[20px] pb-[15px]'
                        onClick={()=>router.push('/contact')}
                        >
                            <div 
                            className='bg-green-700 rounded-[10px] gap-[10px] h-[50px] w-[50px] flex justify-center items-center flex-row
                            transition-colors duration-300
                            group-hover:bg-gray-300'>
                                <MapPinIcon className='size-10 text-white
                                transition-colors duration-300
                                group-hover:text-green-700' />
                            </div>
                            <div className='flex flex-none flex-col gap-0 h-min w-min p-0'>
                                <div className='flex flex-col justify-start flex-shrink-0 flex-none h-auto w-auto whitespace-pre'>
                                    <h5 className='text-[18px] font-semibold'>New York City</h5>
                                </div>
                                <div className='flex flex-col justify-start flex-shrink-0 flex-none h-auto w-auto whitespace-pre'>
                                    <p className='text-gray-600'>Brooklyn & Queens Area</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
         <div className='flex gap-[10px] items-end flex-grow flex-shrink-0 basis-0 flex-col h-min justify-center'>
              <BookACall/>
         </div>
            </div>
          </div>
            </div>

        </div>
    );
};

export default Hero;