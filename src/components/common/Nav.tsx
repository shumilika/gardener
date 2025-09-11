'use client';
import React from 'react';
import logo from '../../../public/assets/images/logo.avif'
import Image from 'next/image';
import ButtonContact from '../ui/ButtonGreen';

const Nav = () => {
    
    return (
        <div className='w-full px-[30px] py-[20px] flex items-center justify-center'>
            <div className='max-w-[1200px] w-full p-[20] border border-white/10 rounded-xl bg-white/15 backdrop-blur-xs flex justify-between 
            w-full items-center'>
            <div className='grow shrink-0 basis-0 max-w-[300px] gap-[10px]'>
                <a href="/">
                 <Image
                    src={logo}
                    width={130}
                    height={130}
                    alt="logo"
                    />
                </a>
            </div>
            <div className='grow shrink-0 basis-0 justify-end flex gap-10 text-white'>
                <div className='flex'>

                <nav className='flex gap-10 items-center'>
                    <div>
                        <p>
                            <a href="/">Home</a>
                        </p>
                    </div>
                    <div>
                        <p>
                            <a href="/about">About</a>
                        </p>
                    </div>
                    <div>
                        <p>
                            <a href="/services">Services</a>
                        </p>
                    </div>
                    <div>
                        <p>
                            <a href="/blog">Blog</a>
                        </p>
                    </div>
                </nav>
                </div>
                <div className='flex w-auto h-auto'>
                    <ButtonContact/>
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default Nav;