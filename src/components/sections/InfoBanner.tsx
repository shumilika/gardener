import React from 'react';
import ButtonWithIcon from '../ui/ButtonWithIcon';
import { PhoneIcon } from '@heroicons/react/24/outline';

const InfoBanner = () => {
    return (
        <div className='bg-[url(/assets/images/bSpgFSfmV3IRw5I3O9Kypuyz0WQ.jpg)] bg-center bg-no-repeat bg-cover'>
            <div className='bg-gradient-to-b from-black/50 to-black/70 w-full h-full px-[30px] py-[75px] flex flex-col justify-center flex-none items-center'>
            <div className='flex flex-col gap-[10px] justify-center max-w-[1200px] items-center h-min flex-none w-full'>
               <div className='flex flex-row gap-[10px] flex-none h-min w-full justify-center items-center'>
                 <div className='max-w-[400px] flex flex-col items-center flex-grow flex-shrink-0 basis-0 h-min justify-center'>
                   <div className='flex flex-col flex-shrink-0 flex-none h-auto justify-start whitespace-pre-wrap w-full wrap-break-word'>
                     <h2 className='text-white font-semibold text-[24px] '>
                        Our gardeners are available from Monday to Friday
                    </h2>
                   </div>
                </div>
                <div className='flex items-center justify-end flex-grow flex-shrink-0 basis-0'>
                <ButtonWithIcon icon={PhoneIcon} title='(595) 555-0123' text='From 9am to 5pm'/>
                </div>
               </div>
            </div>
            </div>
        </div>
    );
};

export default InfoBanner;