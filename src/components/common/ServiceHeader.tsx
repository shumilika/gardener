import React from 'react';
import Nav from './Nav';

interface ServiceHeaderProps{
    title:string;
    description:string;
    image:string;
    icon:React.ElementType;
}

const ServiceHeader:React.FC<ServiceHeaderProps> = ({title, description, image, icon:Icon}) => {
    return (
        <div style={{backgroundImage:`${image}`}} className='bg-center bg-cover' >
        <div className='bg-black/73 w-full h-full flex flex-col justify-center items-center'>
                <Nav/>
            <div className='max-w-[620px] flex flex-col w-full h-min gap-[30px] justify-center items-center py-[150px]'>
                <div>
                    <div className='border border-white rounded-[10px] p-[10px]'>
                    <Icon className='size-8 text-white' />
                    </div>
                </div>
                <div>
                    <h1 className='text-white font-semibold text-[65px] leading-[1.15em]'>{title}</h1>
                </div>
                <div>
                    <p className='text-[18px] leading-[1.9em] text-[#ddd] text-center'>
                      {description}  
                    </p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ServiceHeader;