'use client'
import React, { useState } from 'react';

const AddPostPage = () => {

    const [paragraphs, setParagraphs] = useState<number[]>([1]); 

  const addParagraph = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); 
    setParagraphs((prev) => [...prev, prev.length + 1]); 
  };

  const deleteParagraph =(e: React.MouseEvent<HTMLButtonElement>, num:number) => {
    e.preventDefault()
    setParagraphs((prev) => prev.filter((p) => p !== num))
  }

    return (
        <div>
            <form action="" className='flex flex-col w-[500px] ml-8 gap-5'>
               <div className='flex flex-col w-[200px] gap-5'>
                 <input type="text" placeholder='title'  className='border '/>
                <input type="text" placeholder='slug' className='border'/>
                <input type="file" placeholder='image' className='border'/>
               </div>
               {paragraphs.map((num) => (
          <div
            key={num}
            className="border m-8 w-full flex flex-col p-2 gap-2"
          >
            {num>1 && <button onClick={(e)=>deleteParagraph(e,num)}>
                delete
            </button>}
            <h4>Path {num}</h4>
            <input type="text" placeholder="header" className="border" />
            <textarea placeholder="paragraph" className="border"></textarea>
          </div>
        ))}
                 <button onClick={addParagraph} className="self-start">
          <span className="text-[50px]">+</span>
        </button>
<button className='bg-[green] text-white p-5 w-[300px]'>
    Save article
</button>
            </form>
        </div>
    );
};

export default AddPostPage;