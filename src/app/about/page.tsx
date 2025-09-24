import FadeInSection from '@/components/common/FadeInSection';
import Footer from '@/components/common/Footer';
import MainHeader from '@/components/common/MainHeader';
import CallToAction from '@/components/sections/CallToAction';
import TeamMemberBox from '@/components/ui/TeamMemberBox';
import { headerSubtitle, teamMembers } from '@/lib/data';
import Image from 'next/image';
import React from 'react';

const page = () => {
    return (
        <div>
         <MainHeader title='About Us' subtitle={headerSubtitle} image='url(/assets/images/main-header.avif)'/> 
       
            <div className='flex flex-col w-full h-min px-[30px] py-[150px] items-center justify-center'>
                <div className='max-w-[1200px] h-min w-full flex flex-col items-center justify-center'>
                    <div className='flex flex-row w-full h-min gap-[75px] justify-center items-center'>
                        <div className='flex h-[700px] relative flex-grow flex-shrink-0 basis-0'>
                           <FadeInSection>
                            <div className='absolute inset-0'>
                                 <Image src={'/assets/images/about-us.avif'} width={500} height={500} alt=''
                                className='object-center object-cover w-full h-full rounded-[15px]'/>
                            </div>
                            </FadeInSection>
                        </div>
                        <div className='flex flex-col items-center justify-center w-full h-min flex-grow flex-shrink-0 basis-0
                        gap-[20px]'>
                            <div>
                               <FadeInSection delay={0.2}>
                                 <h2 className='text-[45px] font-semibold leading-[1.2em]'>
                                    Our journey began with a simple idea</h2>
                               </FadeInSection>
                            </div>
                           <FadeInSection delay={0.3}>
                             <div className='text-[#555] text-[18px] leading-[1.9em]'>
                                <p>
                                    Driven by a desire to share the joy of gardening with others, David Peterson founded Gardener 
                                    with a simple mission: to create beautiful outdoor spaces that inspire and delight.</p>
                                <p className='mt-[20px]'>
                                    Through innovative design and sustainable practices, we strive to create outdoor spaces that nourish 
                                    the soul and inspire a deeper appreciation for the natural world.
                                </p>
                            </div>
                           </FadeInSection>
                            <div className='h-1 flex-none w-full'></div>
                            <div className='flex flex-row w-full h-min gap-[10px] justify-center items-center '>
                              
                                 <div className='flex flex-col w-full h-min gap-[10px] justify-center items-start'>
                                     <FadeInSection>
                                    <div>
                                        <h1 className='text-[65px] font-semibold leading-[1.15em] text-[#218544]'
                                        >15</h1>
                                    </div>
                                    <div>
                                        <h4 className='font-semibold text-[20px] leading-[1.5em]'>
                                            Years in Business
                                        </h4>
                                    </div>
                                    </FadeInSection>
                                </div>
                               
                                
                                    <div className='flex flex-col w-full h-min gap-[10px] justify-center items-start'>
                                         <FadeInSection delay={0.2}>
                                    <div>
                                        <h1 className='text-[65px] font-semibold leading-[1.15em] text-[#218544]'
                                        >3k+</h1>
                                    </div>
                                    <div>
                                        <h4 className='font-semibold text-[20px] leading-[1.5em]'>
                                            Clients Served
                                        </h4>
                                    </div>
                                     </FadeInSection>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col w-full h-min bg-[#f7f7f7] px-[30px] py-[150px] justify-center items-center'>
                <div className='max-w-[1200px] w-full h-min flex flex-col justify-center items-center gap-[75px]'>
                    <div className='flex flex-col justify-center items-center max-w-[650px] w-full gap-[20px]'>
                        <div>
                            <FadeInSection>
                                <h2 className='text-[45px] font-semibold leading-[1.2em]'>
                                Meet the team</h2>
                            </FadeInSection>
                        </div>
                        <div>
                            <FadeInSection delay={0.2}>
                                <p className='text-[18px] leading-[1.9em] text-[#555] text-center'>
                                Whether you're a seasoned gardener or just getting started, our blog is your go-to resource for all things gardening.
                            </p>
                            </FadeInSection>
                        </div>
                    </div>
                    <div className='grid w-full h-min flex-grow-0 flex-shrink-0 basis-auto gap-[30px] 
                    auto-rows-min grid-cols-3'>
                        {
                            teamMembers.map((member,id)=>
                                <TeamMemberBox name={member.name} position={member.position} image={member.url} key={id}/>
                            )
                        }
                    </div>
                </div>
            </div>
        
         <CallToAction/>
         <Footer/>
        </div>
    );
};

export default page;