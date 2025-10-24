"use client"
import AddPostPage from '@/components/admin/AddPostPage';
import React, { useState } from 'react';

const page = () => {
    const [openAddPostModal, setOpenAddPostModal] = useState(false)
    const handleCloseAddPostModalAction = () =>{
        setOpenAddPostModal(false)
    }
    return (
        <div>
            <button onClick={()=>setOpenAddPostModal(true)}>Create new article</button>
            <AddPostPage isOpen={openAddPostModal} onClose={handleCloseAddPostModalAction} />
        </div>
    );
};

export default page;