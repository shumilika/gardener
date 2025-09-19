import MainHeader from '@/components/common/MainHeader';
import { headerSubtitle } from '@/lib/data';
import React from 'react';

const page = () => {
    return (
        <div>
         <MainHeader title='About Us' subtitle={headerSubtitle} image='url(/assets/images/main-header.avif)'/> 
        </div>
    );
};

export default page;