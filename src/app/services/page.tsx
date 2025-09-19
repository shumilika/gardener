import Footer from '@/components/common/Footer';
import MainHeader from '@/components/common/MainHeader';
import CallToAction from '@/components/sections/CallToAction';
import ServiceItem from '@/components/ui/ServiceItem';
import { headerSubtitle, services } from '@/lib/data';
import React from 'react';

const page = () => {
    return (
        <div>
           <MainHeader title='Services' subtitle={headerSubtitle} image='url(/assets/images/main-header.avif)'/> 
           <div className='w-full h-min flex flex-col justify-center items-center px-[30px] py-[150px]'>
           <div className='flex flex-col max-w-[1200px] w-full h-min justify-center items-center'>
             <div className='grid auto-rows-fr grid-cols-[repeat(3,minmax(200px,1fr))] flex-none gap-[30px] justify-center h-min w-full'>
            {services.map((item, id)=>
                <ServiceItem title={item.title} slug={item.slug} description={item.description} image={item.image} />
            )}
            </div>
           </div>
           </div>
           <CallToAction/>
           <Footer/>
        </div>
    );
};

export default page;