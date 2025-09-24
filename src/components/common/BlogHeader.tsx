import React from 'react';
import Nav from './Nav';
import FadeInSection from './FadeInSection';

interface BlogHeaderProps{
    title:string;
    date:string;
    image:string;
}

const BlogHeader:React.FC<BlogHeaderProps> = ({title, date, image}) => {
    return (
        <div style={{backgroundImage:`url(${image})`}} className='bg-center bg-cover h-min flex flex-col justify-center items-center' >
        <div className='bg-black/73 w-full h-full flex flex-col justify-center items-center'>
                <Nav/>
            <div className='pb-[150px] pt-[100px] px-[30px] flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[900px] flex flex-col w-full h-min gap-[10px] flex-grow flex-shrink-0 basis-auto justify-center items-center '>
                <div>
                   <FadeInSection>
                     <p className='text-[16px] leading-[1.9em] text-[#ddd] text-center'>
                      {date}  
                    </p>
                   </FadeInSection>
                </div>
                <div className='w-full flex flex-col h-auto items-start'>
                   <FadeInSection delay={0.2}> 
                     <h1 className='text-white text-center tracking-tight font-semibold text-[65px] leading-[1.15em]'>{title}</h1>
                   </FadeInSection>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default BlogHeader;