import React from 'react';

interface BlogContent{
    header:string;
    paragraph:string;
}

interface BlogBodyProps{
    content:BlogContent[];
}

const BlogBody:React.FC<BlogBodyProps> = ({content}) => {
    return (
        <div className='w-full h-min flex flex-col justify-center items-center px-[30px] py-[150px]'>
            <div className='max-w-[900px] flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 basis-auto'>
                    {
                        content.map((item,id)=>
                        <div key={id} className='mt-[40px] first:mt-0'>
                            <h3 className='text-[22px] leading-[1.5em] font-semibold '>{item.header}</h3>
                            <p className='text-[#555] text-[16px] leading-[1.9em] mt-[20px]'>{item.paragraph}</p>
                        </div>
                        )
                    }
            </div>
        </div>
    );
};

export default BlogBody;