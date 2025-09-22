import React from 'react';
import SlidebarServices from '../sections/SlidebarServices';

interface ContentItem{
    header:string;
    paragraph:string;
}

interface ServiceBodyProps{
    content:ContentItem[];
    slug:string;
}

const ServiceBody:React.FC<ServiceBodyProps> = ({content,slug}) => {
    return (
        <div className='flex flex-col justify-center items-center w-full h-min px-[30px] py-[150px]'>
            <div className='max-w-[1200px] flex flex-row gap-[75px] justify-center items-start flex-grow-0 flex-shrink-0 basis-auto'>
                <div className='w-full h-min flex flex-col flex-grow flex-shrink-0 basis-0'>
                    {
                        content.map((item,id)=>
                        <div key={id} className='mt-[40px] first:mt-0'>
                            <h3 className='text-[22px] leading-[1.5em] font-semibold '>{item.header}</h3>
                            <p className='text-[#555] text-[16px] leading-[1.9em] mt-[20px]'>{item.paragraph}</p>
                        </div>
                        )
                    }
                </div>
                <SlidebarServices slug={slug} />
            </div>
        </div>
    );
};

export default ServiceBody;