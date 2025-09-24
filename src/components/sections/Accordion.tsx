'use client';

import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';


const accordionData = [
  {
    id: 'item-1',
    question: 'Do you offer maintenance services?',
    answer: 'Yes, we provide comprehensive landscape maintenance services to keep your garden looking its best year-round. We offer tailored maintenance plans to suit your schedule and budget.',
  },
  {
    id: 'item-2',
    question: 'Do you use organic gardening methods?',
    answer: 'We prioritize sustainable practices and use organic fertilizers and herbicides when possible. We believe in promoting the health and vitality of your garden while minimizing environmental impact.',
  },
  {
    id: 'item-3',
    question: 'Are your gardeners licensed and insured?',
    answer: 'Yes, we are fully licensed and insured for your peace of mind. Our team consists of experienced professionals who are committed to delivering high-quality workmanship and exceptional service.'
    ,
  },
]


const AccordionItem: React.FC<{
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  setOpen: () => void;
}> = ({ question, answer, isOpen, setOpen }) => {
  return (
   <div className='h-auto w-full flex-none'>
     <div className={`flex flex-col p-[30px] bg-white rounded-[10px] border border-t-[3px] border-[#218544] h-min w-full
     cursor-pointer 
     ${isOpen ? 'gap-[20px]' : 'gap-0'} `}>
      <button
        className="flex flex-row flex-none gap-[10px] h-min justify-center items-center w-full cursor-pointer
        focus:outline-none"
        onClick={setOpen}
      >
         <div className='flex flex-col flex-grow flex-shrink-0 basis-0 justify-start h-auto'>
           <h4 className="font-semibold text-[20px] text-left">{question}</h4>
         </div>
       <div className='flex-none h-[27px] w-[20px]'></div>
       <div className='flex-none'>
         <ChevronDownIcon
          className={'size-6 text-black'}
        />
       </div>
        
      </button>
      <div
        className={`overflow-hidden ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col justify-start flex-none h-auto w-full">
          <p className='text-[16px] text-[#555] leading-[1.9em]'>{answer}</p>
        </div>
      </div>
    </div>
   </div>
  );
};


const Accordion = () => {
 
  const [openItem, setOpenItem] = useState<string | null>(accordionData[0].id);

  const handleToggle = (id: string) => {
    if (openItem === id) {
      return;
    }
    setOpenItem(id);
  };

  return (
    <div className="flex flex-col overflow-hidden gap-[20px] w-full items-center h-min ">
      {accordionData.map((item) => (
        <AccordionItem
          key={item.id}
          question={item.question}
          answer={item.answer}
          isOpen={openItem === item.id}
          setOpen={() => handleToggle(item.id)}
        />
      ))}
    </div>
  );
};

export default Accordion;
