'use client';
import React from 'react';


interface GreenDivWithIconProps{
    icon:React.ElementType;
    title:string;
    text:string;
}

const GreenDivWithIcon:React.FC<GreenDivWithIconProps> = ({icon:Icon, title,text}) => {
    
    return (
            <div className='flex flex-row gap-[20px] justify-center items-center h-min w-full relative'>
                <div className='bg-green-700 rounded-[10px] h-[50px] w-[50px] flex justify-center items-center flex-col'>
                    <Icon className='size-8 text-white'/>
                </div>
                <div className="flex flex-none flex-col h-min w-min flex-grow flex-shrink-0 basis-0">
                    <div className="flex flex-col justify-start flex-shrink-0 flex-none h-auto w-auto whitespace-pre">
                        <h5 className="text-[18px] font-semibold">{title}</h5>
                    </div>
                    <div className='flex flex-col justify-start flex-shrink-0 flex-none h-auto w-auto whitespace-pre'>
                        <p className="text-gray-600">{text}</p>
                    </div>
                </div>
            </div>
    );
};

export default GreenDivWithIcon;