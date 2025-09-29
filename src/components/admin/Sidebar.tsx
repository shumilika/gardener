import Link from 'next/link';
import React from 'react';
import PanelIcon from '../icons/PanelIcon';
import BlogIcon from '../icons/BlogIcon';
import MailsIcon from '../icons/MailsIcon';

const Sidebar = () => {
    return (
         <aside className="w-64  flex-shrink-0 bg-[#1F2937] text-[#fff] flex flex-col">
             <div className=" h-16 flex items-center justify-center text-2xl font-bold text-[#fff] tracking-wider">
                Gardener CMS
            </div>
            <nav className="flex-1 px-4 py-6 space-y-2">
                <Link href="/admin" className="nav-link bg-gray-700 text-[#fff] flex items-center px-4 
                py-2 rounded-lg transition-colors duration-200 hover:bg-gray-700">
                    <PanelIcon className='mr-3 size-4'/>
                    Panel
                </Link>
                <Link href="/admin/blog" className="nav-link flex items-center px-4 py-2 rounded-lg 
                transition-colors duration-200 hover:bg-gray-700">
                    <BlogIcon className='mr-3 size-4'/>
                    Blog
                </Link>
                <Link href="/admin/contacts" className="nav-link flex items-center px-4 py-2 rounded-lg 
                transition-colors duration-200 hover:bg-gray-700">
                    <MailsIcon className='size-4 mr-3'/>
                    Contacts
                </Link>
            </nav>
            <div className="p-4 border-t border-gray-700">
                <p className="text-sm">© 2025 Gardener Inc.</p>
            </div>
           
        </aside>
    );
};

export default Sidebar;