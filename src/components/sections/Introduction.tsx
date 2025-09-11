import React from 'react';
import QuoteIcon from '../icons/QuoteIcon';
import LeafIcon from '../icons/LeafIcon';
import ScissorsIcon from '../icons/ScissorsIcon';

const Introduction = () => {
    return (
        <div className='bg-white w-full flex flex-col h-min items-center justify-center py-[150px] px-[30px] relative'>
            <div className='max-w-[1200px] flex flex-col gap-[10px] items-center flex-none flex-nowrap h-min justify-center relative w-full'>
                <div className='flex items-center flex-row flex-none gap-[75px] flex-nowrap justify-center h-min relative w-full'>
                    <div 
                    className='bg-[url(/assets/images/Hd4SejcWqOgFfBqaHGkWNOHAXY.avif)] flex items-center flex-grow flex-shrink-0  basis-0
                    flex-col flex-nowrap gap-[10px] h-min justify-center relative w-[1px] bg-center bg-cover rounded-[15px]'
                    >
                        <div className='flex flex-col items-center justify-end rounded-[15px] flex-none flex-nowrap gap-[10px] 
                        h-[500px] p-[30px] relative w-full'
                        >
                           <div className='flex bg-white items-start flex-none flex-row gap-[20px] h-min justify-center p-[30px] relative 
                           w-full rounded-[10px]'>
                            <div className='flex flex-none h-[30px] w-[30px] relative'>
                            <QuoteIcon className='text-green-700 size-5'/>
                           </div>
                           <div className='flex flex-col items-center flex-grow flex-shrink-0 basis-0 flex-nowrap gap-[10px] h-min 
                           justify-center relative'
                           >
                            <div className='flex flex-col justify-start w-full flex-none h-auto whitespace-pre-wrap wrap-break-word'>
                                 <h5 className='text-lg font-semibold leading-[28px] '>
                                We take the time to understand your unique needs and preferences 
                                to ensure that your garden reflects your vision.
                            </h5>
                            </div>
                            <div className='flex justify-start h-auto w-full flex-none whitespace-pre-wrap wrap-break-word'>
                                <p className='text-[14px] leading-[26px] text-gray-500'>
                                Ricky Stokes, CEO
                            </p>
                            </div>
                           </div>
                           </div>
                        </div>
                    </div>
                    <div className='flex items-center flex-grow flex-shrink-0 basis-0 flex-col flex-nowrap gap-[20px] h-min justify-center 
                    relative'
                    >
                        <div className='flex justify-start flex-col w-full h-auto flex-none whitespace-pre-wrap wrap-break-word'>
                            <h2 className='text-[42px] font-semibold '>
                                We believe in turning your outdoor space into your personal oasis
                            </h2>
                        </div>
                        <div className='flex justify-start flex-col w-full h-auto flex-none whitespace-pre-wrap wrap-break-word'>
                            <p className='text-[18px] text-gray-500 leading-[1.9em]'>Whether you have a sprawling backyard or a cozy balcony,
                                 our team of experienced gardeners and landscapers is dedicated to bringing your green dreams to life.</p>
                        </div>
                        <div className='flex justify-start flex-col w-full h-auto flex-none whitespace-pre-wrap wrap-break-word gap-[20px]'>
                            <div className='flex flex-row gap-[20px] items-center'>
                               <div className='bg-green-700 w-[40px] h-[40px] relative flex justify-center items-center rounded-[10px]'>
                                <LeafIcon className='size-5 text-white'/>
                               </div>
                               <div className='flex justify-start flex-col h-auto flex-none whitespace-pre-wrap wrap-break-word'>
                                <h4 className='text-[20px] leading-[1.5em] font-semibold'> Sustainable gardening practices</h4>
                               </div>
                            </div>
                            <div className='flex flex-row gap-[20px] items-center'>
                                <div className='bg-green-700 w-[40px] h-[40px] relative flex justify-center items-center rounded-[10px]'>
                                    <ScissorsIcon className='size-5 text-white'/>
                                </div>
                               <div className='flex justify-start flex-col h-auto flex-none whitespace-pre-wrap wrap-break-word'>
                                <h4 className='text-[20px] leading-[1.5em] font-semibold'> Personalized service for your needs</h4>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Introduction;