import React from 'react';
import Nav from './Nav';
import FadeInSection from './FadeInSection';

interface MainHeaderProps{
    title:string;
    subtitle?:string;
    image:string;
}

const MainHeader:React.FC<MainHeaderProps> = ({title,subtitle,image}) => {
    
    return (
        <div style={{backgroundImage:`${image}`}} className='bg-center bg-cover' >
            <div className='bg-gradient-to-b from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.8)] 
                w-full h-full flex flex-col justify-center items-center'>
                <Nav/>
                <div className='px-[30px] pb-[150px] pt-[130px] flex flex-col justify-center items-center w-full h-min'>
                    <div className='max-w-[700px] flex flex-col justify-center items-center gap-[30px] w-full h-min'>
                        <div className=''>
                           <FadeInSection>
                             <h1 className='font-semibold text-[65px] text-white leading-[1.15em]'>
                                {title}
                            </h1>
                           </FadeInSection>
                        </div>
                        <div className=''>
                            <FadeInSection delay={0.2}>
                                <p className='text-[18px] text-[#ddd] leading-[1.9em] text-center'>
                                {subtitle}
                            </p>
                            </FadeInSection>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainHeader;