import Image from 'next/image';
import React from 'react';

interface TeamMemberBoxProps{
    name:string;
    position:string;
    image:string;
}

const TeamMemberBox:React.FC<TeamMemberBoxProps> = ({name,position,image}) => {
    return (
        <div className='w-full h-[400px] flex flex-col justify-center items-center rounded-[15px] border-[#218544] border
         border-b-[5px]'>
            <div className='h-min w-full flex flex-grow flex-shrink-0 basis-0 relative'>
               <div className='absolute inset-0'>
                 <Image src={image} width={500} height={500} alt=''
                 className='object-cover object-center w-full block h-full rounded-t-[15px]'/>
               </div>
            </div>
            <div className='flex flex-col justify-center items-center gap-[5px] p-[30px] w-full h-min'>
                <div>
                    <h4 className='text-[20px] leading-[1.5em] font-semibold'>{name}</h4>
                </div>
                <div>
                    <p className='text-[#7a7a7a] text-[14px] leading-[1.9em]'>{position}</p>
                </div>
            </div>
        </div>
    );
};

export default TeamMemberBox;