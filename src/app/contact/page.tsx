import Footer from '@/components/common/Footer';
import MainHeader from '@/components/common/MainHeader';
import CallToAction from '@/components/sections/CallToAction';
import React from 'react';

const page = () => {
    return (
        <div>
            <MainHeader title='Contact' image='url(/assets/images/main-header-contact.avif)'/>

            <CallToAction/>
            <Footer/>
        </div>
    );
};

export default page;