'use client'
import FadeInSection from '@/components/common/FadeInSection';
import Footer from '@/components/common/Footer';
import MainHeader from '@/components/common/MainHeader';
import CallToAction from '@/components/sections/CallToAction';
import GreenDivWithIcon from '@/components/ui/GreenDivWithIcon';
import { MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import React from 'react';

const page = () => {
    return (
        <div>
            <MainHeader title='Contact' image='url(/assets/images/main-header-contact.avif)'/>
            <div className='w-full h-min px-[30px] py-[150px] flex flex-col justify-center items-center '>
                <div className='flex flex-row justify-center items-center gap-[75px] max-w-[1200px] w-full h-min'>
                    <div className='flex flex-col justify-center items-start gap-[20px]'>
                        <div className='w-full h-min flex flex-col'>
                           <FadeInSection>
                             <h2 className='text-[45px] leading-[1.2em] font-semibold tracking-tight'>
                                Our team is available for custom requests
                            </h2>
                           </FadeInSection>
                        </div>
                        <div className='w-full'>
                           <FadeInSection>
                             <p className='text-[18px] leading-[1.9em] text-[#555]'>
                                Let us bring beauty, harmony, and tranquility to your outdoor oasis with our expert landscaping 
                                services. Your journey to a more beautiful landscape starts here.
                            </p>
                           </FadeInSection>
                        </div>
                        <div className='w-full h-[1px]'></div>
                        <div className='flex flex-row justify-center items-center gap-[10px] w-full'>
                            <GreenDivWithIcon icon={PhoneIcon} title='(595) 555-0123' text='From 9am to 5pm'/>
                            <GreenDivWithIcon icon={MapPinIcon} title='5th Avenue' text='10014 New York City'/>
                        </div>
                    </div>
                    <div className='relative w-full h-[400px] rounded-[15px]'>
                       <FadeInSection delay={0.2}>
                         <div className='absolute inset-0 w-full h-full'>
                            <Image src={'/assets/images/contant.avif'} width={500} height={500} alt='' 
                            className='w-full h-full object-cover object-center rounded-[15px]'/>
                        </div>
                       </FadeInSection>
                    </div>
                </div>
            </div>
            <div className='w-full h-min flex flex-col justify-center items-center px-[30px] pt-[130px] pb-[150px] bg-[#f7f7f7]'>
                <div className='max-w-[1200px] w-full h-min flex flex-col justify-center items-center gap-[75px]'>
                    <div className='max-w-[650px] w-full h-min flex flex-col justify-center items-center gap-[20px]'>
                       <div className='w-full h-min flex flex-col justify-center items-center'>
                        <FadeInSection>
                             <h2 className='text-[45px] leading-[1.2em] tracking-tight font-semibold'>
                            Contact form
                        </h2>
                        </FadeInSection>
                       </div>
                        <div className='w-full h-min flex flex-col justify-center items-center'>
                           <FadeInSection delay={0.2}>
                             <p className='text-[18px] leading-[1.9em] text-[#555] text-center'> 
                            Contact us today to schedule a consultation and experience the difference that passion, creativity, 
                            and expertise can make in your outdoor space.
                        </p>
                           </FadeInSection>
                        </div>
                    </div>
                    <div className='w-full max-w-[650px] h-[300px]'>
                        <form className='grid gap-[15px] w-full h-full grid-rows-[max-content_1fr_max-content] grid-cols-[1fr]'>
                            <div className='w-full grid gap-[15px] grid-flow-col'>
                                <input type="text" name='name' placeholder='Name'
                                className='bg-white outline-none border-none w-full leading-[1.4em] p-[15px] rounded-[8px]
                                text-black text-[16px] shadow-[transparent_0px_0px_0px_1px_inset]'/>
                                <input type="email" name='email' placeholder='Email'
                                className='bg-white outline-none border-none w-full leading-[1.4em] p-[15px] rounded-[8px]
                                text-black text-[16px] shadow-[transparent_0px_0px_0px_1px_inset]'/>
                            </div>
                            <textarea name="message" id="" placeholder='Message'
                            className='bg-white outline-none border-none w-full leading-[1.4em] p-[15px] rounded-[8px]
                                text-black text-[16px] shadow-[transparent_0px_0px_0px_1px_inset]'></textarea>
                            
                            <button
                            className='w-full p-[15px] bg-[#218544] rounded-[8px] leading-[1.4em] font-semibold text-[16px] text-white
                            cursor-pointer duration-300
                            hover:opacity-80'>
                                Send message
                            </button>
                            
                        </form>
                    </div>
                </div>
            </div>
            <CallToAction/>
            <Footer/>
        </div>
    );
};

export default page;