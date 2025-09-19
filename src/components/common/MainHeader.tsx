import React from 'react';
import Nav from './Nav';

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
                            <h1 className='font-semibold text-[65px] text-white leading-[1.15em]'>
                                {title}
                            </h1>
                        </div>
                        <div className=''>
                            <p className='text-[18px] text-[#ddd] leading-[1.9em] text-center'>
                                {subtitle}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainHeader;