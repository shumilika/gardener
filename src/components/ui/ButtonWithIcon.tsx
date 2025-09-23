'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

interface ButtonWithIconProps{
    icon:React.ElementType;
    title:string;
    text:string;
}

const ButtonWithIcon:React.FC<ButtonWithIconProps> = ({icon:Icon, title,text}) => {
    const router = useRouter()
    return (
        <div className='flex-none h-auto w-auto relative'>
                        <div className='group bg-white rounded-[20px] border-t-[5px] border-[1px] border-green-700
                        cursor-pointer flex flex-row gap-[20px] justify-center h-min w-min relative pt-[20px] px-[20px] pb-[15px]'
                        onClick={()=>router.push('/contact')}
                        >
                            <div 
                            className='bg-green-700 rounded-[10px] gap-[10px] h-[50px] w-[50px] flex justify-center items-center flex-row
                            transition-colors duration-300
                            group-hover:bg-gray-300'>
                                <Icon className='size-10 text-white
                                transition-colors duration-300
                                group-hover:text-green-700' />
                            </div>
                            <div className='flex flex-none flex-col gap-0 h-min w-min p-0'>
                                <div className='flex flex-col justify-start flex-shrink-0 flex-none h-auto w-auto whitespace-pre'>
                                    <h5 className='text-[18px] font-semibold'>{title}</h5>
                                </div>
                                <div className='flex flex-col justify-start flex-shrink-0 flex-none h-auto w-auto whitespace-pre'>
                                    <p className='text-gray-600'>{text}</p>
                                </div>
                            </div>
                        </div>
                    </div>
    );
};

export default ButtonWithIcon;