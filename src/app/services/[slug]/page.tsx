import ServiceHeader from '@/components/common/ServiceHeader';
import { services } from '@/lib/data';
import { notFound } from 'next/navigation';
import React from 'react';
import { TvIcon } from '@heroicons/react/24/outline';
import ServiceBody from '@/components/common/ServiceBody';
import CallToAction from '@/components/sections/CallToAction';
import Footer from '@/components/common/Footer';

interface ItemPageProps {
  params: {
    slug: string;
  };
}

const page = ({ params }: ItemPageProps) => {

  const service = services.find((s) => s.slug === params.slug);
 if (!service) {
    notFound();
  }
    return (
        <div>
          <ServiceHeader title={service.title} image={service.image} description={service.description} icon={service.icon} /> 
          <ServiceBody/>
          <CallToAction/> 
          <Footer/>
        </div>
    );
};

export default page;