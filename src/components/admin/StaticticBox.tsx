import React from 'react';

interface StaticticBoxProps{
    title:string;
    bgColor:string;
    icon:React.ElementType;
    amount:number;
}

const StaticticBox:React.FC<StaticticBoxProps> = ({title, bgColor,icon:Icon, amount}) => {
    return (
        <div className='p-6 bg-white rounded-xl shadow-md space-x-4 flex items-center max-w-[400px] w-full'>
            <div className='flex gap-5 flex-row justify-start items-center w-full h-full'>
                <div className='rounded-[50%]' 
                style={{backgroundColor:bgColor}}>
                    <Icon className='size-7' />
                </div>
                <div>
                    <p className='text-sm text-gray-500'>{title}</p>
                    <h3 className='text-2xl font-bold'>{amount}</h3>
                </div>
            </div>
        </div>
    );
};

export default StaticticBox;