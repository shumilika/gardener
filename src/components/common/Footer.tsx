import Image from 'next/image';
import React from 'react';
import FacebookIcon from '../icons/FacebookIcon';
import TwitterIcon from '../icons/TwitterIcon';
import InstagramIcon from '../icons/InstagramIcon';
import YoutubeIcon from '../icons/YoutubeIcon';
import Link from 'next/link';
import FadeInSection from './FadeInSection';

const Footer = () => {
    return (
        <div className='flex flex-col justify-center items-center w-full h-min py-[100px] px-[30px]'>
            <div className='flex flex-col w-full h-min max-w-[1200px] justify-center items-center'>
               <FadeInSection>
                 <div className='grid w-full h-min grid-rows-[repeat(1,min-content)] grid-cols-[repeat(9,minmax(50px,1fr))] gap-[40px]'>
                    <div className='flex flex-col gap-[30px] items-start justify-center w-auto h-min col-span-2'>
                        <div>
                            <Link href="/">
                                <Image
                                    src={'/assets/images/logoblack.avif'}
                                    width={150}
                                    height={150}
                                    alt="logo"
                                />
                            </Link>
                        </div>
                        <div>
                            <p className='text-[#555] text-[16px] leading-[1.9em]'>
                                Unleash the full potential of your outdoor space.
                            </p>
                        </div>
                        <div className='flex flex-row justify-center items-center gap-[10px] h-min w-min'>
                            <Link href={'https://www.facebook.com/'}>
                                <FacebookIcon className='text-[#218544] size-5'/>
                            </Link>
                            <Link href={'https://x.com/'}>
                                <TwitterIcon className='text-[#218544] size-5' />
                            </Link>
                            <Link href={'https://www.instagram.com/'}>
                                <InstagramIcon className='text-[#218544] size-5' />
                            </Link>
                            <Link href={'https://www.youtube.com/'}>
                                <YoutubeIcon className='text-[#218544] size-5' />
                            </Link>
                        </div>
                    </div>
                    <div className='w-auto h-full col-span-1'></div>
                    <div className='col-span-2 flex flex-col gap-[25px] justify-center items-center w-auto h-min'>
                        <div className='w-full h-min flex flex-col items-start'>
                            <h4 className='font-semibold text-[20px] leading-[1.5em]'>
                                Company
                            </h4>
                        </div>
                        <div className='w-full h-min flex flex-col justify-center items-center gap-[5px]
                         text-[#555] text-[16px] leading-[1.9em]'>
                           <div className='flex flex-col items-start w-full'>
                             <Link href={'/'}>Home</Link>
                           </div>
                           <div className='flex flex-col items-start w-full'>
                            <Link href={'/about'}>About Us</Link>
                            </div>
                            <div className='flex flex-col items-start w-full'>
                                <Link href={'/contact'}>Contact</Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-2 flex flex-col justify-center items-center w-auto h-min gap-[25px]'>
                        <div className='w-full flex flex-col items-start'>
                            <h4 className='font-semibold text-[20px] leading-[1.5em]'>Other pages</h4>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-[5px] w-full h-min
                        text-[#555] text-[16px] leading-[1.9em]'>
                            <div className='flex flex-col items-start w-full'>
                                <Link href={'/services'}>Services</Link>
                            </div>
                            <div className='flex flex-col items-start w-full'>
                                <Link href={'/blog'}>Blog</Link>
                            </div>
                            <div className='flex flex-col items-start w-full'>
                                <Link href={'/'}>404</Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-2 flex flex-col justify-center items-center w-auto h-min gap-[25px]'>
                        <div className='w-full items-start flex flex-col'>
                            <h4 className='font-semibold text-[20px] leading-[1.5em]'>Services</h4>
                        </div>
                        <div className='w-full h-min flex flex-col justify-center items-center gap-[5px]
                        text-[#555] text-[16px] leading-[1.9em]'>
                            <div className='w-full flex flex-col items-start'>
                                <Link href={'/services/landscaping-works'}>Landscaping works</Link>
                            </div>
                            <div className='w-full flex flex-col items-start'>
                                <Link href={'/services/irrigation-systems'}>Irrigation systems</Link>
                            </div>
                            <div className='w-full flex flex-col items-start'>
                                <Link href={'/services/garden-design'}>Garden design</Link>
                            </div>
                        </div>
                    </div>
                </div>
               </FadeInSection>
            </div>
        </div>
    );
};

export default Footer;