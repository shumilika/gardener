
import StaticticBox from '@/components/admin/StaticticBox';
import VisitorsStatistics from '@/components/admin/VisitorsStatistics';
import ArticleIcon from '@/components/icons/ArticleIcon';
import NewRequestIcon from '@/components/icons/NewRequestIcon';
import VisitorsIcon from '@/components/icons/VisitorsIcon';
import React from 'react';

const page = () => {
    return (
        <div className='w-full px-10'>
            <div className='m-10 text-center'>
                <h1 className='text-[60px] font-semibold'>Hello, Admin!</h1>
                <p className='text-gray-600'>Here is a quick overview of your website activity.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
                <StaticticBox title='Visitors (7 days)' bgColor='#ac5e39ff' icon={VisitorsIcon} amount={1200}/>
                <StaticticBox title='New Requests' bgColor='#28ab39ff' icon={NewRequestIcon} amount={3}/>
                <StaticticBox title='Total Articles' bgColor='#6a56ebff' icon={ArticleIcon} amount={2}/>
            </div>
           <div className='grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8'>
             <VisitorsStatistics/>
           </div>
            
        </div>
    );
};

export default page;