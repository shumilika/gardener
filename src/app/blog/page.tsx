import Footer from '@/components/common/Footer';
import MainHeader from '@/components/common/MainHeader';
import CallToAction from '@/components/sections/CallToAction';
import { headerSubtitle } from '@/lib/data';
import React from 'react';

const page = () => {
    return (
        <div>
            <MainHeader title='Blog' subtitle={headerSubtitle} image='url(/assets/images/main-header-blog.avif)'/>

            <CallToAction/>
            <Footer/>
        </div>
    );
};

export default page;